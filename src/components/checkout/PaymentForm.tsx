
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from "react-hook-form";
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PaymentFormProps {
  isProcessing: boolean;
  onSubmit: (data: PaymentFormData) => void;
}

export interface PaymentFormData {
  name: string;
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}

export const PaymentForm = ({ isProcessing, onSubmit }: PaymentFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>();

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Payment Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="payment-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
  );
};
