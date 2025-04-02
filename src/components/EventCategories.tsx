
import EventCategoryCard from './EventCategoryCard';

const categories = [
  { title: 'Concerts', icon: 'fas fa-music', path: '/concerts', count: 42 },
  { title: 'Sports', icon: 'fas fa-basketball-ball', path: '/sports', count: 38 },
  { title: 'Movies', icon: 'fas fa-film', path: '/movies', count: 64 },
  { title: 'Comedy', icon: 'fas fa-theater-masks', path: '/comedy', count: 27 },
  { title: 'Activities', icon: 'fas fa-hiking', path: '/activities', count: 31 },
  { title: 'Streams', icon: 'fas fa-tv', path: '/streams', count: 19 },
];

const EventCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <EventCategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              path={category.path}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
