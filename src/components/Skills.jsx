import React from 'react';
import { motion } from 'framer-motion';

// පින්තූර Import කිරීම (Paths: src/assets/...)
import langImg from '../assets/lang.png';
import toolsImg from '../assets/tools.png';
import officeImg from '../assets/office.jpeg';

const SkillCard = ({ title, skills, imageSrc, imageAlt, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="flex flex-col items-center text-center space-y-6 flex-1 group"
  >
    {/* Diamond Shape Image Container */}
    <div className="relative w-44 h-44 sm:w-52 sm:h-52 group">
      {/* Background Diamond with Glow */}
      <div className="absolute inset-0 bg-[#5e17eb]/10 rounded-[2rem] rotate-45 group-hover:rotate-[50deg] group-hover:bg-[#5e17eb]/20 transition-all duration-500 shadow-xl shadow-[#5e17eb]/5"></div>
      
      {/* Main Image Container */}
      <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-[1.8rem] rotate-45 overflow-hidden border-2 border-[#5e17eb]/10 flex items-center justify-center">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          // -rotate-45 මඟින් පින්තූරය කෙළින් කරනවා. p-6 මඟින් දාර කැපීම වළක්වනවා.
          className="w-full h-full object-contain -rotate-45 scale-90 group-hover:scale-100 transition-transform duration-500 p-6" 
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="space-y-4 pt-4 px-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-[#5e17eb]/40 inline-block pb-1 group-hover:border-[#5e17eb] transition-colors">
        {title}
      </h3>
      <div className="text-sm sm:text-[15px] text-gray-600 dark:text-gray-300 space-y-3 leading-relaxed">
        {skills.map((item, index) => (
          <p key={index}>
            <span className="font-bold text-gray-800 dark:text-gray-100">{item.label}:</span> {item.value}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillsData = [
    {
      title: "Programming & Web Development",
      imageSrc: langImg, // Import කළ පින්තූරය මෙතනට
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
      imageSrc: toolsImg, // Import කළ පින්තූරය මෙතනට
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
      imageSrc: officeImg, // Import කළ පින්තූරය මෙතනට
      imageAlt: "Microsoft Office Suite",
      delay: 0.3,
      skills: [
        { label: "MS Office", value: "Excel (Data reporting), Word (Documentation), PowerPoint (Presentations)" }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-black/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Experience <span className="text-[#5e17eb]">and Skills</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#5e17eb] mt-5 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-10">
          {skillsData.map((category, idx) => (
            <SkillCard key={idx} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;