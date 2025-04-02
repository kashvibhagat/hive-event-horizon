
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon, Clock, Share2, Heart, CalendarDays, Info, Users, Ticket } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

// Sample event data
const eventData = {
  id: '1',
  title: 'Taylor Swift: The Eras Tour',
  description: 'Experience the music of Taylor Swift's journey through the musical eras of her career. Taylor Swift: The Eras Tour has been called a "career-spanning spectacular" by the New York Times, "a rousing and breathless three-hour spectacle" by Rolling Stone, and "utterly perfect" by Variety.',
  longDescription: `
    <p class="mb-4">Join us for an unforgettable night with the 11-time Grammy winner Taylor Swift as she takes the stage for her record-breaking Eras Tour. This career-spanning concert takes you through the musical journey of one of the most influential artists of our generation.</p>
    
    <p class="mb-4">The Eras Tour features performances from Taylor's entire catalog, including her latest album "Midnights" as well as fan favorites from "Fearless," "Red," "1989," "Reputation," "Lover," "Folklore," and "Evermore."</p>
    
    <h3 class="text-xl font-bold mb-3 mt-6">What to Expect:</h3>
    <ul class="list-disc pl-5 mb-4 space-y-2">
      <li>A 3+ hour performance spanning Taylor's entire discography</li>
      <li>Spectacular stage production with multiple set changes</li>
      <li>Surprise acoustic performances of songs not on the main setlist</li>
      <li>Special effects, choreography, and costume changes</li>
    </ul>
    
    <h3 class="text-xl font-bold mb-3 mt-6">Venue Information:</h3>
    <p class="mb-4">Madison Square Garden is one of the world's most famous arenas, located in the heart of New York City. The venue features state-of-the-art sound systems, comfortable seating, and various food and beverage options.</p>
    
    <h3 class="text-xl font-bold mb-3 mt-6">Important Notes:</h3>
    <ul class="list-disc pl-5 mb-4 space-y-2">
      <li>Doors open 2 hours before the show begins</li>
      <li>All tickets are digital and will be available in your EventHive account</li>
      <li>This is a high-demand event, and tickets are expected to sell out quickly</li>
    </ul>
  `,
  image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  date: 'June 15, 2023',
  time: '7:00 PM',
  endTime: '11:00 PM',
  location: 'Madison Square Garden',
  address: '4 Pennsylvania Plaza, New York, NY 10001',
  category: 'Concert',
  organizer: 'Live Nation Entertainment',
  price: '$99',
  priceRange: '$99 - $999',
  minimumAge: '8+',
  language: 'English',
  capacity: '20,000',
  refundPolicy: 'No refunds or exchanges',
  gallery: [
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  ],
  ticketTypes: [
    { id: 'general', name: 'General Admission', price: 99, available: true },
    { id: 'vip', name: 'VIP Package', price: 249, available: true },
    { id: 'premium', name: 'Premium Package', price: 399, available: true },
    { id: 'platinum', name: 'Platinum Package', price: 999, available: false },
  ]
};

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [ticketType, setTicketType] = useState('general');
  
  const handleShare = () => {
    // In a real app, this would use the Web Share API or copy to clipboard
    toast.success("Link copied to clipboard!");
  };
  
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(!isFavorite ? "Added to favorites!" : "Removed from favorites");
  };
  
  const handleBookTickets = () => {
    toast.success(`${quantity} tickets booked for the event!`);
  };

  const selectedTicket = eventData.ticketTypes.find(ticket => ticket.id === ticketType);
  const totalPrice = selectedTicket ? selectedTicket.price * quantity : 0;

  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero Section */}
      <div className="relative h-96 bg-eventhive-dark">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={eventData.image} 
            alt={eventData.title} 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-eventhive-dark to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
          <div>
            <Badge className="mb-4 bg-eventhive-pink border-0">{eventData.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{eventData.title}</h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-eventhive-pink" />
                <span>{eventData.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-eventhive-pink" />
                <span>{eventData.time}</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2 text-eventhive-pink" />
                <span>{eventData.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="mb-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="organizer">Organizer</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div dangerouslySetInnerHTML={{ __html: eventData.longDescription }} />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Event Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CalendarDays className="w-5 h-5 mr-3 text-eventhive-pink mt-0.5" />
                        <div>
                          <p className="font-medium">Date and Time</p>
                          <p className="text-gray-600">{eventData.date}, {eventData.time} - {eventData.endTime}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MapPinIcon className="w-5 h-5 mr-3 text-eventhive-pink mt-0.5" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-gray-600">{eventData.location}</p>
                          <p className="text-gray-600">{eventData.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Info className="w-5 h-5 mr-3 text-eventhive-pink mt-0.5" />
                        <div>
                          <p className="font-medium">Additional Info</p>
                          <p className="text-gray-600">Minimum Age: {eventData.minimumAge}</p>
                          <p className="text-gray-600">Language: {eventData.language}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users className="w-5 h-5 mr-3 text-eventhive-pink mt-0.5" />
                        <div>
                          <p className="font-medium">Capacity</p>
                          <p className="text-gray-600">{eventData.capacity} attendees</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Ticket className="w-5 h-5 mr-3 text-eventhive-pink mt-0.5" />
                        <div>
                          <p className="font-medium">Price Range</p>
                          <p className="text-gray-600">{eventData.priceRange}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Info className="w-5 h-5 mr-3 text-eventhive-pink mt-0.5" />
                        <div>
                          <p className="font-medium">Refund Policy</p>
                          <p className="text-gray-600">{eventData.refundPolicy}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="gallery">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Event Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {eventData.gallery.map((image, index) => (
                        <div key={index} className="aspect-video overflow-hidden rounded-md">
                          <img 
                            src={image} 
                            alt={`Event gallery ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="location">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Event Location</h3>
                    <div className="mb-4">
                      <p className="font-medium">{eventData.location}</p>
                      <p className="text-gray-600">{eventData.address}</p>
                    </div>
                    <div className="aspect-video bg-gray-200 rounded-md">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1015161825867!2d-73.99590852418977!3d40.750118834713104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21fb011c85%3A0x33df10f2a9e2c48!2sMadison%20Square%20Garden!5e0!3m2!1sen!2sus!4v1687975211386!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Event Location"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="organizer">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Event Organizer</h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://logo.clearbit.com/livenation.com" 
                          alt="Organizer logo"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{eventData.organizer}</h4>
                        <p className="text-gray-600 mb-2">Event Organizer</p>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Booking Card */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-eventhive-pink">{eventData.price}</span>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={handleShare}
                      className="rounded-full"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={handleFavorite}
                      className={`rounded-full ${isFavorite ? 'text-red-500 hover:text-red-600' : ''}`}
                    >
                      <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="ticketType">Ticket Type</Label>
                    <Select value={ticketType} onValueChange={setTicketType}>
                      <SelectTrigger id="ticketType">
                        <SelectValue placeholder="Select ticket type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventData.ticketTypes.map((ticket) => (
                          <SelectItem 
                            key={ticket.id} 
                            value={ticket.id}
                            disabled={!ticket.available}
                          >
                            {ticket.name} - ${ticket.price} {!ticket.available && "(Sold Out)"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <div className="flex items-center">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="rounded-r-none px-3"
                      >
                        -
                      </Button>
                      <Input
                        id="quantity"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                        max="10"
                        className="rounded-none text-center w-16 h-10"
                      />
                      <Button 
                        variant="outline"
                        size="sm" 
                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                        className="rounded-l-none px-3"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-b py-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Price ({quantity} × ${selectedTicket?.price})</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-eventhive-pink hover:bg-eventhive-pink/90 text-white py-6"
                  onClick={handleBookTickets}
                >
                  Book Now
                </Button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  Hurry! Only a few tickets left for this event.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
