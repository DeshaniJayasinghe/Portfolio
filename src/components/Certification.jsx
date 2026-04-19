import React from 'react';
import { motion } from 'framer-motion';

// පින්තූර Import කිරීම (Paths should be correct)
import awsImg from '../assets/certificates/aws.png';
import fortinetSecImg from '../assets/certificates/fortinet-cyberSec.png';
import introCyberImg from '../assets/certificates/introduction-to-cybersecurity.png';
import iotImg from '../assets/certificates/introduction-to-iot.png'; 
import nse1Img from '../assets/certificates/NSE1.png';
import multicloudImg from '../assets/certificates/multicloud-network-associate.png';
import nse2Img from '../assets/certificates/NSE2.png';
import linuxImg from '../assets/certificates/linux-essentials.png';

const CertificateCard = ({ title, issuer, date, delay, badgeImage }) => {
  // ඒ ඒ ආයතනය අනුව SVG Frame එකේ පාට තීරණය කිරීම
  const getFilterColor = (issuer) => {
    switch (issuer.toUpperCase()) {
      case 'AWS': return 'rgba(255, 153, 0, 0.6)'; // AWS Orange
      case 'FORTINET': return 'rgba(0, 161, 222, 0.5)'; // Fortinet Cyan
      case 'CISCO': return 'rgba(11, 129, 36, 0.4)'; // Cisco Green
      case 'AVIATRIX': return 'rgba(255, 77, 0, 0.7)'; // Aviatrix Orange-Red
      default: return 'rgba(94, 23, 235, 0.3)'; // Default Purple
    }
  };

  // Aviatrix වලට Hexagon හැඩය සහ අනෙක් ඒවට සුදුසු හැඩයන් පාවිච්චි කිරීම
  // අපි පාවිච්චි කරන නව ක්‍රමය නිසා (Filter) image එකේ සැබෑ හැඩය frame එකට ගන්නවා.
  const filterId = `glow-${issuer.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
  const filterColor = getFilterColor(issuer);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
    >
      {/* Container with SVG Filter to create the shape-based frame */}
      <div className="relative aspect-square w-36 mx-auto mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        
        {/* SVG Filter Definition for the glow/frame */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow 
                dx="0" dy="0" 
                stdDeviation="6" 
                floodColor={filterColor} 
                className="transition-all duration-500 group-hover:stdDeviation-10"
              />
            </filter>
          </defs>
        </svg>

        {/* The Actual Badge Image with the Filter Applied */}
        <img 
          src={badgeImage} 
          alt={title} 
          style={{ filter: `url(#${filterId})` }} // SVG Filter එක මෙතනින් Apply කරනවා
          className="w-full h-full object-contain p-2 relative z-10" 
        />

        {/* Hover Highlight Overlay */}
        <div className="absolute inset-0 bg-[#5e17eb]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-2xl" />
      </div>

      {/* Info Section */}
      <div className="space-y-4 text-center md:text-left">
        <h3 className="font-extrabold text-gray-950 text-[13px] md:text-sm leading-tight min-h-[42px] flex items-center justify-center md:justify-start">
          {title}
        </h3>
        
        <div className="flex flex-col gap-2">
          <span className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest w-fit mx-auto md:mx-0 border ${issuer === 'AWS' ? 'bg-orange-50 text-orange-600 border-orange-100' : issuer === 'Fortinet' ? 'bg-cyan-50 text-cyan-600 border-cyan-100' : issuer === 'Cisco' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-slate-50 text-slate-600 border-slate-100'}`}>
            {issuer}
          </span>
          <p className="text-gray-400 text-[10px] font-medium border-t border-gray-50 pt-2 italic">
            {date}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Certificate = () => {
  const certs = [
    { title: "AWS Educate Getting Started with Cloud Ops", issuer: "AWS", date: "Issued Apr 4, 2026", img: awsImg },
    { title: "Fortinet Certified Fundamentals Cybersecurity", issuer: "Fortinet", date: "Expires Mar 19, 2028", img: fortinetSecImg },
    { title: "Introduction to Cybersecurity", issuer: "Cisco", date: "Issued Nov 11, 2025", img: introCyberImg },
    { title: "Introduction to IoT", issuer: "Cisco", date: "Issued Nov 14, 2025", img: iotImg },
    { title: "Introduction to the Threat Landscape 3.0", issuer: "Fortinet", date: "Issued Feb 26, 2026", img: nse1Img },
    { title: "Multicloud Network Associate", issuer: "Aviatrix", date: "Expires Sep 19, 2028", img: multicloudImg },
    { title: "Technical Introduction to Cybersecurity 3.0", issuer: "Fortinet", date: "Issued Mar 19, 2026", img: nse2Img },
    { title: "Linux Essentials", issuer: "Cisco", date: "Issued Feb 27, 2026", img: linuxImg },
  ];

  return (
    <section id="certification" className="py-24 px-6 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Certifications & <span className="text-[#5e17eb]">Courses</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#5e17eb] mt-5 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certs.map((cert, index) => (
            <CertificateCard 
              key={index} 
              {...cert}
              badgeImage={cert.img} 
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;