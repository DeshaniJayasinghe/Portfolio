import React from 'react';
import { motion } from 'framer-motion';

const EngagementBox = ({ date, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-900 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all mb-8 relative overflow-hidden group"
  >
    {/* Decorative Background Element */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#5e17eb]/5 dark:bg-[#5e17eb]/10 rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>

    {/* Left Side: Date / Goal Type */}
    <div className="md:w-1/3 flex flex-col justify-start z-10">
      <span className="text-[#5e17eb] font-black text-[10px] md:text-xs tracking-[0.2em] uppercase mb-3">
        {date}
      </span>
      <div className="h-1 w-10 bg-[#5e17eb] rounded-full mb-5"></div>
      <h4 className="text-gray-900 dark:text-white font-extrabold text-lg md:text-xl leading-tight">
        {title}
      </h4>
    </div>

    {/* Right Side: Description Content */}
    <div className="md:w-2/3 text-gray-600 dark:text-gray-400 leading-relaxed text-justify text-sm md:text-base border-l-0 md:border-l-2 md:pl-10 border-gray-100 dark:border-gray-800 z-10">
      {description}
    </div>
  </motion.div>
);

const Engagement = () => {
  return (
    <section id="engagement" className="py-24 px-6 bg-[#fcfcfd] dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: Academic Engagement */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Research & <span className="text-[#5e17eb]">Academic Engagement</span>
          </h2>
          <div className="h-1 w-12 bg-[#5e17eb] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="space-y-4">
          <EngagementBox 
            date="November 22, 2024"
            title="Reflecting on the 4th Undergraduate Research Symposium 2024"
            delay={0.1}
            description={
              <div className="space-y-4">
                <p>I had the privilege of attending the 4th Undergraduate Research Symposium (URS) at the Faculty of Computing and Technology (FCT), University of Kelaniya. Organized in conjunction with the <b className="text-gray-900 dark:text-gray-200">9th International Conference on Advances in Technology and Computing (ICATC) 2024</b>, this event served as a premier platform for scholarly research.</p>
                <p> Participating as an observer allowed me to immerse myself in a professional environment dedicated to knowledge exchange. Witnessing research topics from software development to <b className="text-gray-900 dark:text-gray-200">network security</b> significantly broadened my understanding of the technological landscape and sparked a keen interest in pursuing research that addresses real world challenges.</p>
              </div>
            }
          />

          <EngagementBox 
            date="December 3, 2024"
            title="Mastering Version Control: GIT STARTED Workshop"
            delay={0.2}
            description={
              <div className="space-y-4">
                <p>
                  I participated in the <b className="text-gray-900 dark:text-gray-200">"GIT STARTED: MASTER GIT & GITHUB"</b> workshop organized by the <b className="text-gray-900 dark:text-gray-200">FOSS Community</b> of the University of Kelaniya. This hands on experience was designed to bridge the gap between theoretical coding and professional software development practices.
                </p>
                <p>
                  I gained a comprehensive understanding of <b className="text-gray-900 dark:text-gray-200">Version Control Systems (VCS)</b>, mastering essential skills such as managing repositories, tracking changes, and branching workflows. This session emphasized collaborative coding, boosting my confidence in using industry standard tools required for complex projects.
                </p>
              </div>
            }
          />

          <EngagementBox 
            date="March 29, 2025"
            title="Strategic Perspectives in IT: InnoVista 2.1"
            delay={0.3}
            description={
              <div className="space-y-4">
                <p> I attended InnoVista 2.1, an impactful seminar organized by the <b className="text-gray-900 dark:text-gray-200">Information Technology Students' Association (ITSA)</b>. This event explored the non-coding dimensions of the tech industry, providing a profound understanding of <b className="text-gray-900 dark:text-gray-200">Project Management</b> and its critical role in delivering technological solutions.</p>
                <p>Learning about the project lifecycle provided me with a strategic mindset on resource and timeline management. This experience was a turning point, highlighting the importance of <b className="text-gray-900 dark:text-gray-200">leadership, teamwork, and communication</b> in a corporate environment, equipping me to navigate the complexities of the IT industry.</p>
              </div>
            }
          />
        </div>

        {/* SECTION 2: Future Development & Career Goals */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32 mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Career Goals & <span className="text-[#5e17eb]">Future Development</span>
          </h2>
          <div className="h-1 w-12 bg-[#5e17eb] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="space-y-4">
          {/* Short-term Goals */}
          <EngagementBox 
            date="Short-Term"
            title="Academic Excellence & Foundations"
            delay={0.1}
            description={
              <div className="space-y-4">
                <p>My immediate focus is on successfully completing my <b className="text-gray-900 dark:text-gray-200">BICT (Hons) degree</b> with a strong academic record. I aim to secure a specialized internship in <b className="text-gray-900 dark:text-gray-200">Cloud Engineering or Networking</b> to apply my theoretical knowledge to enterprise level infrastructure projects.</p>
              </div>
            }
          />

          {/* Long-term Goals */}
          <EngagementBox 
            date="Long-Term"
            title="Strategic Leadership in Cloud Tech"
            delay={0.2}
            description={
              <div className="space-y-4">
                <p>In the long run, I aspire to become a <b className="text-gray-900 dark:text-gray-200">Solutions Architect</b>, designing resilient and scalable cloud native architectures. I plan to contribute to the tech community by mentoring aspiring students and leading innovative digital transformation initiatives in Sri Lanka.</p>
              </div>
            }
          />

          {/* Skills to be Developed */}
          <EngagementBox 
            date="Growth Roadmap"
            title="Skills & Certifications to be Developed"
            delay={0.3}
            description={
              <div className="flex flex-wrap gap-3 mt-2">
                {["AWS Solutions Architect", "Docker & Kubernetes", "Advanced Python", "Network Security (CompTIA+)", "Project Management"].map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-[#5e17eb]/5 dark:bg-[#5e17eb]/10 text-[#5e17eb] text-[10px] md:text-xs font-bold px-4 py-2 rounded-full border border-[#5e17eb]/10 dark:border-[#5e17eb]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            }
          />
        </div>

      </div>
    </section>
  );
};

export default Engagement;