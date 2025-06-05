
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Download, RefreshCw, Star, Ticket } from "lucide-react";

const MyBookingsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const bookings = {
    upcoming: [
      {
        id: 'BK001',
        title: 'Arijit Singh Live Concert',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80',
        date: '2025-01-15',
        time: '7:30 PM',
        venue: 'NSCI Dome, Mumbai',
        tickets: 2,
        price: '₹5,998',
        status: 'confirmed',
        category: 'Concert'
      },
      {
        id: 'BK002',
        title: 'Mumbai vs Delhi IPL Match',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=400&q=80',
        date: '2025-02-20',
        time: '8:00 PM',
        venue: 'Wankhede Stadium, Mumbai',
        tickets: 4,
        price: '₹3,996',
        status: 'confirmed',
        category: 'Sports'
      }
    ],
    past: [
      {
        id: 'BK003',
        title: 'Standup Comedy Night',
        image: 'https://images.unsplash.com/photo-1585147375826-84fd54343b23?auto=format&fit=crop&w=400&q=80',
        date: '2024-11-10',
        time: '9:00 PM',
        venue: 'Comedy Store, Delhi',
        tickets: 2,
        price: '₹1,598',
        status: 'attended',
        category: 'Comedy',
        rating: 5
      }
    ],
    cancelled: [
      {
        id: 'BK004',
        title: 'Rock Concert',
        image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=400&q=80',
        date: '2024-12-01',
        time: '8:00 PM',
        venue: 'Phoenix Mall, Bangalore',
        tickets: 2,
        price: '₹2,998',
        status: 'cancelled',
        category: 'Concert'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'attended': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderBookingCard = (booking: any) => (
    <Card key={booking.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img 
              src={booking.image} 
              alt={booking.title}
              className="w-full h-48 md:h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <Badge className="mb-2 bg-eventhive-pink/10 text-eventhive-pink">
                  {booking.category}
                </Badge>
                <h3 className="text-xl font-bold mb-2">{booking.title}</h3>
              </div>
              <Badge className={getStatusColor(booking.status)}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{new Date(booking.date).toLocaleDateString('en-IN')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{booking.time}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="truncate">{booking.venue}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Ticket className="w-4 h-4" />
                <span>{booking.tickets} ticket(s)</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-500">Total Amount</span>
                <p className="text-xl font-bold text-eventhive-pink">{booking.price}</p>
                <span className="text-xs text-gray-400">Booking ID: {booking.id}</span>
              </div>
              
              <div className="flex gap-2">
                {booking.status === 'confirmed' && (
                  <>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="w-4 h-4 mr-1" />
                      Resend
                    </Button>
                  </>
                )}
                {booking.status === 'attended' && booking.rating && (
                  <div className="flex items-center gap-1">
                    {[...Array(booking.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                )}
                {booking.status === 'cancelled' && (
                  <Button variant="outline" size="sm">
                    Refund Status
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-eventhive-pink to-eventhive-dark rounded-full mb-4">
            <Ticket className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-eventhive-pink">Bookings</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage your event tickets and view booking history
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              {bookings.upcoming.length > 0 ? (
                bookings.upcoming.map(renderBookingCard)
              ) : (
                <Card className="text-center py-16">
                  <CardContent>
                    <Ticket className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No upcoming events</h3>
                    <p className="text-gray-500 mb-4">Book your next amazing experience!</p>
                    <Button className="bg-eventhive-pink hover:bg-eventhive-pink/90">
                      Browse Events
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-6">
              {bookings.past.length > 0 ? (
                bookings.past.map(renderBookingCard)
              ) : (
                <Card className="text-center py-16">
                  <CardContent>
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No past events</h3>
                    <p className="text-gray-500">Your attended events will appear here</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="cancelled" className="space-y-6">
              {bookings.cancelled.length > 0 ? (
                bookings.cancelled.map(renderBookingCard)
              ) : (
                <Card className="text-center py-16">
                  <CardContent>
                    <RefreshCw className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No cancelled bookings</h3>
                    <p className="text-gray-500">Cancelled events will appear here</p>
                  </CardContent>
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
