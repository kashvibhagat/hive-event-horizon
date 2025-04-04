
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Search, Film } from 'lucide-react';
import MovieCard from '@/components/MovieCard';

// Movie data
const bollywoodMovies = [
  {
    id: 'movie-1',
    title: 'Animal',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop',
    releaseDate: 'December 1, 2023',
    language: 'Hindi',
    genre: 'Action/Drama',
    duration: '3h 21m',
    certificate: 'A',
    director: 'Sandeep Reddy Vanga',
    cast: 'Ranbir Kapoor, Rashmika Mandanna, Anil Kapoor',
    price: '₹299'
  },
  {
    id: 'movie-2',
    title: 'Dunki',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop',
    releaseDate: 'December 22, 2023',
    language: 'Hindi',
    genre: 'Comedy/Drama',
    duration: '2h 40m',
    certificate: 'UA',
    director: 'Rajkumar Hirani',
    cast: 'Shah Rukh Khan, Taapsee Pannu, Vicky Kaushal',
    price: '₹349'
  },
  {
    id: 'movie-3',
    title: 'Fighter',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop',
    releaseDate: 'January 25, 2024',
    language: 'Hindi',
    genre: 'Action/Thriller',
    duration: '2h 46m',
    certificate: 'UA',
    director: 'Siddharth Anand',
    cast: 'Hrithik Roshan, Deepika Padukone, Anil Kapoor',
    price: '₹399'
  },
  {
    id: 'movie-4',
    title: 'Crew',
    image: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?q=80&w=2070&auto=format&fit=crop',
    releaseDate: 'March 29, 2024',
    language: 'Hindi',
    genre: 'Comedy/Heist',
    duration: '2h 10m',
    certificate: 'UA',
    director: 'Rajesh Krishnan',
    cast: 'Kareena Kapoor, Tabu, Kriti Sanon',
    price: '₹299'
  },
  {
    id: 'movie-5',
    title: 'Bade Miyan Chote Miyan',
    image: 'https://images.unsplash.com/photo-1508896694512-1eade558679c?q=80&w=1470&auto=format&fit=crop',
    releaseDate: 'April 10, 2024',
    language: 'Hindi',
    genre: 'Action/Comedy',
    duration: '2h 35m',
    certificate: 'UA',
    director: 'Ali Abbas Zafar',
    cast: 'Akshay Kumar, Tiger Shroff, Prithviraj Sukumaran',
    price: '₹349'
  },
  {
    id: 'movie-6',
    title: 'Maidaan',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1449&auto=format&fit=crop',
    releaseDate: 'April 10, 2024',
    language: 'Hindi',
    genre: 'Sports/Biographical',
    duration: '2h 35m',
    certificate: 'U',
    director: 'Amit Ravindernath Sharma',
    cast: 'Ajay Devgn, Priyamani, Gajraj Rao',
    price: '₹299'
  },
  {
    id: 'movie-7',
    title: 'Singham Again',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070&auto=format&fit=crop',
    releaseDate: 'August 15, 2024',
    language: 'Hindi',
    genre: 'Action/Crime',
    duration: '2h 30m',
    certificate: 'UA',
    director: 'Rohit Shetty',
    cast: 'Ajay Devgn, Kareena Kapoor, Ranveer Singh',
    price: '₹349'
  },
  {
    id: 'movie-8',
    title: 'Stree 2',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop',
    releaseDate: 'August 30, 2024',
    language: 'Hindi',
    genre: 'Horror/Comedy',
    duration: '2h 20m',
    certificate: 'UA',
    director: 'Amar Kaushik',
    cast: 'Rajkummar Rao, Shraddha Kapoor, Pankaj Tripathi',
    price: '₹299'
  }
];

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMovies = bollywoodMovies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.cast.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <div className="relative h-80 bg-eventhive-dark">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop" 
            alt="Movies background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-eventhive-dark to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bollywood Movies</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Book tickets for the latest Bollywood releases and experience the magic of Indian cinema
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
                placeholder="Search movies, actors, or genres..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="bg-eventhive-pink hover:bg-eventhive-pink/90 text-white">
              <Film className="mr-2 h-5 w-5" />
              Filter Movies
            </Button>
          </div>
        </div>

        {/* Movies Tabs */}
        <Tabs defaultValue="now-showing" className="mb-8">
          <TabsList className="mb-8 w-full max-w-lg mx-auto grid grid-cols-3 h-auto">
            <TabsTrigger value="now-showing" className="py-3">Now Showing</TabsTrigger>
            <TabsTrigger value="coming-soon" className="py-3">Coming Soon</TabsTrigger>
            <TabsTrigger value="popular" className="py-3">Popular</TabsTrigger>
          </TabsList>
          
          <TabsContent value="now-showing" className="space-y-8">
            {filteredMovies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMovies.map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-gray-600">No movies found matching your search.</p>
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
          
          <TabsContent value="coming-soon" className="text-center py-8">
            <p className="text-lg text-gray-600">Coming soon movies will be available here.</p>
          </TabsContent>
          
          <TabsContent value="popular" className="text-center py-8">
            <p className="text-lg text-gray-600">Popular movies will be available here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MoviesPage;
