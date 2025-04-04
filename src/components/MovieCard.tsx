
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, Film } from 'lucide-react';

interface MovieProps {
  movie: {
    id: string;
    title: string;
    image: string;
    releaseDate: string;
    language: string;
    genre: string;
    duration: string;
    certificate: string;
    director: string;
    cast: string;
    price: string;
  }
}

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <Badge className="absolute top-3 left-3 bg-eventhive-pink text-white border-0">
          {movie.certificate}
        </Badge>
      </div>
      <CardContent className="pt-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{movie.title}</h3>
        <div className="space-y-2 text-sm text-gray-600 flex-grow">
          <div className="flex items-center">
            <Film className="w-4 h-4 mr-2 text-eventhive-pink" />
            <span>{movie.genre}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2 text-eventhive-pink" />
            <span>{movie.releaseDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-eventhive-pink" />
            <span>{movie.duration}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t flex justify-between items-center">
          <span className="font-bold text-eventhive-pink">{movie.price}</span>
          <Link to={`/event/${movie.id}`}>
            <Button className="bg-eventhive-pink hover:bg-eventhive-pink/90 text-white">
              Book Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
