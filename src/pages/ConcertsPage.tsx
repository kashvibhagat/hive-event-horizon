
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, MapPin } from "lucide-react";
import EventCard from '@/components/EventCard';

const concertEvents = [
  {
    id: 'c1',
    title: 'Taylor Swift: The Eras Tour',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'June 15, 2025',
    time: '7:00 PM',
    location: 'Madison Square Garden, New York',
    category: 'Concert',
    price: '$99'
  },
  {
    id: 'c2',
    title: 'Coldplay: Music of the Spheres World Tour',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'September 10, 2025',
    time: '7:30 PM',
    location: 'Wembley Stadium, London',
    category: 'Concert',
    price: '$110'
  },
  {
    id: 'c3',
    title: 'The Weeknd: After Hours Tour',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'July 22, 2025',
    time: '8:00 PM',
    location: 'SoFi Stadium, Los Angeles',
    category: 'Concert',
    price: '$120'
  },
  {
    id: 'c4',
    title: 'Beyoncé: Renaissance World Tour',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'August 5, 2025',
    time: '8:30 PM',
    location: 'Nissan Stadium, Nashville',
    category: 'Concert',
    price: '$150'
  },
  {
    id: 'c5',
    title: 'BTS: Map of the Soul Tour',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'October 10, 2025',
    time: '7:00 PM',
    location: 'Rose Bowl Stadium, Pasadena',
    category: 'Concert',
    price: '$140'
  },
  {
    id: 'c6',
    title: 'Rihanna: R9 Album World Tour',
    image: 'https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'September 25, 2025',
    time: '8:00 PM',
    location: 'Rogers Centre, Toronto',
    category: 'Concert',
    price: '$130'
  }
];

const ConcertsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredEvents = concertEvents.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-eventhive-dark">
          Upcoming <span className="text-eventhive-pink">Concerts</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience the thrill of live music with the biggest artists and bands from around the world.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search concerts by title or location"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex space-x-2 w-full md:w-auto">
          <Button variant="outline" className="flex items-center gap-1">
            <Calendar size={16} />
            <span>All Dates</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-1">
            <MapPin size={16} />
            <span>All Locations</span>
          </Button>
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No concerts found</h2>
          <p className="text-gray-500">
            Try adjusting your search criteria or check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default ConcertsPage;
