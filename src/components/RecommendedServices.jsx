import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Logo Design & Brand Identity',
    freelancer: 'Sarah Kim',
    price: 299,
    tag: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'E-commerce Website Development',
    freelancer: 'James Chen',
    price: 2500,
    tag: 'Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Social Media Marketing Campaign',
    freelancer: 'Emma Wilson',
    price: 800,
    tag: 'Marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    title: 'Technical Writing & Documentation',
    freelancer: 'Maria Garcia',
    price: 150,
    tag: 'Writing',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    title: 'Product Video Commercial',
    freelancer: 'Takashi Yamada',
    price: 1200,
    tag: 'Video',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    title: 'Multi-language Translation',
    freelancer: 'Anna Schmidt',
    price: 350,
    tag: 'Translation',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop'
  },
  {
    id: 7,
    title: 'Business Plan & Strategy',
    freelancer: 'David Park',
    price: 650,
    tag: 'Business',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
  },
  {
    id: 8,
    title: 'Mobile App UI/UX Design',
    freelancer: 'Lisa Wong',
    price: 450,
    tag: 'Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-xl overflow-hidden border border-gray-line hover-lift">
        <div className="relative overflow-hidden h-48">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute top-4 left-4">
            <span className="bg-white text-primary text-xs font-semibold px-3 py-1 rounded-full">
              {service.tag}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-[#111111] mb-2 line-clamp-2">{service.title}</h3>
          <p className="text-sm text-gray-600 mb-3">by {service.freelancer}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">${service.price}</span>
            <button className="text-sm text-gray-600 hover:text-primary transition-colors">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const RecommendedServices = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories from services
  const categories = useMemo(() => {
    const uniqueTags = [...new Set(services.map(s => s.tag))];
    return ['All', ...uniqueTags.sort()];
  }, []);

  // Filter services based on active category
  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') {
      return services;
    }
    return services.filter(service => service.tag === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#111111] mb-8 text-center"
        >
          Popular Services Around the World
        </motion.h2>
        
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#7ff442] focus:ring-offset-2 ${
                activeCategory === category
                  ? 'bg-[#3ca41d] text-white'
                  : 'bg-[#F6F7F8] text-[#374151] border border-[rgba(0,0,0,0.06)] hover:bg-[rgba(127,244,66,0.12)] hover:border-[#3ca41d26]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedServices;



