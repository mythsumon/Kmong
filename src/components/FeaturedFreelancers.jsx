import { motion } from 'framer-motion';

const freelancers = [
  {
    id: 1,
    name: 'Sarah Kim',
    role: 'UI/UX Designer',
    country: 'KR',
    countryFlag: '🇰🇷',
    rating: 5,
    promoted: true,
    bio: 'Creating beautiful digital experiences for global brands',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Full Stack Developer',
    country: 'SG',
    countryFlag: '🇸🇬',
    rating: 5,
    promoted: true,
    bio: 'Building scalable web applications with modern tech',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Marketing Strategist',
    country: 'GB',
    countryFlag: '🇬🇧',
    rating: 5,
    promoted: true,
    bio: 'Driving growth through data-driven marketing campaigns',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
  },
  {
    id: 4,
    name: 'Takashi Yamato',
    role: 'Video Editor',
    country: 'JP',
    countryFlag: '🇯🇵',
    rating: 4.9,
    promoted: false,
    bio: 'Crafting compelling visual stories that engage audiences',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Takashi'
  },
  {
    id: 5,
    name: 'Maria Garcia',
    role: 'Translator',
    country: 'ES',
    countryFlag: '🇪🇸',
    rating: 4.8,
    promoted: false,
    bio: 'Bridging languages and cultures with precision',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria'
  },
];

const FreelancerCard = ({ freelancer, index }) => {
  const isTopRated = freelancer.rating >= 4.9;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group bg-white rounded-2xl p-6 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2 transition-all duration-300"
      style={{
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)'
      }}
      whileHover={{
        y: -4,
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      role="article"
      tabIndex={0}
    >
      {/* Header Row */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div 
            className="w-14 h-14 rounded-full p-0.5"
            style={{
              background: 'linear-gradient(135deg, #F7941D, #E57C00)',
              boxShadow: '0 2px 8px rgba(247,148,29,0.3)'
            }}
          >
            <img
              src={freelancer.avatar}
              alt={`${freelancer.name} avatar`}
              className="w-full h-full rounded-full bg-white p-0.5"
            />
          </div>
        </div>

        {/* Country Flag & Promoted Tag */}
        <div className="flex items-center gap-2">
          {freelancer.promoted && (
            <span 
              className="bg-gradient-to-r from-[#F7941D] to-[#E57C00] text-white text-[10px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap"
              style={{ borderRadius: '6px' }}
            >
              Promoted
            </span>
          )}
          <span className="text-lg" aria-label={`${freelancer.country} flag`}>
            {freelancer.countryFlag}
          </span>
        </div>
      </div>

      {/* Name & Role */}
      <div className="mb-3 relative z-10">
        <h3 className="text-lg font-bold text-[#000000] mb-1">
          {freelancer.name}
        </h3>
        <p className="text-sm text-[#7A7A7A] font-medium">
          {freelancer.role}
        </p>
      </div>

      {/* Bio */}
      <p className="text-sm text-[#808080] leading-relaxed mb-4 line-clamp-2 relative z-10" style={{ lineHeight: '1.5' }}>
        {freelancer.bio}
      </p>

      {/* Ratings */}
      <div className="flex items-center gap-2 mb-5 relative z-10">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < Math.floor(freelancer.rating) ? 'text-[#F7941D]' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
              style={{
                filter: i < Math.floor(freelancer.rating) ? 'drop-shadow(0 1px 2px rgba(247,148,29,0.3))' : 'none'
              }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm font-medium text-[#000000]">{freelancer.rating}</span>
        {isTopRated && (
          <span className="ml-2 text-xs font-semibold text-[#F7941D] bg-[rgba(247,148,29,0.1)] px-2 py-0.5 rounded-full">
            Top Rated
          </span>
        )}
      </div>

      {/* Call to Action */}
      <div className="space-y-2 relative z-10">
        <motion.button
          className="w-full h-10 bg-[#F7941D] text-white font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2"
          style={{ borderRadius: '12px' }}
          whileHover={{ 
            scale: 1.03,
            backgroundColor: '#E57C00'
          }}
          whileTap={{ scale: 0.98 }}
          aria-label={`View ${freelancer.name}'s profile`}
        >
          View Profile
        </motion.button>
        <a
          href={`#profile-${freelancer.id}`}
          className="block text-center text-sm text-[#F7941D] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2 rounded relative group"
          aria-label={`See ${freelancer.name}'s portfolio`}
        >
          See portfolio
          <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F7941D] group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>
    </motion.article>
  );
};

const FeaturedFreelancers = () => {
  return (
    <section 
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(to bottom, #FFF4E5 0%, #FFFFFF 100%)' 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16 relative"
        >
          {/* Optional Gradient Bar Behind Heading */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#F7941D] to-transparent opacity-20 blur-sm"
            style={{ width: '400px' }}
          />
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-3 relative z-10">
            Meet Top Freelancers
          </h2>
          
          {/* Orange Accent Line */}
          <div className="w-16 h-0.5 bg-[#F7941D] mx-auto mb-4 relative z-10" />
          
          <p className="text-base md:text-lg text-[#7A7A7A] font-medium max-w-2xl mx-auto relative z-10">
            Discover highly-rated professionals from around the world.
          </p>
        </motion.div>
        
        {/* Horizontal Scrollable Container */}
        <div className="relative">
          <div 
            className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8 scroll-smooth"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div 
              className="flex gap-6 md:gap-8"
              style={{ 
                scrollSnapType: 'x mandatory'
              }}
            >
              {freelancers.map((freelancer, index) => (
                <div 
                  key={freelancer.id}
                  className="flex-shrink-0"
                  style={{
                    scrollSnapAlign: 'start'
                  }}
                >
                  {/* Mobile: 1 card per view */}
                  <div 
                    className="md:hidden"
                    style={{
                      width: 'calc(100vw - 2rem)',
                      minWidth: 'calc(100vw - 2rem)'
                    }}
                  >
                    <FreelancerCard freelancer={freelancer} index={index} />
                  </div>
                  {/* Tablet: 2 cards per view */}
                  <div 
                    className="hidden md:block lg:hidden"
                    style={{
                      width: 'calc((100vw - 3rem - 24px) / 2)',
                      minWidth: 'calc((100vw - 3rem - 24px) / 2)'
                    }}
                  >
                    <FreelancerCard freelancer={freelancer} index={index} />
                  </div>
                  {/* Desktop: 4 cards per view */}
                  <div 
                    className="hidden lg:block"
                    style={{
                      width: 'calc((1280px - 4rem - 72px) / 4)',
                      minWidth: '280px'
                    }}
                  >
                    <FreelancerCard freelancer={freelancer} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFreelancers;
