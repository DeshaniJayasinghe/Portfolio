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
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <div className="flex-shrink-0 font-black text-gray-900 text-lg tracking-tighter uppercase">
            DESHANI<span className="text-[#5e17eb]">JAYASINGHE</span>
          </div>

          <div className="hidden xl:flex space-x-6 items-center">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-all duration-300 font-bold text-[14px] uppercase tracking-wider whitespace-nowrap ${
                    isActive ? 'text-[#5e17eb] scale-110' : 'text-gray-500 hover:text-[#5e17eb]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="xl:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#5e17eb] px-4 py-2 font-black text-xs border-2 border-[#5e17eb] rounded-full hover:bg-[#5e17eb] hover:text-white transition-all"
            >
              {isOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed inset-y-0 right-0 w-72 bg-white shadow-2xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out xl:hidden z-[60]`}>
        <div className="p-8 flex flex-col space-y-6 pt-24">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-bold border-b border-gray-50 pb-3 transition-colors uppercase tracking-widest ${
                  isActive ? 'text-[#5e17eb] pl-2' : 'text-gray-700'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm xl:hidden" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;