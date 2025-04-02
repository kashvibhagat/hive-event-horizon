
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[600px] bg-gradient-to-r from-eventhive-dark to-eventhive-pink overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Discover & Book Amazing Events</h1>
          <p className="text-xl text-white/90 mb-8">Find and book tickets for concerts, sports, theater, comedy, and more events near you.</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/events">
              <Button className="bg-eventhive-pink hover:bg-white hover:text-eventhive-pink border border-transparent hover:border-white text-white py-6 px-8 text-lg shadow-lg w-full sm:w-auto">
                Browse Events
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-eventhive-pink py-6 px-8 text-lg w-full sm:w-auto">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
