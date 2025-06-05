
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, MapPin } from "lucide-react";

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
      title: 'Sunburn Festival 2024',
      category: 'Concerts',
      location: 'Goa',
      date: 'Dec 2024'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
      title: 'IPL Finals',
      category: 'Sports',
      location: 'Mumbai',
      date: 'May 2024'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1585147375826-84fd54343b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
      title: 'Comedy Night Live',
      category: 'Comedy',
      location: 'Delhi',
      date: 'Aug 2024'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
      title: 'Bollywood Night',
      category: 'Movies',
      location: 'Bangalore',
      date: 'Sep 2024'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
      title: 'Tech Conference 2024',
      category: 'Activities',
      location: 'Hyderabad',
      date: 'Oct 2024'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
      title: 'AR Rahman Live',
      category: 'Concerts',
      location: 'Chennai',
      date: 'Nov 2024'
    }
  ];
  
  const categories = ['All', 'Concerts', 'Sports', 'Comedy', 'Movies', 'Activities'];
  
  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-eventhive-pink to-eventhive-dark rounded-full mb-4">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Event <span className="text-eventhive-pink">Gallery</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive the magic of past events and get inspired for future adventures
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`${
                  activeFilter === category 
                    ? 'bg-eventhive-pink text-white hover:bg-eventhive-pink/90' 
                    : 'text-gray-700 hover:text-eventhive-pink'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden shadow-lg border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="mb-2 bg-eventhive-pink">{item.category}</Badge>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-lg mx-auto bg-gradient-to-r from-eventhive-pink to-eventhive-dark text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">Want to feature your event?</h3>
              <p className="mb-4 opacity-90">
                Share your amazing event moments with the EventHive community
              </p>
              <Button variant="outline" className="bg-white text-eventhive-dark hover:bg-gray-100">
                Submit Photos
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
