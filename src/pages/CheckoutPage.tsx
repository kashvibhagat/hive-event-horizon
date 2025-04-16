
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { PaymentForm, PaymentFormData } from '@/components/checkout/PaymentForm';
import { OrderSummary } from '@/components/checkout/OrderSummary';

interface CheckoutState {
  eventTitle: string;
  ticketType: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  eventId: string;
}

const CheckoutPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);

  const checkoutInfo = location.state as CheckoutState;
  
  if (!checkoutInfo) {
    navigate('/');
    return null;
  }

  const { eventTitle, ticketType, quantity, unitPrice, totalPrice, eventId } = checkoutInfo;

  const handlePayment = async (data: PaymentFormData) => {
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
            <PaymentForm 
              isProcessing={isProcessing}
              onSubmit={handlePayment}
            />
          </div>
          
          <div>
            <OrderSummary 
              eventTitle={eventTitle}
              ticketType={ticketType}
              quantity={quantity}
              unitPrice={unitPrice}
              totalPrice={totalPrice}
              isProcessing={isProcessing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
