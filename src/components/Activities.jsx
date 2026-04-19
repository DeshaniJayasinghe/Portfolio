import React from 'react';
import { motion } from 'framer-motion';

// පින්තූර Import කිරීම - filenames ඔයාගේ sidebar එකේ තියෙන විදිහටම මම මෙතන දැම්මා
import itsaImg from '../assets/ITSApng.png'; 
import membershipImg from '../assets/membership.png';

const ActivityCard = ({ title, role, details, skills, imageSrc, imageAlt, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="flex-1 bg-white/40 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
  >
    {/* Image Frame */}
    <div className="w-full h-64 bg-gray-100 overflow-hidden relative">
      <img 
        src={imageSrc} 
        alt={imageAlt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
        <span className="text-white font-bold tracking-wider text-lg uppercase">{title}</span>
      </div>
    </div>

    {/* Content Area */}
    <div className="p-8 space-y-5">
      <h3 className="text-2xl font-bold text-[#5e17eb] tracking-tight">{title}</h3>
      
      {role && (
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#5e17eb]"></div>
          <p className="font-bold text-gray-900 dark:text-gray-100 text-sm uppercase tracking-widest">
            Role: <span className="font-medium text-gray-600">{role}</span>
          </p>
        </div>
      )}

      <div className="text-gray-600 dark:text-gray-300 space-y-5 leading-relaxed text-sm md:text-base">
        {details && (
          <div className="bg-white/50 p-4 rounded-2xl border border-gray-100">
            <p className="font-bold text-gray-800 dark:text-gray-200 mb-1">Contributions:</p>
            <p className="text-justify">{details}</p>
          </div>
        )}
        
        {skills && (
          <p className="flex flex-wrap gap-2">
            <span className="font-bold text-gray-800 dark:text-gray-200">Skills Developed:</span> 
            <span className="italic text-[#5e17eb]">{skills}</span>
          </p>
        )}

        {!details && (
          <div className="space-y-4 pt-2">
            <div className="flex gap-3">
              <span className="text-[#5e17eb] font-black">#</span>
              <p><span className="font-bold text-gray-800">FOSS Community:</span> Promoting Free and Open Source Software.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#5e17eb] font-black">#</span>
              <p><span className="font-bold text-gray-800">ISACA Student Group:</span> Cybersecurity and IT Governance.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#5e17eb] font-black">#</span>
              <p><span className="font-bold text-gray-800">Green Club:</span> Environmental sustainability initiatives.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#5e17eb] font-black">#</span>
              <p><span className="font-bold text-gray-800">Legion:</span> Volunteering for university events.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Activities = () => {
  return (
    <section id="activities" className="py-24 px-6 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Club Activities & <span className="text-[#5e17eb]">Leadership</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#5e17eb] mt-5 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Activity 1: ITSA */}
          <ActivityCard 
            title="ITSA"
            role="Technical Team Member (Editorial)"
            details="Engaged in technical article writing, coordinating content for the student community, and collaborating with design teams for university publications."
            skills="Technical writing, communication, and teamwork."
            imageSrc={itsaImg}
            imageAlt="ITSA Activity"
            delay={0.1}
          />

          {/* Activity 2: Professional Societies */}
          <ActivityCard 
            title="Professional Societies"
            imageSrc={membershipImg}
            imageAlt="Professional Societies Membership"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Activities;