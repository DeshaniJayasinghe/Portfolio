import React from 'react';
import { motion } from 'framer-motion';

// Image එක import කරගන්නා ආකාරය
import cricketImg from '../assets/Women\'s cricket.jpg';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-white dark:bg-[#0f172a] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Topic - Fixed size and normal case as requested earlier */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Achievements & <span className="text-[#5e17eb]">Extracurricular Activities</span>
          </h2>
          <div className="h-1 w-12 bg-[#5e17eb] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Styled Information Box */}
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-[#fcfcfd] dark:bg-gray-900 p-8 md:p-14 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden transition-all">
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#5e17eb]/5 dark:bg-[#5e17eb]/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Left Side: Certificate Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[340px] aspect-[3/4] group">
              <div className="absolute inset-0 bg-[#5e17eb]/10 dark:bg-[#5e17eb]/20 rounded-2xl rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
              
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-[#5e17eb]/20 dark:border-gray-700 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img 
                  src={cricketImg} 
                  alt="Women's Cricket Championship Certificate" 
                  className="w-full h-full object-contain p-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5e17eb]/5 dark:from-[#5e17eb]/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-[1.4] space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-[#5e17eb]/10 dark:bg-[#5e17eb]/20 text-[#5e17eb] rounded-full text-[10px] font-bold tracking-widest uppercase mb-2">
              Sports Achievement
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Women’s Cricket <br className="hidden md:block" /> Championship 2025
            </h3>

            <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-sm md:text-base">
              <p>
                I am incredibly proud to have been a key member of the team that secured the <b className="text-gray-900 dark:text-gray-200 font-bold">Runner-up</b> position at the Women’s Cricket Championship 2025, organized by the Department of Physical Education at the University of Kelaniya. This tournament was a milestone event, specifically designed as a platform for us to showcase our skills and to identify talent for the university's first-ever official Women’s Cricket pool.
              </p>
              
              <p>
                Playing as a <b className="text-gray-900 dark:text-gray-200 font-bold">bowler</b>, I focused on maintaining a disciplined line and length to support our team’s defensive strategy during critical moments. However, this experience was about much more than individual performance; it was a masterclass in teamwork and strategic coordination. We worked closely together to plan field placements and tactics under intense pressure, which was instrumental in our journey to the finals.
              </p>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border-l-4 border-[#5e17eb] shadow-sm italic text-gray-700 dark:text-gray-300">
                Following the success of the tournament, I was selected as a member of the <b className="text-[#5e17eb] font-bold">very first official Women’s Cricket team of the University of Kelaniya</b>. Being part of this founding squad is a moment of immense pride for me, as it represents the beginning of a new sports culture at our university.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;