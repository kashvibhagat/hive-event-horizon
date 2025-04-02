
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-eventhive-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Event<span className="text-eventhive-pink">Hive</span></h2>
            <p className="mb-4">Your one-stop destination for finding and booking the best events near you.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-eventhive-pink">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-eventhive-pink">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-eventhive-pink">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-eventhive-pink">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Event Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/sports" className="hover:text-eventhive-pink transition-colors">Sports</Link></li>
              <li><Link to="/concerts" className="hover:text-eventhive-pink transition-colors">Concerts</Link></li>
              <li><Link to="/movies" className="hover:text-eventhive-pink transition-colors">Movies</Link></li>
              <li><Link to="/comedy" className="hover:text-eventhive-pink transition-colors">Comedy</Link></li>
              <li><Link to="/activities" className="hover:text-eventhive-pink transition-colors">Activities</Link></li>
              <li><Link to="/streams" className="hover:text-eventhive-pink transition-colors">Streams</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-eventhive-pink transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-eventhive-pink transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-eventhive-pink transition-colors">FAQs</Link></li>
              <li><Link to="/gallery" className="hover:text-eventhive-pink transition-colors">Gallery</Link></li>
              <li><Link to="/privacy" className="hover:text-eventhive-pink transition-colors">Privacy Policy</Link></li>
              <li><Link to="/bookings" className="hover:text-eventhive-pink transition-colors">My Bookings</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <span>123 Event Street, San Francisco, CA 94158</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="fas fa-phone-alt mt-1"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <i className="fas fa-envelope mt-1"></i>
                <span>info@eventhive.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} EventHive. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li><Link to="/terms" className="hover:text-eventhive-pink transition-colors">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-eventhive-pink transition-colors">Privacy</Link></li>
                <li><Link to="/cookies" className="hover:text-eventhive-pink transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
