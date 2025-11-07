import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Kim',
    role: 'Freelance Designer',
    country: '🇰🇷',
    quote: 'This platform helped me find global clients easily. The quality of projects is amazing!',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    country: '🇸🇬',
    quote: 'Found the perfect developer for our startup. The collaboration was seamless.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Marketing Manager',
    country: '🇬🇧',
    quote: 'Outstanding freelancers and professional service. Highly recommended!',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
  },
  {
    id: 4,
    name: 'Yuki Tanaka',
    role: 'Freelance Translator',
    country: '🇯🇵',
    quote: 'Great platform to connect with international clients. Very satisfied!',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yuki'
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
      <motion.div
        className="bg-white rounded-xl p-6 border border-gray-line h-full"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-3 border-2 border-gray-line"
          />
          <div>
            <div className="font-semibold text-[#111111]">{testimonial.name}</div>
            <div className="text-sm text-gray-600">{testimonial.role} {testimonial.country}</div>
          </div>
        </div>
        
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-700 italic">"{testimonial.quote}"</p>
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / itemsPerView));
    }, 5000);
    return () => clearInterval(interval);
  }, [itemsPerView]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#111111] mb-8 text-center"
        >
          Success Stories
        </motion.h2>
        
        <div className="overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(Math.ceil(testimonials.length / itemsPerView))].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

