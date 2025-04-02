
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-lg">
        <div className="text-eventhive-pink text-9xl font-bold mb-6">404</div>
        <h1 className="text-4xl font-bold text-eventhive-dark mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-eventhive-pink hover:bg-eventhive-pink/90 text-white px-6 py-6 text-lg w-full sm:w-auto">
              Go Home
            </Button>
          </Link>
          <Link to="/events">
            <Button variant="outline" className="px-6 py-6 text-lg w-full sm:w-auto">
              Browse Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
