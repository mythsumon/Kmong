import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const popularSkills = [
    'Web Design',
    'UI/UX Design',
    'Databases',
    'Business Cards',
    'Logo Design',
    'Frontend Dev'
  ];

  const trustedAvatars = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
  ];

  const freelancerProfiles = [
    {
      id: 1,
      handle: '@jenny',
      role: 'UI/UX Designer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jenny',
      projects: '80+ projects completed',
      rate: '$30 per hour',
      avatarSrc: 'jenny-avatar.png'
    },
    {
      id: 2,
      handle: '@michael',
      role: 'Full Stack Developer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      projects: '120+ projects completed',
      rate: '$45 per hour',
      avatarSrc: 'michael-avatar.png'
    },
    {
      id: 3,
      handle: '@sarah',
      role: 'Brand Designer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      projects: '95+ projects completed',
      rate: '$35 per hour',
      avatarSrc: 'sarah-avatar.png'
    },
    {
      id: 4,
      handle: '@david',
      role: 'Marketing Specialist',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      projects: '150+ projects completed',
      rate: '$40 per hour',
      avatarSrc: 'david-avatar.png'
    },
  ];

  const heroBackgrounds = [
    {
      id: 1,
      name: 'Workspace Collaboration',
      color: '#FFF4E5',
      gradient: 'linear-gradient(180deg, rgba(255, 244, 229, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Modern Office',
      color: '#FFF4E5',
      gradient: 'linear-gradient(180deg, rgba(255, 244, 229, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Creative Workspace',
      color: '#FFF4E5',
      gradient: 'linear-gradient(180deg, rgba(255, 244, 229, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'Remote Work',
      color: '#FFF4E5',
      gradient: 'linear-gradient(180deg, rgba(255, 244, 229, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=1080&fit=crop&q=80'
    },
  ];

  // Auto-rotate profiles every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % freelancerProfiles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [freelancerProfiles.length]);

  // Auto-rotate backgrounds every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Main Hero Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full shadow-2xl overflow-hidden relative"
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08)'
        }}
      >
        {/* Background Slider */}
        <div className="absolute inset-0 overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBackgroundIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 bg-black"
            >
              {/* Background Image */}
              {heroBackgrounds[currentBackgroundIndex].image && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${heroBackgrounds[currentBackgroundIndex].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              )}
              {/* Dark Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 100%)',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Background Navigation Dots */}
        <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
          {heroBackgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBackgroundIndex(index)}
              className={`w-2 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#9BB3AE] ${
                index === currentBackgroundIndex 
                  ? 'bg-white h-10' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Switch to background ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-12 relative">
            
            {/* Left Column */}
            <div className="relative z-10">
              {/* Large Background Word */}
              <div 
                className="absolute -top-8 -left-4 lg:-top-12 lg:-left-8 opacity-10 pointer-events-none select-none"
                style={{
                  fontSize: 'clamp(96px, 12vw, 192px)',
                  fontWeight: 100,
                  letterSpacing: '0.02em',
                  color: '#ffffff',
                  fontFamily: 'system-ui, sans-serif'
                }}
              >
                FREELANCE
              </div>

              {/* Content Container */}
              <div className="relative z-10 space-y-6">
                {/* Headline above Search */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.0, duration: 0.3 }}
                  className="text-center md:text-left"
                >
                  <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold text-white leading-snug" style={{ fontFamily: 'Inter, Poppins, system-ui, sans-serif', fontWeight: 700 }}>
                    What service are you looking for today?
                  </h2>
                  <p className="mt-2 text-[14px] sm:text-[15px] md:text-[16px] text-[#CCCCCC] leading-relaxed">
                    Find experts in design, development, and more across the world.
                  </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="relative"
                >
                  {/* Orange Glow Behind Search Bar */}
                  <div className="absolute -inset-2 bg-[#F7941D] opacity-20 blur-2xl rounded-full -z-10"></div>
                  
                  <div className="flex items-center bg-white rounded-[12px] h-14 overflow-hidden border-2 border-[#F7941D] relative" style={{ boxShadow: '0 4px 10px rgba(247, 148, 29, 0.2)' }}>
                    {/* Search Icon */}
                    <div className="pl-5 pr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-[#F7941D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    
                    {/* Input */}
                    <div className="flex-1 relative group">
                      <input
                        type="text"
                        placeholder="Search for any services…"
                        className="w-full h-full outline-none text-[#2D2D2D] placeholder:text-[#7A7A7A] text-base bg-transparent"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F7941D] scale-x-0 transition-transform duration-300 origin-left group-focus-within:scale-x-100"></div>
                    </div>
                    
                    {/* Right Utilities */}
                    <div className="flex items-center gap-2 pr-2">
                      {/* Voice/Mic Icon */}
                      <button
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2"
                        aria-label="Voice search"
                      >
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </button>
                      
                      {/* Go/Arrow Button */}
                      <motion.button
                        className="h-10 w-10 rounded-[12px] bg-[#F7941D] text-white flex items-center justify-center hover:bg-[#E57C00] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        aria-label="Search"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Popular Skills Chips */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex flex-wrap gap-2"
                >
                  {popularSkills.map((skill, index) => (
                    <motion.button
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 + index * 0.05, duration: 0.3 }}
                      className="px-4 py-2 rounded-full bg-white text-sm text-black border-2 border-[#F7941D] hover:bg-[#F7941D] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.button>
                  ))}
                </motion.div>

                {/* Short Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-lg text-[#CCCCCC] leading-relaxed max-w-xl"
                >
                  Connect businesses with talented freelancers worldwide. Find the perfect match for your project or showcase your skills to global clients.
                </motion.p>

                {/* Trusted Freelancers Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="bg-white rounded-2xl p-4 shadow-md border border-gray-line flex items-center gap-4"
                >
                  {/* Avatar Group */}
                  <div className="flex -space-x-2">
                    {trustedAvatars.slice(0, 6).map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar}
                        alt={`Freelancer ${index + 1}`}
                        className="w-10 h-10 rounded-full border-2 border-white"
                        style={{ zIndex: 6 - index }}
                      />
                    ))}
                  </div>
                  
                  {/* Label */}
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#2D2D2D]">Trusted Freelancers</div>
                  </div>
                  
                  {/* Rating & Stats */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#F7941D]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-[#7A7A7A] whitespace-nowrap">200+ Satisfied</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative lg:flex items-end justify-end">
              {/* Model/Photo Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative w-full lg:w-auto h-[400px] lg:h-[500px] flex items-end justify-center lg:justify-end"
              >
                {/* Placeholder Image Container */}
                <div 
                  className="relative w-full max-w-[400px] h-full rounded-2xl overflow-hidden shadow-2xl"
                  data-image-src="model-beanbag.png"
                  style={{
                    background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                  }}
                >
                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-32 h-32 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-gray-500 text-sm">Model Photo</p>
                      <p className="text-gray-400 text-xs mt-1">(Replace with PNG cutout)</p>
                    </div>
                  </div>
                </div>

                {/* Floating Circular Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  transition={{ 
                    delay: 0.6, 
                    duration: 0.4 
                  }}
                  className="absolute top-8 left-4 lg:top-12 lg:left-8 w-24 h-24 rounded-full bg-gradient-to-br from-[#F7941D] to-[#E57C00] backdrop-blur-sm border-2 border-white/50 flex items-center justify-center shadow-lg"
                  style={{
                    animation: 'rotate 10s linear infinite',
                    animationDelay: '0.6s',
                    boxShadow: '0 4px 12px rgba(247, 148, 29, 0.4)'
                  }}
                >
                  <div className="text-center">
                    <div className="text-xs font-semibold text-white mb-1">DISCOVER</div>
                    <div className="w-8 h-8 mx-auto bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#F7941D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-white mt-1">MORE</div>
                  </div>
                </motion.div>

                {/* Profile Stat Card Overlay with Slider */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="absolute bottom-8 right-4 lg:bottom-12 lg:right-8 w-[240px]"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProfileIndex}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#000000] rounded-2xl p-4 shadow-xl border border-[rgba(255,255,255,0.1)]"
                    >
                      {/* Row 1: Avatar + Handle + Role */}
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={freelancerProfiles[currentProfileIndex].avatar}
                          alt={freelancerProfiles[currentProfileIndex].handle}
                          className="w-10 h-10 rounded-full border-2 border-[#F7941D]"
                          data-avatar-src={freelancerProfiles[currentProfileIndex].avatarSrc}
                        />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white">
                            {freelancerProfiles[currentProfileIndex].handle}
                          </div>
                          <div className="text-xs text-[#CCCCCC]">
                            {freelancerProfiles[currentProfileIndex].role}
                          </div>
                        </div>
                      </div>
                      
                      {/* Row 2: Projects Completed */}
                      <div className="flex items-center gap-2 mb-2 text-sm text-white">
                        <div className="w-4 h-4 rounded-full bg-[#F7941D] flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{freelancerProfiles[currentProfileIndex].projects}</span>
                      </div>
                      
                      {/* Row 3: Hourly Rate */}
                      <div className="flex items-center gap-2 text-sm text-white">
                        <div className="w-4 h-4 rounded-full bg-[#F7941D] flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="font-semibold text-[#F7941D]">
                          {freelancerProfiles[currentProfileIndex].rate}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Slider Dots Indicator */}
                  <div className="flex justify-center gap-1.5 mt-3">
                    {freelancerProfiles.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProfileIndex(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:ring-offset-2 focus:ring-offset-transparent ${
                          index === currentProfileIndex 
                            ? 'bg-[#F7941D] w-6' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to profile ${index + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
