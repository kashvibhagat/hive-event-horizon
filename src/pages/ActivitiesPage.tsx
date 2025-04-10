
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, MapPin } from "lucide-react";
import EventCard from '@/components/EventCard';

const activityEvents = [
  {
    id: 'a1',
    title: 'Mountain Hiking Adventure',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'May 25, 2025',
    time: '8:00 AM',
    location: 'Appalachian Trail, Georgia',
    category: 'Activity',
    price: '$40'
  },
  {
    id: 'a2',
    title: 'Wine Tasting Tour',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'June 15, 2025',
    time: '2:00 PM',
    location: 'Napa Valley, California',
    category: 'Activity',
    price: '$75'
  },
  {
    id: 'a3',
    title: 'Hot Air Balloon Ride',
    image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'July 5, 2025',
    time: '6:00 AM',
    location: 'Cappadocia, Turkey',
    category: 'Activity',
    price: '$200'
  },
  {
    id: 'a4',
    title: 'Cooking Class: Italian Cuisine',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'August 20, 2025',
    time: '5:30 PM',
    location: 'Culinary Institute, New York',
    category: 'Activity',
    price: '$85'
  },
  {
    id: 'a5',
    title: 'Pottery Workshop',
    image: 'https://images.unsplash.com/photo-1494122353634-c310f45a6d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'September 10, 2025',
    time: '1:00 PM',
    location: 'Community Art Center, Portland',
    category: 'Activity',
    price: '$60'
  },
  {
    id: 'a6',
    title: 'Sunset Kayaking',
    image: 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80',
    date: 'October 5, 2025',
    time: '5:00 PM',
    location: 'Lake Tahoe, Nevada',
    category: 'Activity',
    price: '$50'
  }
];

const ActivitiesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredActivities = activityEvents.filter(activity => 
    activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    activity.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-eventhive-dark">
          Exciting <span className="text-eventhive-pink">Activities</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover fun and engaging activities in your area. From outdoor adventures to culinary experiences, we have something for everyone.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search activities by title or location"
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

      {filteredActivities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <EventCard key={activity.id} {...activity} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No activities found</h2>
          <p className="text-gray-500">
            Try adjusting your search criteria or check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default ActivitiesPage;
