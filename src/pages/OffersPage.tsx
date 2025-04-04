
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BadgePercent, CreditCard, Search } from 'lucide-react';
import OfferCard from '@/components/OfferCard';

const bankOffers = [
  {
    id: 'offer1',
    bank: 'HDFC Bank',
    title: '15% Instant Discount on Credit Cards',
    description: 'Get 15% instant discount up to ₹500 on all HDFC Bank Credit Cards for event tickets above ₹1,500',
    code: 'HDFCFEST',
    validUntil: 'April 30, 2025',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    minValue: '₹1,500',
    maxDiscount: '₹500',
    cardTypes: ['Credit Card', 'Debit Card'],
    categories: ['all', 'sports', 'concerts']
  },
  {
    id: 'offer2',
    bank: 'ICICI Bank',
    title: '10% Cashback on Debit Cards',
    description: 'Get 10% cashback up to ₹750 on all ICICI Bank Debit Cards for movie tickets',
    code: 'ICICIMOVIE',
    validUntil: 'May 15, 2025',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    minValue: '₹1,000',
    maxDiscount: '₹750',
    cardTypes: ['Debit Card'],
    categories: ['all', 'movies']
  },
  {
    id: 'offer3',
    bank: 'SBI Card',
    title: 'Buy 1 Get 1 Free on Comedy Shows',
    description: 'Buy one ticket and get another free on all comedy show bookings with SBI Credit Cards',
    code: 'SBILAUGH',
    validUntil: 'June 1, 2025',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    minValue: 'No minimum value',
    maxDiscount: 'Equal to ticket price',
    cardTypes: ['Credit Card'],
    categories: ['all', 'comedy']
  },
  {
    id: 'offer4',
    bank: 'Axis Bank',
    title: '20% Off on IPL Match Tickets',
    description: 'Get flat 20% off on all IPL cricket match tickets with Axis Bank cards',
    code: 'AXISIPL',
    validUntil: 'End of IPL Season 2025',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    minValue: '₹2,000',
    maxDiscount: '₹1,000',
    cardTypes: ['Credit Card', 'Debit Card'],
    categories: ['all', 'sports']
  },
  {
    id: 'offer5',
    bank: 'American Express',
    title: 'Complimentary Lounge Access',
    description: 'Get complimentary lounge access at select venues on bookings above ₹5,000 with Amex Cards',
    code: 'AMEXLOUNGE',
    validUntil: 'December 31, 2025',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    minValue: '₹5,000',
    maxDiscount: 'Lounge access worth ₹2,000',
    cardTypes: ['Credit Card'],
    categories: ['all', 'concerts']
  },
  {
    id: 'offer6',
    bank: 'Kotak Mahindra Bank',
    title: 'Flat ₹500 Off on Weekend Events',
    description: 'Enjoy flat ₹500 off on all weekend event bookings with Kotak Bank cards',
    code: 'KOTAKWEEKEND',
    validUntil: 'September 30, 2025',
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    minValue: '₹1,000',
    maxDiscount: '₹500',
    cardTypes: ['Credit Card', 'Debit Card'],
    categories: ['all', 'concerts', 'comedy']
  }
];

const OffersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredOffers = bankOffers.filter(offer => 
    (offer.categories.includes(activeCategory) || activeCategory === 'all') &&
    (offer.bank.toLowerCase().includes(searchQuery.toLowerCase()) || 
     offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     offer.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-eventhive-dark">
          Exclusive Bank <span className="text-eventhive-pink">Offers</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Save more on your event tickets with these exclusive bank offers and promotions. Use the promo codes during checkout to avail discounts.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search offers by bank or description"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
          <TabsList className="grid grid-cols-3 md:grid-cols-4 gap-1">
            <TabsTrigger value="all" className="flex items-center gap-1">
              <BadgePercent size={16} />
              <span>All Offers</span>
            </TabsTrigger>
            <TabsTrigger value="sports" className="flex items-center gap-1">
              <span>Sports</span>
            </TabsTrigger>
            <TabsTrigger value="movies" className="flex items-center gap-1">
              <span>Movies</span>
            </TabsTrigger>
            <TabsTrigger value="comedy" className="flex items-center gap-1">
              <span>Comedy</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {filteredOffers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <CreditCard className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No offers found</h2>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default OffersPage;
