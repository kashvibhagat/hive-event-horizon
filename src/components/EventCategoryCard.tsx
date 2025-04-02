
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface EventCategoryCardProps {
  title: string;
  icon: string;
  path: string;
  count: number;
}

const EventCategoryCard = ({ title, icon, path, count }: EventCategoryCardProps) => {
  return (
    <Link to={path}>
      <Card className="text-center p-6 card-hover bg-white border border-gray-200">
        <CardContent className="p-0">
          <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-eventhive-pink/10 text-eventhive-pink">
            <i className={`${icon} text-2xl`}></i>
          </div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-gray-500 text-sm">{count} Events</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCategoryCard;
