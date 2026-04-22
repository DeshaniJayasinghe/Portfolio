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
    className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/5 p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl"
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
      {/* Title එකේ Font එක විතරක් තදට තිබ්බා, හැබැයි Uppercase අයින් කළා */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
        {title}
      </h3>
      
      <div className="space-y-4">
        {skills.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Label එක Capital අයින් කරලා bold කළා */}
            <span className="text-sm font-bold text-[#5e17eb] mb-1">
              {item.label}
            </span>
            {/* Value එක Normal font weight එකට ගත්තා කියවන්න ලේසි වෙන්න */}
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
    <section id="experience" className="py-24 px-6 bg-[#fcfcfd] dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* Main Title එකත් පිළිවෙළ කළා */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Experience <span className="text-[#5e17eb]">& Skills</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#5e17eb] mt-5 rounded-full mx-auto"></div>
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