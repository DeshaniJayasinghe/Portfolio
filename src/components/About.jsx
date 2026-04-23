import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative bg-[#fcfcfd] dark:bg-[#0f172a] overflow-hidden transition-colors duration-300 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Topic */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            About <span className="text-[#5e17eb]">Me</span>
          </h2>
          <div className="h-1 w-12 bg-[#5e17eb] mt-4 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Background Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#5e17eb] to-cyan-500 rounded-[2.5rem] blur opacity-5 group-hover:opacity-10 transition duration-1000"></div>
          
          {/* Main Card Content */}
          <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 md:p-12 rounded-[2.5rem] shadow-sm transition-all">
            
            <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base text-justify">
              <p>
                I am a second-year Bachelor of Information and Communication Technology (BICT) undergraduate at the Faculty of Computing and Technology (FCT), University of Kelaniya. My academic journey began at St. Joseph's Balika Maha Vidyalaya, Kegalle, where I successfully completed my Ordinary Levels before pursuing the Technology stream for my Advanced Levels. This specialized background ignited my passion for modern computing systems, leading me to my current path.
              </p>
              
              <p>
                Technically, I am deeply interested in Cloud Engineering and Networking, focusing on how cloud-based infrastructures drive digital transformation. My ultimate career goal is to become a Cloud Engineer, mastering the complexities of information systems architecture.
              </p>
              
              {/* Highlighted Quote Box */}
              <div className="p-6 bg-gray-50/50 dark:bg-gray-800/50 rounded-2xl border-l-4 border-[#5e17eb] italic text-gray-700 dark:text-gray-300 shadow-sm">
                As an individual, I pride myself on being a responsible and disciplined learner. I am a strong believer in effective collaboration, always respecting diverse opinions to achieve common goals. Whether working independently or in a team, I ensure every task is completed with precision, integrity, and a professional mindset, contributing positively to any environment I am part of.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;