
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Search, Mic } from 'lucide-react';
import ComedyCard from '@/components/ComedyCard';

// Comedy show data
const comedyShows = [
  {
    id: 'comedy-1',
    title: 'The New Material Tour',
    image: 'https://images.unsplash.com/photo-1610890690846-5149750c8634?q=80&w=2071&auto=format&fit=crop',
    date: 'May 15, 2024',
    time: '8:00 PM',
    venue: 'Comedy Store',
    location: 'Mumbai',
    comedian: 'Samay Raina',
    price: '₹799',
    category: 'Stand-up Comedy'
  },
  {
    id: 'comedy-2',
    title: 'Professor of Bakchodi',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop',
    date: 'May 22, 2024',
    time: '7:30 PM',
    venue: 'The Habitat',
    location: 'Mumbai',
    comedian: 'Kenny Sebastian',
    price: '₹899',
    category: 'Stand-up Comedy'
  },
  {
    id: 'comedy-3',
    title: 'We Made You Laugh Tour',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?q=80&w=2070&auto=format&fit=crop',
    date: 'June 5, 2024',
    time: '8:30 PM',
    venue: 'Canvas Laugh Club',
    location: 'Delhi',
    comedian: 'Akash Gupta',
    price: '₹699',
    category: 'Stand-up Comedy'
  },
  {
    id: 'comedy-4',
    title: 'Family Entertaining Show',
    image: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=2070&auto=format&fit=crop',
    date: 'June 12, 2024',
    time: '7:00 PM',
    venue: 'Kamani Auditorium',
    location: 'Delhi',
    comedian: 'Amit Tandon',
    price: '₹999',
    category: 'Stand-up Comedy'
  },
  {
    id: 'comedy-5',
    title: 'India Tour 2024',
    image: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=2069&auto=format&fit=crop',
    date: 'July 3, 2024',
    time: '8:00 PM',
    venue: 'Sir Mutha Hall',
    location: 'Chennai',
    comedian: 'Rahul Subramanian',
    price: '₹799',
    category: 'Stand-up Comedy'
  },
  {
    id: 'comedy-6',
    title: 'Fresh Thoughts',
    image: 'https://images.unsplash.com/photo-1486556396467-d83d2b23514b?q=80&w=2070&auto=format&fit=crop',
    date: 'July 15, 2024',
    time: '8:30 PM',
    venue: 'The Habitat',
    location: 'Mumbai',
    comedian: 'Biswa Kalyan Rath',
    price: '₹899',
    category: 'Stand-up Comedy'
  },
  {
    id: 'comedy-7',
    title: 'Crowd Work Special',
    image: 'https://images.unsplash.com/photo-1573848855919-9a3bc36668a6?q=80&w=1974&auto=format&fit=crop',
    date: 'August 5, 2024',
    time: '7:30 PM',
    venue: 'Canvas Laugh Club',
    location: 'Delhi',
    comedian: 'Samay Raina',
    price: '₹999',
    category: 'Crowd Work'
  },
  {
    id: 'comedy-8',
    title: 'The Most Kellarious',
    image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=2071&auto=format&fit=crop',
    date: 'August 12, 2024',
    time: '8:00 PM',
    venue: 'Music Academy',
    location: 'Chennai',
    comedian: 'Kenny Sebastian',
    price: '₹1099',
    category: 'Stand-up Comedy'
  }
];

const ComedyPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredShows = comedyShows.filter(show => 
    show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    show.comedian.toLowerCase().includes(searchTerm.toLowerCase()) ||
    show.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <div className="relative h-80 bg-eventhive-dark">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1603190287605-e6ade32fa852?q=80&w=2070&auto=format&fit=crop" 
            alt="Comedy Shows background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-eventhive-dark to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Comedy Shows</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Laugh out loud with India's top comedians performing live at venues near you
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by comedian, show title, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="bg-eventhive-pink hover:bg-eventhive-pink/90 text-white">
              <Mic className="mr-2 h-5 w-5" />
              Filter Shows
            </Button>
          </div>
        </div>

        {/* Comedy Shows Tabs */}
        <Tabs defaultValue="all-shows" className="mb-8">
          <TabsList className="mb-8 w-full max-w-lg mx-auto grid grid-cols-3 h-auto">
            <TabsTrigger value="all-shows" className="py-3">All Shows</TabsTrigger>
            <TabsTrigger value="upcoming" className="py-3">Upcoming</TabsTrigger>
            <TabsTrigger value="top-comedians" className="py-3">Top Comedians</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all-shows" className="space-y-8">
            {filteredShows.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredShows.map(show => (
                  <ComedyCard key={show.id} show={show} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-gray-600">No comedy shows found matching your search.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="upcoming" className="text-center py-8">
            <p className="text-lg text-gray-600">Upcoming comedy shows will be available here.</p>
          </TabsContent>
          
          <TabsContent value="top-comedians" className="text-center py-8">
            <p className="text-lg text-gray-600">Top comedians will be featured here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ComedyPage;
