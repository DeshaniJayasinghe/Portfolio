import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Deshani.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 px-6 bg-[#fcfcfd] dark:bg-[#0f172a] font-sans overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">
        
        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#5e17eb]/5 dark:bg-[#5e17eb]/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Name & Tagline (Mobile View) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:hidden text-center mb-4"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Deshani<span className="text-[#5e17eb]">Jayasinghe</span> <br />
          </h1>
          <h2 className="text-[#5e17eb] font-bold tracking-[0.1em] uppercase text-[10px] mt-4 border-l-4 border-[#5e17eb] pl-4 inline-block">
            Exploring the Architecture of Networks and Information Systems
          </h2>
        </motion.div>

        {/* Image & Academic Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full flex flex-col items-center justify-center relative order-2 md:order-last"
        >
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#5e17eb] to-[#9d6eff] rounded-full blur opacity-20 dark:opacity-40 group-hover:opacity-50 transition duration-500"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-white dark:border-gray-800 shadow-2xl z-10">
              <img 
                src={profileImg} 
                alt="Nimasha Deshani" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Academic Card (Updated & Beautified) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-[360px] mt-8 md:mt-12 z-20"
          >
            <div className="bg-white dark:bg-[#1e293b] p-7 rounded-[2.5rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-50 dark:border-gray-800/50 pb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5e17eb] animate-pulse"></div>
                <h3 className="text-gray-400 dark:text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">Academic Credentials</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center group">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">Student No</span>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200 tracking-wide bg-gray-50 dark:bg-gray-800/50 px-3 py-1 rounded-full">CT/2022/067</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">Program</span>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200">BICT (Hons)</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mt-1">Faculty</span>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200 text-right">Faculty of Computing and Technology</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mt-1">Institution</span>
                  <span className="text-xs font-bold text-gray-800 dark:text-gray-200 text-right">University of Kelaniya</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Description & Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-[1.2] space-y-8 z-10 order-3 md:order-first"
        >
          {/* Desktop Only Name Section */}
          <div className="hidden md:block space-y-4 text-left">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
              Nimasha<span className="text-[#5e17eb]"> Deshani</span> <br /> Jayasinghe
            </h1>
            <h2 className="text-[#5e17eb] font-bold tracking-[0.2em] uppercase text-xs border-l-4 border-[#5e17eb] pl-4 inline-block">
              Exploring the Architecture of Networks and Information Systems
            </h2>
          </div>

          {/* Bio Box with Paragraph Spacing */}
          <div className="bg-white dark:bg-gray-900/50 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/30 dark:shadow-none space-y-6">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base text-justify font-medium">
              I am an aspiring Cloud Engineer and ICT undergraduate with a solid foundation in technology and a drive for architecting scalable digital solutions. With a background rooted in the Technology stream and a growing expertise in cloud-based infrastructures and networking, I bridge the gap between technical complexity and efficient system design.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base text-justify font-medium">
              I am passionate about how cloud innovation fuels global transformation and am dedicated to mastering the intricacies of modern information systems. Driven by a disciplined approach to learning and a collaborative spirit, I aim to contribute to high-impact projects while evolving into a specialist in cloud architecture.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;