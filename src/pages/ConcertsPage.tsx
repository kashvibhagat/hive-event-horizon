
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, MapPin } from "lucide-react";
import EventCard from '@/components/EventCard';

const concertEvents = [
  {
    id: 'c1',
    title: 'Arijit Singh Live in Concert',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'June 15, 2025',
    time: '7:00 PM',
    location: 'DY Patil Stadium, Mumbai',
    category: 'Concert',
    price: '₹2,999'
  },
  {
    id: 'c2',
    title: 'Divine Gully Gang Tour',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'September 10, 2025',
    time: '7:30 PM',
    location: 'Jawaharlal Nehru Stadium, Delhi',
    category: 'Concert',
    price: '₹1,999'
  },
  {
    id: 'c3',
    title: 'Nucleya Bass Drop Tour',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'July 22, 2025',
    time: '8:00 PM',
    location: 'Phoenix Marketcity, Bangalore',
    category: 'Concert',
    price: '₹1,499'
  },
  {
    id: 'c4',
    title: 'Sunburn Festival 2025',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'August 5, 2025',
    time: '8:30 PM',
    location: 'Candolim Beach, Goa',
    category: 'Concert',
    price: '₹3,999'
  },
  {
    id: 'c5',
    title: 'Prateek Kuhad India Tour',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'October 10, 2025',
    time: '7:00 PM',
    location: 'Royal Opera House, Mumbai',
    category: 'Concert',
    price: '₹2,499'
  },
  {
    id: 'c6',
    title: 'AR Rahman Live Concert',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'September 25, 2025',
    time: '8:00 PM',
    location: 'Buddh International Circuit, Noida',
    category: 'Concert',
    price: '₹4,999'
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
