import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BannerAdSection = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const bannerAds = [
    {
      id: 1,
      title: 'Premium Freelancer Membership',
      description: 'Get featured and reach more clients',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=970&h=250&fit=crop&q=80',
      cta: 'Learn More',
      link: '#',
      sponsor: 'Premium Partner'
    },
    {
      id: 2,
      title: 'Boost Your Visibility',
      description: 'Promote your services to thousands of clients',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=970&h=250&fit=crop&q=80',
      cta: 'Get Started',
      link: '#',
      sponsor: 'Featured Partner'
    },
    {
      id: 3,
      title: 'Enterprise Solutions',
      description: 'Connect with top-tier businesses worldwide',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=970&h=250&fit=crop&q=80',
      cta: 'Contact Us',
      link: '#',
      sponsor: 'Enterprise Partner'
    },
  ];

  // Auto-rotate banners every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerAds.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [bannerAds.length]);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Ad Slider */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBannerIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="relative"
            >
              <a
                href={bannerAds[currentBannerIndex].link}
                className="block group"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Banner Image */}
                <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${bannerAds[currentBannerIndex].image})`,
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F7941D]/90 via-[#F7941D]/70 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 lg:px-16">
                    {/* Sponsor Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-[#F7941D] text-xs font-semibold px-3 py-1 rounded-full">
                        {bannerAds[currentBannerIndex].sponsor}
                      </span>
                    </div>
                    
                    <div className="max-w-2xl">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                        {bannerAds[currentBannerIndex].title}
                      </h3>
                      <p className="text-white/90 text-base md:text-lg mb-6">
                        {bannerAds[currentBannerIndex].description}
                      </p>
                      <motion.button
                        className="bg-white text-[#F7941D] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = bannerAds[currentBannerIndex].link;
                        }}
                      >
                        {bannerAds[currentBannerIndex].cta} →
                      </motion.button>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentBannerIndex((prev) => (prev - 1 + bannerAds.length) % bannerAds.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            aria-label="Previous banner"
          >
            <svg className="w-5 h-5 text-[#F7941D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentBannerIndex((prev) => (prev + 1) % bannerAds.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            aria-label="Next banner"
          >
            <svg className="w-5 h-5 text-[#F7941D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {bannerAds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBannerIndex(index)}
                className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
                  index === currentBannerIndex 
                    ? 'bg-white w-8 h-2' 
                    : 'bg-white/50 hover:bg-white/70 w-2 h-2'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAdSection;





