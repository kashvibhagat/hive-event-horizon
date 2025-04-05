
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

interface PaymentSuccessState {
  eventTitle: string;
  ticketType: string;
  quantity: number;
  totalPrice: number;
  orderNumber: string;
}

const PaymentSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paymentInfo = location.state as PaymentSuccessState;
  
  // If no payment info, redirect to home
  if (!paymentInfo) {
    return <Navigate to="/" />;
  }

  // Extract payment details
  const { eventTitle, ticketType, quantity, totalPrice, orderNumber } = paymentInfo;

  // Calculate the total with processing fee
  const finalTotal = (totalPrice * 1.05).toFixed(2);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-20 w-20 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed and your tickets are on the way.
        </p>
        
        <Card className="mb-8">
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-sm text-gray-600">Order Number</p>
                <p className="font-semibold">{orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Event</p>
                <p className="font-semibold">{eventTitle}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Ticket Type</p>
                <p className="font-semibold">{ticketType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Quantity</p>
                <p className="font-semibold">{quantity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="font-semibold">${finalTotal}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Payment Status</p>
                <p className="font-semibold text-green-500">Paid</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-center text-sm text-gray-600">
                A confirmation email has been sent to your email address with your ticket details.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-eventhive-pink hover:bg-eventhive-pink/90 text-white"
            asChild
          >
            <Link to="/">Explore More Events</Link>
          </Button>
          <Button variant="outline">
            Download Tickets
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
