
import { useState } from 'react';
import EventCard, { EventCardProps } from './EventCard';
import { Button } from '@/components/ui/button';

const sampleEvents: EventCardProps[] = [
  {
    id: '1',
    title: 'Arijit Singh Live in Concert',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'June 15, 2023',
    time: '7:00 PM',
    location: 'DY Patil Stadium, Mumbai',
    category: 'Concert',
    price: '₹2,999'
  },
  {
    id: '2',
    title: 'IPL 2023: MI vs CSK',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'June 20, 2023',
    time: '8:30 PM',
    location: 'Wankhede Stadium, Mumbai',
    category: 'Sports',
    price: '₹999'
  },
  {
    id: '3',
    title: 'Zakir Khan Comedy Show',
    image: 'https://images.unsplash.com/photo-1585147375826-84fd54343b23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'July 2, 2023',
    time: '9:00 PM',
    location: 'Bharatiya Vidya Bhavan, Mumbai',
    category: 'Comedy',
    price: '₹799'
  },
  {
    id: '4',
    title: 'Pathaan - IMAX Experience',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'July 21, 2023',
    time: '7:30 PM',
    location: 'PVR IMAX, Lower Parel, Mumbai',
    category: 'Movie',
    price: '₹599'
  }
];

const FeaturedEvents = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Concerts', 'Sports', 'Movies', 'Comedy', 'Theater', 'Festival'];
  
  const filteredEvents = activeCategory === 'All' 
    ? sampleEvents 
    : sampleEvents.filter(event => 
        event.category.toLowerCase() === activeCategory.toLowerCase().slice(0, -1)
      );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Featured Events</h2>
        
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${
                  activeCategory === category 
                    ? 'bg-eventhive-pink text-white hover:bg-eventhive-pink/90' 
                    : 'text-gray-700 hover:text-eventhive-pink'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-eventhive-dark hover:bg-eventhive-dark/90 text-white py-6 px-8 text-lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
