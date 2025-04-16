
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock } from "lucide-react";
import EventCard from '@/components/EventCard';

const streamEvents = [
  {
    id: 's1',
    title: 'BGMI Pro League Finals',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'May 20, 2025',
    time: '3:00 PM',
    location: 'Online - YouTube Gaming India',
    category: 'Stream',
    price: '₹199'
  },
  {
    id: 's2',
    title: 'Virtual Sunburn Home Festival',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'June 5, 2025',
    time: '9:00 PM',
    location: 'Online - Sunburn TV',
    category: 'Stream',
    price: '₹299'
  },
  {
    id: 's3',
    title: 'Bollywood Stars Live Interview',
    image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'July 10, 2025',
    time: '5:00 PM',
    location: 'Online - Disney+ Hotstar',
    category: 'Stream',
    price: '₹399'
  },
  {
    id: 's4',
    title: 'Masterclass with Chef Sanjeev Kapoor',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'August 15, 2025',
    time: '2:00 PM',
    location: 'Online - FoodFood Channel',
    category: 'Stream',
    price: '₹499'
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
