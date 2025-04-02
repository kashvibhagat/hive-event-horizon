
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing to our newsletter!");
      setEmail('');
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <section className="py-16 bg-eventhive-pink text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Event</h2>
          <p className="text-lg mb-8 opacity-90">Subscribe to our newsletter and be the first to know about upcoming events, exclusive offers, and more.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="h-12 text-gray-800 border-white flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit" 
              className="h-12 bg-white text-eventhive-pink hover:bg-gray-100 font-medium whitespace-nowrap"
            >
              Subscribe Now
            </Button>
          </form>
          <p className="mt-4 text-sm opacity-75">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
