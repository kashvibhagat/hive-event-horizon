
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, MapPin, User } from 'lucide-react';

interface ComedyShowProps {
  show: {
    id: string;
    title: string;
    image: string;
    date: string;
    time: string;
    venue: string;
    location: string;
    comedian: string;
    price: string;
    category: string;
  }
}

const ComedyCard = ({ show }: ComedyShowProps) => {
  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={show.image} 
          alt={show.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <Badge className="absolute top-3 left-3 bg-eventhive-pink text-white border-0">
          {show.category}
        </Badge>
      </div>
      <CardContent className="pt-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{show.title}</h3>
        <div className="space-y-2 text-sm text-gray-600 flex-grow">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2 text-eventhive-pink" />
            <span>{show.comedian}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2 text-eventhive-pink" />
            <span>{show.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-eventhive-pink" />
            <span>{show.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-eventhive-pink" />
            <span>{show.venue}, {show.location}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t flex justify-between items-center">
          <span className="font-bold text-eventhive-pink">{show.price}</span>
          <Link to={`/event/${show.id}`}>
            <Button className="bg-eventhive-pink hover:bg-eventhive-pink/90 text-white">
              Book Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComedyCard;
