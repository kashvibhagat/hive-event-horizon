
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import EventDetailPage from "./pages/EventDetailPage";
import SportsPage from "./pages/SportsPage";
import MoviesPage from "./pages/MoviesPage";
import ComedyPage from "./pages/ComedyPage";
import ConcertsPage from "./pages/ConcertsPage";
import StreamsPage from "./pages/StreamsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import OffersPage from "./pages/OffersPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQsPage from "./pages/FAQsPage";
import GalleryPage from "./pages/GalleryPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/event/:id" element={<EventDetailPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/comedy" element={<ComedyPage />} />
            <Route path="/concerts" element={<ConcertsPage />} />
            <Route path="/streams" element={<StreamsPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/bookings" element={<MyBookingsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
