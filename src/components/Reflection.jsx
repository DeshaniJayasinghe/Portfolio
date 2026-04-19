
import React from 'react';
import { motion } from 'framer-motion';

const Reflection = () => {
  const reflections = [
    {
      id: 1,
      title: "Collaborative Growth & Team Dynamics",
      subtitle: "University Group Project Experience",
      content: [
        "Participating in various group projects during my university journey has been a transformative experience. It taught me that effective teamwork is not just about completing a task, but about the synergy created through diverse perspectives.",
        "I learned the importance of respecting and listening to the ideas of others, even when they differed from my own. This practice of active listening and valuing peer input has been crucial for my personal growth. Working alongside others also allowed me to learn new technical tricks and approaches that I wouldn't have discovered on my own.",
        "One major challenge was coordinating different schedules and work styles. To overcome this, we established clear communication channels and role assignments. This experience has made me a better collaborator who understands that collective success is built on mutual respect and shared responsibility."
      ]
    },
    {
      id: 2,
      title: "Articulation & Professionalism",
      subtitle: "Communication and Presentation Skills",
      content: [
        "The opportunities provided through the DELT module to present and engage in academic discussions have significantly refined my professional persona. I learned to structure my thoughts logically and use academic language to express complex technical ideas clearly.",
        "Initially, I faced challenges with nervousness and maintaining fluency during impromptu speaking. However, consistent practice and participating in active classroom discussions helped me manage my anxiety. I developed the ability to think on my feet and respond to questions with confidence.",
        "The constructive feedback from my lecturers was a turning point, helping me identify my strengths and refine my delivery style. Moving forward, I am committed to further enhancing my public speaking skills and using visual aids more effectively to communicate my technical solutions to a wider audience."
      ]
    }
  ];

  return (
    <section id="reflections" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
         <span className="text-[#5e17eb]">Reflections</span>
          </h2>
          
          <div className="h-1 w-20 bg-[#5e17eb] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Reflection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reflections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#5e17eb] text-xs font-bold uppercase tracking-widest mt-2">
                  {item.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-gray-600 text-sm leading-relaxed text-justify">
                {item.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reflection;