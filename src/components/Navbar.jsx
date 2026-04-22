import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience and skills', href: '#experience' },
    { name: 'Activities', href: '#activities' },
    { name: 'Academic Engagement', href: '#engagement' },
    { name: 'Certification', href: '#certification' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Reflection', href: '#reflections' },
  ];

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

  return (
    <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300 font-sans">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section - Clean Font */}
          <div className="flex-shrink-0 font-bold text-gray-900 text-lg tracking-tight uppercase">
            DESHANI<span className="text-[#5e17eb]">JAYASINGHE</span>
          </div>

          {/* Desktop Menu - Consistent Font Weight */}
          <div className="hidden xl:flex space-x-6 items-center">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-all duration-300 font-bold text-[13px] uppercase tracking-widest whitespace-nowrap ${
                    isActive ? 'text-[#5e17eb] scale-105' : 'text-gray-500 hover:text-[#5e17eb]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button - Styled font */}
          <div className="xl:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="relative z-[120] text-[#5e17eb] px-5 py-2 font-bold text-[10px] border-2 border-[#5e17eb] rounded-full hover:bg-[#5e17eb] hover:text-white transition-all shadow-lg shadow-[#5e17eb]/10 tracking-[0.1em]"
            >
              {isOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </div>

      {/* Side Menu Drawer - Consistent Font */}
      <div 
        className={`fixed inset-y-0 right-0 w-[280px] bg-white/60 backdrop-blur-2xl border-l border-white/30 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out xl:hidden z-[110] flex flex-col`}
      >
        <div className="flex flex-col h-full pt-28 pb-10 px-10 overflow-y-auto">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-5 text-[12px] font-bold border-b border-gray-100 transition-all duration-300 uppercase tracking-[0.2em] ${
                  isActive ? 'text-[#5e17eb] translate-x-3' : 'text-gray-800 hover:text-[#5e17eb]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
      
      {/* Darker Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] xl:hidden z-[105]" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;