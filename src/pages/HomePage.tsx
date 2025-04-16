
import HeroBanner from '@/components/HeroBanner';
import EventCategories from '@/components/EventCategories';
import FeaturedEvents from '@/components/FeaturedEvents';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <EventCategories />
      <FeaturedEvents />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;
