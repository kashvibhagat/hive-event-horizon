
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Concert Goer',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    quote: 'EventHive made it so easy to find and book tickets for my favorite band. The process was seamless, and I received my e-ticket instantly!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Sports Fan',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    quote: 'I use EventHive for all my sports events. Their selection is unmatched, and the user experience is fantastic. Highly recommend!'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Theater Lover',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    quote: 'Finding broadway tickets used to be a hassle until I discovered EventHive. Now I can easily see all available options and choose the best seats.'
  },
  {
    id: 4,
    name: 'David Williams',
    role: 'Comedy Show Attendee',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    quote: "The notifications feature is amazing! I never miss a comedy show in my area thanks to EventHive's timely alerts."
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">What Our Users Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full border-4 border-eventhive-pink"
                        />
                      </div>
                      <div className="mb-6">
                        <i className="fas fa-quote-left text-4xl text-eventhive-pink opacity-20"></i>
                      </div>
                      <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-eventhive-dark" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-eventhive-dark" />
          </button>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-eventhive-pink' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
