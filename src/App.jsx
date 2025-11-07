import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BannerAdSection from './components/BannerAdSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturedFreelancers from './components/FeaturedFreelancers';
import RecommendedServices from './components/RecommendedServices';
import HowItWorks from './components/HowItWorks';
import BannerAds from './components/BannerAds';
import LiveJobs from './components/LiveJobs';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BannerAdSection />
        <CategoriesSection />
        <FeaturedFreelancers />
        <RecommendedServices />
        <HowItWorks />
        <BannerAds />
        <LiveJobs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

