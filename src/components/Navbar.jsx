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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-smooth ${
        isScrolled ? 'py-2 backdrop-blur-custom' : 'py-0'
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(248, 250, 255, 0.9)'
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
        boxShadow: isScrolled 
          ? '0 2px 8px rgba(79, 159, 255, 0.08)'
          : '0 1px 3px rgba(79, 159, 255, 0.05)',
        height: isScrolled ? '64px' : '72px',
        borderBottom: '1px solid rgba(226, 232, 240, 0.6)'
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
                className="text-2xl md:text-3xl font-bold text-gradient relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25 }}
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
                    className="text-sm font-medium text-headline relative group"
                    style={{
                      fontFamily: 'Poppins, Inter, system-ui, sans-serif',
                      fontSize: '14px',
                      fontWeight: 500
                    }}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.label}
                    <span 
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-accent transition-all duration-smooth ease-in-out ${
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
              className="hidden lg:flex items-center bg-surface rounded-custom px-4 py-2 border border-border hover:border-primary transition-all duration-smooth group shadow-soft"
              whileHover={{ scale: 1.02 }}
              style={{ 
                transition: 'all 0.25s ease'
              }}
            >
              <svg 
                className="w-4 h-4 text-primary mr-2 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={t('nav.search')}
                className="bg-transparent border-none outline-none text-sm w-32 text-body placeholder:text-muted focus:ring-0"
                style={{
                  fontFamily: 'Poppins, Inter, system-ui, sans-serif',
                  fontSize: '14px'
                }}
                onFocus={(e) => {
                  e.target.parentElement.style.boxShadow = '0 0 0 2px rgba(79,159,255,0.25)';
                  e.target.parentElement.style.borderColor = '#4F9FFF';
                }}
                onBlur={(e) => {
                  e.target.parentElement.style.boxShadow = '0 2px 8px rgba(79, 159, 255, 0.08)';
                  e.target.parentElement.style.borderColor = '#E2E8F0';
                }}
              />
            </motion.div>

            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-body hover:text-primary transition-colors relative group rounded-custom bg-surface border border-border hover:border-primary shadow-soft"
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
                    className="absolute top-full right-0 mt-2 w-52 bg-surface rounded-custom overflow-hidden z-50 border border-border shadow-soft-lg backdrop-blur-custom"
                    style={{
                      boxShadow: '0 4px 16px rgba(79, 159, 255, 0.12)'
                    }}
                  >
                    {languages.map((lang, index) => (
                      <div key={lang.code}>
                        <button
                          onClick={() => handleLanguageSelect(lang.code)}
                          className={`w-full px-4 py-3 text-left text-sm text-body hover:bg-gradient-accent hover:text-white transition-all duration-smooth flex items-center gap-3 ${
                            language === lang.code ? 'bg-primary/10 text-primary' : ''
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="flex-1">{lang.name}</span>
                          {language === lang.code && (
                            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                        {index < languages.length - 1 && (
                          <div className="h-px bg-border"></div>
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
              className="hidden md:block px-4 py-2 text-sm font-medium text-headline hover:text-primary transition-colors rounded-lg"
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
              className="hidden md:block px-4 py-2.5 text-sm font-medium border-2 border-primary text-primary rounded-custom hover:bg-primary hover:text-white transition-all duration-smooth"
              style={{
                fontFamily: 'Poppins, Inter, system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79, 159, 255, 0.25)' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.joinFreelancer')}
            </motion.button>
            <motion.button
              className="px-4 py-2.5 text-sm font-medium text-white rounded-custom transition-all"
              style={{
                fontFamily: 'Poppins, Inter, system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                background: 'linear-gradient(135deg, #4F9FFF 0%, #7C83FD 100%)'
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79, 159, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.login')}
            </motion.button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-headline hover:text-primary transition-colors rounded-lg">
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





