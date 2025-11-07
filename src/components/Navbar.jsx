import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';

const Navbar = () => {
  const { language, changeLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const dropdownRef = useRef(null);
  
  const t = (key) => getTranslation(language, key);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active menu item based on current hash/route
  useEffect(() => {
    const updateActiveMenuItem = () => {
      const hash = window.location.hash;
      // Only set active if there's a hash, otherwise leave empty (no active state on first load)
      setActiveMenuItem(hash || '');
    };

    updateActiveMenuItem();
    window.addEventListener('hashchange', updateActiveMenuItem);
    return () => window.removeEventListener('hashchange', updateActiveMenuItem);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  const menuItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'KR', name: 'Korean', flag: '🇰🇷' },
    { code: 'MM', name: 'Myanmar', flag: '🇲🇲' },
    { code: 'MN', name: 'Mongolian', flag: '🇲🇳' },
  ];

  const handleLanguageSelect = (code) => {
    changeLanguage(code);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 backdrop-blur-md' : 'py-0'
      }`}
      style={{
        background: isScrolled 
          ? 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(10,10,10,0.95) 100%)'
          : 'linear-gradient(90deg, #000000 0%, #0A0A0A 100%)',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        boxShadow: isScrolled 
          ? '0 4px 12px rgba(0,0,0,0.3)'
          : 'none',
        height: isScrolled ? '64px' : '72px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left Section: Logo + Main Menu */}
          <div className="flex items-center space-x-8 lg:space-x-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <motion.a
                href="#"
                className="text-2xl md:text-3xl font-bold text-[#F7941D] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: 'Poppins, Inter, system-ui, sans-serif'
                }}
              >
                Kmong
              </motion.a>
            </div>

            {/* Main Menu - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => {
                const isActive = activeMenuItem === item.href;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-white relative group"
                    style={{
                      fontFamily: 'Poppins, Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      fontWeight: 500
                    }}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.label}
                    <span 
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#F7941D] transition-all duration-300 ease-in-out ${
                        isActive 
                          ? 'w-full opacity-100' 
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    ></span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Search Bar - Center Section */}
            <motion.div
              className="hidden lg:flex items-center bg-[#1A1A1A] rounded-xl px-4 py-2 border border-[rgba(255,255,255,0.08)] hover:border-[#F7941D] transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              style={{ 
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }}
            >
              <svg 
                className="w-4 h-4 text-[#F7941D] mr-2 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{
                  filter: 'drop-shadow(0 0 2px rgba(247,148,29,0.5))'
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={t('nav.search')}
                className="bg-transparent border-none outline-none text-sm w-32 text-white placeholder:text-gray-500 focus:ring-0"
                style={{
                  fontFamily: 'Poppins, Inter, system-ui, sans-serif',
                  fontSize: '14px'
                }}
                onFocus={(e) => {
                  e.target.parentElement.style.boxShadow = '0 0 0 2px rgba(247,148,29,0.3)';
                  e.target.parentElement.style.borderColor = '#F7941D';
                }}
                onBlur={(e) => {
                  e.target.parentElement.style.boxShadow = 'none';
                  e.target.parentElement.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              />
            </motion.div>

            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white hover:text-[#F7941D] transition-colors relative group rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-base">🌐</span>
                <span>{language}</span>
                <svg 
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              {/* Dropdown */}
              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-52 bg-[#111111] rounded-lg overflow-hidden z-50 border border-[rgba(255,255,255,0.08)]"
                    style={{
                      boxShadow: '0 4px 10px rgba(0,0,0,0.4)'
                    }}
                  >
                    {languages.map((lang, index) => (
                      <div key={lang.code}>
                        <button
                          onClick={() => handleLanguageSelect(lang.code)}
                          className={`w-full px-4 py-3 text-left text-sm text-white hover:bg-[#E57C00] transition-colors flex items-center gap-3 ${
                            language === lang.code ? 'bg-[rgba(247,148,29,0.15)]' : ''
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="flex-1">{lang.name}</span>
                          {language === lang.code && (
                            <svg className="w-4 h-4 text-[#F7941D]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                        {index < languages.length - 1 && (
                          <div className="h-px bg-[rgba(255,255,255,0.08)]"></div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Buttons */}
            <motion.a
              href="#post-job"
              className="hidden md:block px-4 py-2 text-sm font-medium text-white hover:text-[#F7941D] transition-colors rounded-lg"
              style={{
                fontFamily: 'Poppins, Inter, system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.postJob')}
            </motion.a>
            <motion.button
              className="hidden md:block px-4 py-2.5 text-sm font-medium border border-[#F7941D] text-[#F7941D] rounded-lg hover:bg-[#F7941D] hover:text-black transition-all duration-300"
              style={{
                fontFamily: 'Poppins, Inter, system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.joinFreelancer')}
            </motion.button>
            <motion.button
              className="px-4 py-2.5 text-sm font-medium bg-[#F7941D] text-white rounded-lg hover:bg-[#E57C00] transition-colors"
              style={{
                fontFamily: 'Poppins, Inter, system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.login')}
            </motion.button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-white hover:text-[#F7941D] transition-colors rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;





