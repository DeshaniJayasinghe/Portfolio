import React from 'react';
import { motion } from 'framer-motion';

// පින්තූර Import කිරීම
import itsaImg from '../assets/ITSApng.png'; 
import membershipImg from '../assets/membership.png';

const ActivityCard = ({ title, role, details, skills, imageSrc, imageAlt, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="flex-1 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
  >
    {/* Image Frame */}
    <div className="w-full h-64 bg-gray-50 dark:bg-black/20 overflow-hidden relative flex items-center justify-center p-6">
      <img 
        src={imageSrc} 
        alt={imageAlt}
        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
      />
    </div>

    {/* Content Area */}
    <div className="p-8 space-y-6">
      <h3 className="text-2xl font-bold text-[#5e17eb] tracking-tight">{title}</h3>
      
      {role && (
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#5e17eb]"></div>
          <p className="font-bold text-gray-900 dark:text-gray-100 text-[10px] md:text-xs tracking-widest uppercase">
            Role: <span className="font-medium text-gray-600 dark:text-gray-400 normal-case tracking-normal">{role}</span>
          </p>
        </div>
      )}

      <div className="text-gray-600 dark:text-gray-400 space-y-5 leading-relaxed text-sm">
        {details && (
          <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-2xl border border-gray-100 dark:border-gray-700">
            <p className="font-bold text-gray-800 dark:text-gray-200 mb-2">Contributions:</p>
            <p className="text-gray-600 dark:text-gray-400 font-medium">{details}</p>
          </div>
        )}
        
        {skills && (
          <div className="flex flex-col gap-1">
            <span className="font-bold text-gray-800 dark:text-gray-200">Skills Developed:</span> 
            <span className="text-[#5e17eb] font-semibold">{skills}</span>
          </div>
        )}

        {!details && (
          <div className="space-y-4 pt-2">
            {[
              { label: "FOSS Community", text: "Promoting Free and Open Source Software." },
              { label: "ISACA Student Group", text: "Cybersecurity and IT Governance." },
              { label: "Green Club", text: "Environmental sustainability initiatives." },
              { label: "Legion", text: "Volunteering for university events." }
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#5e17eb]"></div>
                <p className="font-medium">
                  <span className="font-bold text-gray-800 dark:text-gray-100">{item.label}:</span> {item.text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Activities = () => {
  return (
    <section id="activities" className="py-24 px-6 bg-[#fcfcfd] dark:bg-[#0f172a] transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Club Activities & <span className="text-[#5e17eb]">Leadership</span>
          </h2>
          <div className="h-1 w-12 bg-[#5e17eb] mt-4 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* ITSA Card */}
          <ActivityCard 
            title="ITSA"
            role="Technical Team Member (Editorial)"
            details="Engaged in technical article writing, coordinating content for the student community, and collaborating with design teams for university publications."
            skills="Technical writing, communication, and teamwork."
            imageSrc={itsaImg}
            imageAlt="ITSA Activity"
            delay={0.1}
          />

          {/* Professional Societies Card */}
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