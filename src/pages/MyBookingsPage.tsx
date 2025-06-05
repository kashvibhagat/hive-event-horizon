
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Download, Star, Ticket, Users, Coffee } from "lucide-react";

const MyBookingsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingBookings = [
    {
      id: '1',
      title: 'Arijit Singh Live in Concert',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: 'June 15, 2025',
      time: '7:00 PM',
      venue: 'DY Patil Stadium',
      location: 'Mumbai',
      tickets: 2,
      status: 'confirmed',
      price: '₹5,998',
      category: 'Concert'
    },
    {
      id: '2',
      title: 'Zakir Khan Comedy Show',
      image: 'https://images.unsplash.com/photo-1585147375826-84fd54343b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: 'July 2, 2025',
      time: '9:00 PM',
      venue: 'Bharatiya Vidya Bhavan',
      location: 'Mumbai',
      tickets: 1,
      status: 'confirmed',
      price: '₹799',
      category: 'Comedy'
    }
  ];

  const pastBookings = [
    {
      id: '3',
      title: 'IPL 2024: MI vs CSK',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      date: 'May 20, 2024',
      time: '8:30 PM',
      venue: 'Wankhede Stadium',
      location: 'Mumbai',
      tickets: 3,
      status: 'attended',
      price: '₹2,997',
      category: 'Sports',
      rating: 5
    }
  ];

  const BookingCard = ({ booking, isPast = false }: { booking: any, isPast?: boolean }) => (
    <Card className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-48 h-48 md:h-auto relative overflow-hidden">
          <img 
            src={booking.image} 
            alt={booking.title}
            className="w-full h-full object-cover"
          />
          <Badge 
            className={`absolute top-3 left-3 ${
              booking.status === 'confirmed' ? 'bg-green-500' : 
              booking.status === 'attended' ? 'bg-blue-500' : 'bg-yellow-500'
            } text-white border-0`}
          >
            {booking.status === 'confirmed' ? 'Confirmed' : 
             booking.status === 'attended' ? 'Attended' : 'Pending'}
          </Badge>
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{booking.title}</h3>
              <Badge variant="outline" className="text-eventhive-pink border-eventhive-pink">
                {booking.category}
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-eventhive-pink">{booking.price}</p>
              <p className="text-sm text-gray-500">{booking.tickets} ticket(s)</p>
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-eventhive-pink" />
              <span>{booking.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2 text-eventhive-pink" />
              <span>{booking.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-eventhive-pink" />
              <span>{booking.venue}, {booking.location}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {!isPast && (
              <>
                <Button className="bg-eventhive-pink hover:bg-eventhive-pink/90 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Ticket
                </Button>
                <Button variant="outline">
                  View Details
                </Button>
              </>
            )}
            
            {isPast && (
              <>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Receipt
                </Button>
                {booking.rating && (
                  <div className="flex items-center gap-1 px-3 py-2 bg-yellow-50 rounded-md">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{booking.rating}/5</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-eventhive-dark to-eventhive-pink overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Ticket className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Bookings</h1>
            <p className="text-xl opacity-90">
              Manage your event tickets and view your booking history
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="text-center p-6 border-0 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-eventhive-pink/10 rounded-full mb-4">
              <Ticket className="w-6 h-6 text-eventhive-pink" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">3</h3>
            <p className="text-gray-600">Total Bookings</p>
          </Card>
          
          <Card className="text-center p-6 border-0 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">6</h3>
            <p className="text-gray-600">Events Attended</p>
          </Card>
          
          <Card className="text-center p-6 border-0 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-lg">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500/10 rounded-full mb-4">
              <Coffee className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">₹9,794</h3>
            <p className="text-gray-600">Total Spent</p>
          </Card>
        </div>

        {/* Bookings Tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 h-12">
              <TabsTrigger value="upcoming" className="text-base">
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger value="past" className="text-base">
                Past Events
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-6">
              {upcomingBookings.length > 0 ? (
                upcomingBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
              ) : (
                <Card className="text-center py-16 border-0 shadow-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    <Calendar className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No upcoming events</h3>
                  <p className="text-gray-500 mb-6">
                    Looks like you don't have any upcoming events. Start exploring!
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Empty state" 
                    className="w-64 h-40 object-cover rounded-lg mx-auto mb-6"
                  />
                  <Button className="bg-eventhive-pink hover:bg-eventhive-pink/90 text-white">
                    Browse Events
                  </Button>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="past" className="space-y-6">
              {pastBookings.length > 0 ? (
                pastBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} isPast={true} />
                ))
              ) : (
                <Card className="text-center py-16 border-0 shadow-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    <Star className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No past events</h3>
                  <p className="text-gray-500">
                    Your event history will appear here once you attend some events.
                  </p>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
