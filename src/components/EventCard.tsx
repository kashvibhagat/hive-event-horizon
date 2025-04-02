
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon, Clock } from 'lucide-react';

export interface EventCardProps {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: string;
}

const EventCard = ({ id, title, image, date, time, location, category, price }: EventCardProps) => {
  return (
    <Link to={`/event/${id}`}>
      <Card className="overflow-hidden card-hover h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <Badge className="absolute top-3 left-3 bg-eventhive-pink text-white border-0">
            {category}
          </Badge>
        </div>
        <CardContent className="pt-4 flex-grow">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2 text-eventhive-pink" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-eventhive-pink" />
              <span>{time}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-2 text-eventhive-pink" />
              <span className="line-clamp-1">{location}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4 flex justify-between items-center">
          <span className="font-bold text-eventhive-pink">{price}</span>
          <span className="text-sm text-blue-600 hover:underline">View Details</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default EventCard;
