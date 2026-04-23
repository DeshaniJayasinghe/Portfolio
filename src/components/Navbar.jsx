import React, { useState, useEffect, useMemo } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navLinks = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience and skills', href: '#experience' },
    { name: 'Activities', href: '#activities' },
    { name: 'Academic Engagement', href: '#engagement' },
    { name: 'Certification', href: '#certification' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Reflection', href: '#reflections' },
  ], []);

  // Theme Toggle Logic
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      navLinks.forEach((link) => {
        const sectionId = link.href.replace('#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const ThemeBtn = () => (
    <button 
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-white hover:ring-2 ring-[#5e17eb] transition-all duration-300 flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
      )}
    </button>
  );

  return (
    <nav className="fixed w-full z-[100] bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300 font-sans">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 font-bold text-gray-900 dark:text-white text-lg tracking-tight uppercase">
            DESHANI<span className="text-[#5e17eb]">JAYASINGHE</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex space-x-6 items-center">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-all duration-300 font-bold text-[13px] uppercase tracking-widest whitespace-nowrap ${
                    isActive ? 'text-[#5e17eb] scale-105' : 'text-gray-500 dark:text-gray-400 hover:text-[#5e17eb]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              <ThemeBtn />
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="xl:hidden flex items-center gap-4">
            <ThemeBtn />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="relative z-[150] text-[#5e17eb] px-5 py-2 font-bold text-[10px] border-2 border-[#5e17eb] rounded-full hover:bg-[#5e17eb] hover:text-white transition-all shadow-lg shadow-[#5e17eb]/10 tracking-[0.1em]"
            >
              {isOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </div>

      {/* Solid Side Menu Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-[280px] h-screen bg-white dark:bg-[#0f172a] border-l border-gray-100 dark:border-gray-800 shadow-2xl transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out xl:hidden z-[110] flex flex-col`}
      >
        {/* Scrollable container for many menu items */}
        <div className="flex flex-col h-full pt-28 pb-10 overflow-y-auto custom-scrollbar">
          <div className="px-8 space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-4 text-[13px] font-bold rounded-xl transition-all duration-300 uppercase tracking-widest ${
                    isActive 
                      ? 'bg-[#5e17eb]/10 text-[#5e17eb] translate-x-2' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-[#5e17eb]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Darkened Overlay - Menu*/}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 xl:hidden z-[105] transition-opacity duration-500" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;