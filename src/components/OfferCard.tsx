
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Copy, CreditCard, Tag } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface OfferCardProps {
  offer: {
    id: string;
    bank: string;
    title: string;
    description: string;
    code: string;
    validUntil: string;
    image: string;
    minValue: string;
    maxDiscount: string;
    cardTypes: string[];
    categories: string[];
  }
}

const OfferCard = ({ offer }: OfferCardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(offer.code);
    setIsCopied(true);
    toast.success('Promo code copied to clipboard!');
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Card className="overflow-hidden border border-gray-200 h-full flex flex-col card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={offer.image} 
          alt={offer.bank} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <Badge className="absolute top-3 left-3 bg-eventhive-pink text-white border-0">
          {offer.bank}
        </Badge>
      </div>
      <CardContent className="p-5 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{offer.description}</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center">
            <CreditCard className="w-4 h-4 mr-2 text-eventhive-pink" />
            <span className="text-sm">{offer.cardTypes.join(', ')}</span>
          </div>
          <div className="flex items-center">
            <Tag className="w-4 h-4 mr-2 text-eventhive-pink" />
            <span className="text-sm">Min. Value: {offer.minValue} | Max Discount: {offer.maxDiscount}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2 text-eventhive-pink" />
            <span className="text-sm">Valid until {offer.validUntil}</span>
          </div>
        </div>
        
        <div className="flex items-center mt-auto">
          <div className="flex-1 border border-dashed border-gray-300 bg-gray-50 rounded-l-md p-2">
            <div className="text-center font-semibold">{offer.code}</div>
          </div>
          <Button 
            onClick={copyCode} 
            className={`rounded-l-none ${isCopied ? 'bg-green-600 hover:bg-green-700' : 'bg-eventhive-pink hover:bg-eventhive-pink/90'}`}
          >
            {isCopied ? 'Copied!' : <Copy size={16} />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OfferCard;
