
import { useState } from 'react';
import EventCard, { EventCardProps } from './EventCard';
import { Button } from '@/components/ui/button';

// Sample event data
const sampleEvents: EventCardProps[] = [
  {
    id: '1',
    title: 'Taylor Swift: The Eras Tour',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'June 15, 2023',
    time: '7:00 PM',
    location: 'Madison Square Garden, New York',
    category: 'Concert',
    price: '$99'
  },
  {
    id: '2',
    title: 'NBA Finals 2023: Lakers vs Celtics',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'June 20, 2023',
    time: '8:30 PM',
    location: 'TD Garden, Boston',
    category: 'Sports',
    price: '$150'
  },
  {
    id: '3',
    title: 'Dave Chappelle Live',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'July 2, 2023',
    time: '9:00 PM',
    location: 'The Comedy Store, Los Angeles',
    category: 'Comedy',
    price: '$85'
  },
  {
    id: '4',
    title: 'Oppenheimer - IMAX Experience',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'July 21, 2023',
    time: '7:30 PM',
    location: 'AMC Lincoln Square, New York',
    category: 'Movie',
    price: '$25'
  },
  {
    id: '5',
    title: 'Electric Daisy Carnival',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'August 10, 2023',
    time: '8:00 PM',
    location: 'Las Vegas Motor Speedway, Las Vegas',
    category: 'Festival',
    price: '$250'
  },
  {
    id: '6',
    title: 'Broadway: Hamilton',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'August 15, 2023',
    time: '2:00 PM',
    location: 'Richard Rodgers Theatre, New York',
    category: 'Theater',
    price: '$199'
  },
  {
    id: '7',
    title: 'Golf: The Masters Tournament',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'April 5, 2024',
    time: 'All Day',
    location: 'Augusta National Golf Club, Georgia',
    category: 'Sports',
    price: '$120'
  },
  {
    id: '8',
    title: 'Coldplay: Music of the Spheres World Tour',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'September 10, 2023',
    time: '7:30 PM',
    location: 'Wembley Stadium, London',
    category: 'Concert',
    price: '$110'
  },
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
