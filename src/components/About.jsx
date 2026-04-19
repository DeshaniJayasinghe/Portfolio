import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Topic */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 ml-4"
        >
          About <span className="text-[#5e17eb]">Me</span>
        </motion.h2>

        {/* The Glass Container like FOSS UoK */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Background Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#5e17eb] to-cyan-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          
          {/* Main Card Content */}
          <div className="relative bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-justify">
              <p>
                I am a second-year Bachelor of Information and Communication Technology (BICT) undergraduate at the Faculty of Computing and Technology (FCT), University of Kelaniya. My academic journey began at St. Joseph's Balika Maha Vidyalaya, Kegalle, where I successfully completed my Ordinary Levels before pursuing the Technology stream for my Advanced Levels. This specialized background ignited my passion for modern computing systems, leading me to my current path.
              </p>
              <p>
                Technically, I am deeply interested in Cloud Engineering and Networking, focusing on how cloud-based infrastructures drive digital transformation. My ultimate career goal is to become a Cloud Engineer, mastering the complexities of information systems architecture.
              </p>
              <p>
                As an individual, I pride myself on being a responsible and disciplined learner. I am a strong believer in effective collaboration, always respecting diverse opinions to achieve common goals. Whether working independently or in a team, I ensure every task is completed with precision, integrity, and a professional mindset, contributing positively to any environment I am part of.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;