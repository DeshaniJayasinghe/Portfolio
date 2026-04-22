import React from 'react';
import { motion } from 'framer-motion';

// පින්තූර Import කිරීම
import awsImg from '../assets/certificates/aws.png';
import fortinetSecImg from '../assets/certificates/fortinet-cyberSec.png';
import introCyberImg from '../assets/certificates/introduction-to-cybersecurity.png';
import iotImg from '../assets/certificates/introduction-to-iot.png'; 
import nse1Img from '../assets/certificates/NSE1.png';
import multicloudImg from '../assets/certificates/multicloud-network-associate.png';
import nse2Img from '../assets/certificates/NSE2.png';
import linuxImg from '../assets/certificates/linux-essentials.png';

const CertificateCard = ({ title, issuer, date, delay, badgeImage }) => {
  const getFilterColor = (issuer) => {
    switch (issuer.toUpperCase()) {
      case 'AWS': return 'rgba(255, 153, 0, 0.6)'; 
      case 'FORTINET': return 'rgba(0, 161, 222, 0.5)'; 
      case 'CISCO': return 'rgba(11, 129, 36, 0.4)'; 
      case 'AVIATRIX': return 'rgba(255, 77, 0, 0.7)'; 
      default: return 'rgba(94, 23, 235, 0.3)'; 
    }
  };

  const filterId = `glow-${issuer.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
  const filterColor = getFilterColor(issuer);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-white dark:bg-gray-900 p-4 md:p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
    >
      {/* Badge Image Section - Size එක පොඩ්ඩක් අඩු කළා */}
      <div className="relative aspect-square w-24 md:w-32 mx-auto mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow 
                dx="0" dy="0" 
                stdDeviation="5" 
                floodColor={filterColor} 
              />
            </filter>
          </defs>
        </svg>

        <img 
          src={badgeImage} 
          alt={title} 
          style={{ filter: `url(#${filterId})` }}
          className="w-full h-full object-contain p-1 relative z-10" 
        />
        <div className="absolute inset-0 bg-[#5e17eb]/5 dark:bg-[#5e17eb]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-xl" />
      </div>

      {/* Info Section */}
      <div className="space-y-3 text-center">
        <h3 className="font-bold text-gray-950 dark:text-gray-100 text-[11px] md:text-sm leading-tight min-h-[32px] flex items-center justify-center">
          {title}
        </h3>
        
        <div className="flex flex-col gap-1.5 items-center">
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-widest border ${
            issuer === 'AWS' ? 'bg-orange-50 dark:bg-orange-950/30 text-orange-600 border-orange-100 dark:border-orange-900/50' : 
            issuer === 'Fortinet' ? 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 border-cyan-100 dark:border-cyan-900/50' : 
            issuer === 'Cisco' ? 'bg-green-50 dark:bg-green-950/30 text-green-600 border-green-100 dark:border-green-900/50' : 
            'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-gray-400 border-slate-100 dark:border-gray-700'
          }`}>
            {issuer}
          </span>
          <p className="text-gray-400 dark:text-gray-500 text-[9px] font-medium border-t border-gray-50 dark:border-gray-800 pt-1 w-full italic">
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
    <section id="certification" className="py-24 px-6 bg-[#fcfcfd] dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            Certifications & <span className="text-[#5e17eb]">Courses</span>
          </h2>
          <div className="h-1 w-12 bg-[#5e17eb] mt-4 rounded-full mx-auto"></div>
        </motion.div>

        {/* Mobile එකේදී grid එක 2-column කළා ලස්සනට පේන්න */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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