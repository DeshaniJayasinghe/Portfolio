import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Deshani.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 px-6 bg-[#fcfcfd] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">
        
        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#5e17eb]/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* --- Right Side (Photo & Credentials) --- */}
        {/* Mobile එකේදී 'order-first' මගින් මෙය මුලට ගෙන එයි */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full flex flex-col items-center justify-center relative order-first md:order-last"
        >
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#5e17eb] to-[#9d6eff] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-white shadow-2xl z-10">
              <img 
                src={profileImg} 
                alt="Nimasha Deshani" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Academic Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-[340px] mt-8 md:mt-12 z-20"
          >
            <div className="bg-white p-7 rounded-[2rem] shadow-2xl shadow-gray-200/80 border border-gray-50">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
                <div className="w-2 h-2 rounded-full bg-[#5e17eb]"></div>
                <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Academic Credentials</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Student No</span>
                  <span className="text-sm font-bold text-gray-800 tracking-wide">CT/2022/067</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Program</span>
                  <span className="text-sm font-bold text-gray-800">BICT (Hons)</span>
                </div>
                <div className="flex justify-between items-start text-right">
                  <span className="text-[10px] font-bold text-gray-400 uppercase mt-1">Institution</span>
                  <span className="text-sm font-bold text-gray-800 max-w-[180px]">University of Kelaniya</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Left Side (Name & Bio) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-[1.2] space-y-8 z-10"
        >
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Nimasha<span className="text-[#5e17eb]"> Deshani</span> <br /> Jayasinghe
            </h1>
            <h2 className="text-[#5e17eb] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs border-l-4 border-[#5e17eb] pl-4 inline-block">
              Exploring the Architecture of Networks and Information Systems
            </h2>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/30">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
              I am a dedicated BICT undergraduate at the University of Kelaniya, passionate about <b>Networking and Cloud Computing</b>. I focus on building secure, scalable infrastructures and staying ahead of modern digital transformations.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              {["Cloud Engineering", "Networking", "Network Security"].map(tag => (
                <span key={tag} className="text-[10px] font-black text-[#5e17eb] border-2 border-[#5e17eb] px-5 py-2 rounded-full uppercase tracking-widest bg-[#5e17eb]/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;