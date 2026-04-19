import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Left: Name & Title */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">
              DESHANI <span className="text-[#5e17eb]">JAYASINGHE</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3 tracking-wide">
              Undergraduate | University of Kelaniya
            </p>
          </div>

          {/* Center: Icons with More Spacing */}
          <div className="flex flex-col gap-6 mx-auto md:mx-0">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 text-center md:text-left">Connect</h4>
            <div className="flex gap-12"> {/* gap-12 දැම්මා අයිකන් ඈත් කරන්න */}
              
              {/* Envelope (Mail) Icon */}
              <a href="mailto:jayasin-ct22067@stu.kln.ac.lk" className="text-gray-400 hover:text-[#5e17eb] transition-all transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>

              {/* LinkedIn Icon */}
              <a href="https://linkedin.com/in/deshani-jayasinghe-3a23a3327?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#5e17eb] transition-all transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>

              {/* GitHub Icon */}
              <a href="https://github.com/DeshaniJayasinghe" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#5e17eb] transition-all transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>

            </div>
          </div>

          {/* Right: Back to Top */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <button 
              onClick={scrollToTop}
              className="p-4 bg-gray-50 text-gray-300 hover:bg-[#5e17eb] hover:text-white rounded-full transition-all duration-500 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </button>
          </div>

        </div>

    
        
      </div>
    </footer>
  );
};

export default Footer;