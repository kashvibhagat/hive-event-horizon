
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock } from "lucide-react";
import EventCard from '@/components/EventCard';

const streamEvents = [
  {
    id: 's1',
    title: 'Live Stream: Global Gaming Championship',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'May 20, 2025',
    time: '3:00 PM',
    location: 'Online - Twitch',
    category: 'Stream',
    price: '$15'
  },
  {
    id: 's2',
    title: 'Virtual Concert: Electronic Music Festival',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'June 5, 2025',
    time: '9:00 PM',
    location: 'Online - YouTube Live',
    category: 'Stream',
    price: '$20'
  },
  {
    id: 's3',
    title: 'Live Q&A with Marvel Cast',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'July 10, 2025',
    time: '5:00 PM',
    location: 'Online - Disney+',
    category: 'Stream',
    price: '$25'
  },
  {
    id: 's4',
    title: 'Virtual Cooking Class with Celebrity Chef',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'August 15, 2025',
    time: '2:00 PM',
    location: 'Online - Instagram Live',
    category: 'Stream',
    price: '$30'
  }
];

const StreamsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredStreams = streamEvents.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-eventhive-dark">
          Live <span className="text-eventhive-pink">Streams</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Watch exclusive live streams from the comfort of your home. Enjoy concerts, gaming events, workshops and more online.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search streams by title or platform"
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
            <Clock size={16} />
            <span>All Times</span>
          </Button>
        </div>
      </div>

      {filteredStreams.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStreams.map((stream) => (
            <EventCard key={stream.id} {...stream} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No streams found</h2>
          <p className="text-gray-500">
            Try adjusting your search criteria or check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default StreamsPage;
