
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Loader2 } from 'lucide-react';

interface OrderSummaryProps {
  eventTitle: string;
  ticketType: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  isProcessing: boolean;
}

export const OrderSummary = ({
  eventTitle,
  ticketType,
  quantity,
  unitPrice,
  totalPrice,
  isProcessing
}: OrderSummaryProps) => {
  return (
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
              <span>₹{unitPrice.toFixed(2)} × {quantity}</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Processing Fee</span>
              <span>₹{(totalPrice * 0.05).toFixed(2)}</span>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{(totalPrice * 1.05).toFixed(2)}</span>
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
  );
};
