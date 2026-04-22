import React from 'react';
import { motion } from 'framer-motion';

// පින්තූර Import කිරීම
import langImg from '../assets/lang.png';
import toolsImg from '../assets/tools.png';
import officeImg from '../assets/office.jpeg';

const SkillCard = ({ title, skills, imageSrc, imageAlt, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
  >
    {/* Clean Image Container */}
    <div className="mb-6 flex justify-center items-center">
      <img 
        src={imageSrc} 
        alt={imageAlt}
        className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    </div>

    {/* Text Content */}
    <div className="w-full">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
        {title}
      </h3>
      
      <div className="space-y-4">
        {skills.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-sm font-bold text-[#5e17eb] mb-1">
              {item.label}
            </span>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-[260px]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillsData = [
    {
      title: "Programming & Web Development",
      imageSrc: langImg,
      imageAlt: "Programming Languages",
      delay: 0.1,
      skills: [
        { label: "Languages", value: "Python (Data handling & automation), C (System programming), Java" },
        { label: "Web Technologies", value: "HTML5, CSS3, PHP (Server-side scripting)" },
        { label: "Databases", value: "MySQL, PostgreSQL (Management & Design)" }
      ]
    },
    {
      title: "Tools & Technologies",
      imageSrc: toolsImg,
      imageAlt: "Networking and Cloud Tools",
      delay: 0.2,
      skills: [
        { label: "Networking", value: "Cisco Packet Tracer (Simulation & Config)" },
        { label: "Cloud Computing", value: "AWS, Google Cloud, Azure (Foundational)" },
        { label: "Version Control", value: "Git / GitHub" },
        { label: "Design", value: "Canva (Graphic design & branding)" }
      ]
    },
    {
      title: "Software Suite (Productivity)",
      imageSrc: officeImg,
      imageAlt: "Microsoft Office Suite",
      delay: 0.3,
      skills: [
        { label: "MS Office", value: "Excel (Data reporting), Word (Documentation), PowerPoint (Presentations)" }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#fcfcfd] dark:bg-[#0f172a] transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Experience <span className="text-[#5e17eb]">& Skills</span>
          </h2>
          <div className="h-1 w-12 bg-[#5e17eb] mt-4 rounded-full mx-auto"></div>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {skillsData.map((category, idx) => (
            <SkillCard key={idx} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;