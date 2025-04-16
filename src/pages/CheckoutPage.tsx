
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { Loader2 } from 'lucide-react';

// Remove the Supabase initialization for now since environment variables aren't set up
// We'll simulate the checkout process instead

// Event information will be passed via location state
interface CheckoutState {
  eventTitle: string;
  ticketType: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  eventId: string;
}

interface CheckoutFormData {
  name: string;
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}

const CheckoutPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);

  // Get checkout information from location state or redirect if missing
  const checkoutInfo = location.state as CheckoutState;
  
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>();

  if (!checkoutInfo) {
    navigate('/');
    return null;
  }

  const { eventTitle, ticketType, quantity, unitPrice, totalPrice, eventId } = checkoutInfo;

  const handlePayment = async (data: CheckoutFormData) => {
    try {
      setIsProcessing(true);
      
      // Simulate successful payment for development
      setTimeout(() => {
        setIsProcessing(false);
        navigate('/payment-success', { 
          state: { 
            eventTitle, 
            ticketType, 
            quantity, 
            totalPrice,
            orderNumber: `EH-${Date.now().toString().substring(7)}`
          } 
        });
      }, 2000);
      
    } catch (error) {
      console.error('Payment error:', error);
      setIsProcessing(false);
      toast({
        variant: "destructive",
        title: "Payment Failed",
        description: "There was an issue processing your payment. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Complete Your Purchase</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form id="payment-form" onSubmit={handleSubmit(handlePayment)} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          placeholder="John Doe"
                          {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="johndoe@example.com"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input 
                        id="cardNumber" 
                        placeholder="1234 5678 9012 3456"
                        {...register("cardNumber", { 
                          required: "Card number is required",
                          pattern: {
                            value: /^\d{16}$/,
                            message: "Invalid card number"
                          }
                        })}
                      />
                      {errors.cardNumber && (
                        <p className="text-sm text-red-500">{errors.cardNumber.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input 
                          id="expiryDate" 
                          placeholder="MM/YY"
                          {...register("expiryDate", { 
                            required: "Expiry date is required",
                            pattern: {
                              value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                              message: "Format: MM/YY"
                            }
                          })}
                        />
                        {errors.expiryDate && (
                          <p className="text-sm text-red-500">{errors.expiryDate.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input 
                          id="cvc" 
                          placeholder="123"
                          {...register("cvc", { 
                            required: "CVC is required",
                            pattern: {
                              value: /^\d{3,4}$/,
                              message: "Invalid CVC"
                            }
                          })}
                        />
                        {errors.cvc && (
                          <p className="text-sm text-red-500">{errors.cvc.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">{eventTitle}</h3>
                    <p className="text-gray-600">{ticketType}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Price</span>
                      <span>${unitPrice.toFixed(2)} × {quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Fee</span>
                      <span>${(totalPrice * 0.05).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${(totalPrice * 1.05).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-eventhive-pink hover:bg-eventhive-pink/90 text-white"
                  type="submit"
                  form="payment-form"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Complete Payment'
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
