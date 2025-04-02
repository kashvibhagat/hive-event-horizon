
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, Search } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Sports', href: '/sports' },
    { name: 'Concerts', href: '/concerts' },
    { name: 'Movies', href: '/movies' },
    { name: 'Comedy', href: '/comedy' },
    { name: 'Offers', href: '/offers' },
    { name: 'Streams', href: '/streams' },
    { name: 'Activities', href: '/activities' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-eventhive-pink">Event<span className="text-eventhive-dark">Hive</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="nav-link font-medium">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="text-eventhive-dark hover:text-eventhive-pink">
              <Search className="h-5 w-5" />
            </button>
            <div className="hidden md:block">
              <Link to="/login">
                <Button variant="outline" className="mr-2">
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-eventhive-pink hover:bg-eventhive-pink/90 text-white">
                  Sign up
                </Button>
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-eventhive-dark">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden animate-fade-in">
            <div className="pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 px-3 nav-link font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-eventhive-pink hover:bg-eventhive-pink/90 text-white">
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
