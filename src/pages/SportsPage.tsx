
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon, Users } from 'lucide-react';
import EventCard from '@/components/EventCard';

const SportsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const featuredEvents = [
    {
      id: 'ipl-1',
      title: 'IPL 2023: Mumbai Indians vs Chennai Super Kings',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      date: 'May 12, 2023',
      time: '7:30 PM',
      location: 'Wankhede Stadium, Mumbai',
      category: 'Cricket',
      price: '₹1,500',
    },
    {
      id: 'ipl-2',
      title: 'IPL 2023: Delhi Capitals vs Royal Challengers Bangalore',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
      date: 'May 15, 2023',
      time: '7:30 PM',
      location: 'Arun Jaitley Stadium, Delhi',
      category: 'Cricket',
      price: '₹1,200',
    },
    {
      id: 'ipl-3',
      title: 'IPL 2023: Chennai Super Kings vs Kolkata Knight Riders',
      image: 'https://images.unsplash.com/photo-1624280157150-4d1ed8219415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: 'May 18, 2023',
      time: '7:30 PM',
      location: 'MA Chidambaram Stadium, Chennai',
      category: 'Cricket',
      price: '₹1,400',
    },
    {
      id: 'ipl-4',
      title: 'IPL 2023: Mumbai Indians vs Gujarat Titans',
      image: 'https://images.unsplash.com/photo-1562077772-3bd1dd98e1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: 'May 21, 2023',
      time: '3:30 PM',
      location: 'Wankhede Stadium, Mumbai',
      category: 'Cricket',
      price: '₹1,800',
    },
    {
      id: 'ipl-5',
      title: 'IPL 2023: Delhi Capitals vs Rajasthan Royals',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
      date: 'May 24, 2023',
      time: '7:30 PM',
      location: 'Arun Jaitley Stadium, Delhi',
      category: 'Cricket',
      price: '₹1,350',
    },
    {
      id: 'ipl-6',
      title: 'IPL 2023: Chennai Super Kings vs Sunrisers Hyderabad',
      image: 'https://images.unsplash.com/photo-1624280157150-4d1ed8219415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: 'May 27, 2023',
      time: '7:30 PM',
      location: 'MA Chidambaram Stadium, Chennai',
      category: 'Cricket',
      price: '₹1,600',
    },
  ];

  const stadiumInfo = [
    {
      name: 'Wankhede Stadium',
      location: 'Mumbai',
      capacity: '33,108',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      description: 'Wankhede Stadium is a cricket stadium in Mumbai, Maharashtra. It is the home ground of the Mumbai Indians IPL team and has hosted numerous memorable matches including the 2011 Cricket World Cup final.'
    },
    {
      name: 'MA Chidambaram Stadium',
      location: 'Chennai',
      capacity: '50,000',
      image: 'https://images.unsplash.com/photo-1624280157150-4d1ed8219415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Also known as Chepauk Stadium, MA Chidambaram Stadium is one of the oldest cricket stadiums in India. It is the home ground of the Chennai Super Kings IPL team and known for its passionate crowd and electric atmosphere.'
    },
    {
      name: 'Arun Jaitley Stadium',
      location: 'Delhi',
      capacity: '41,842',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
      description: 'Formerly known as Feroz Shah Kotla Stadium, Arun Jaitley Stadium is located in New Delhi. It is the home ground of the Delhi Capitals IPL team and has witnessed many historic cricket moments.'
    }
  ];

  const filteredEvents = activeTab === 'all' 
    ? featuredEvents 
    : featuredEvents.filter(event => event.location.includes(activeTab));

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-eventhive-dark">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80" 
            alt="Cricket Stadium" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-eventhive-dark to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <Badge className="mb-4 bg-eventhive-pink border-0">IPL 2023</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Cricket Matches in India</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Experience the thrill of IPL cricket matches live in Mumbai, Chennai, and Delhi. Book your tickets now!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all">All Venues</TabsTrigger>
              <TabsTrigger value="Mumbai">Mumbai</TabsTrigger>
              <TabsTrigger value="Chennai">Chennai</TabsTrigger>
              <TabsTrigger value="Delhi">Delhi</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Upcoming IPL Matches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard 
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  image={event.image}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  category={event.category}
                  price={event.price}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Stadium Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">IPL Stadium Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {stadiumInfo.map((stadium) => (
              <Card key={stadium.name} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={stadium.image} 
                    alt={stadium.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{stadium.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-2 text-eventhive-pink" />
                      <span>{stadium.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-eventhive-pink" />
                      <span>Capacity: {stadium.capacity}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{stadium.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* IPL Information */}
        <section>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">About IPL Cricket</h2>
            <p className="mb-4">
              The Indian Premier League (IPL) is a professional Twenty20 cricket league in India contested during April and May of every year by eight teams representing eight different cities in India.
            </p>
            <p className="mb-4">
              The IPL is the most-attended cricket league in the world and in 2014 ranked sixth by average attendance among all sports leagues. In 2010, the IPL became the first sporting event in the world to be broadcast live on YouTube.
            </p>
            <p>
              The brand value of the IPL in 2018 was US$6.3 billion, according to Duff & Phelps. According to BCCI, the 2015 IPL season contributed ₹11.5 billion to the GDP of the Indian economy.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SportsPage;
