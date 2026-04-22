import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const projects = [
  {
    id: 1,
    title: "Lanka Land Rent",
    course: "GTEC 13032 - Projects in Technology",
    objective: "The primary objective of this project was to bridge the gap between landowners and entrepreneurs in Sri Lanka by developing a secure, AI-powered digital ecosystem. The platform aims to modernize the traditional land rental process, providing a transparent space for short-term and long-term leases specifically tailored for agriculture, greenhouses, and small-scale commercial ventures. By integrating AI-driven insights and multilingual support, the project focuses on empowering rural development and maximizing the utility of idle land across the country.",
    tools: ["React", "Tailwind", "MySQL", "PHP","HTML5","CSS3","Magic Patterns"],
    description: "Lanka Land Rent is a comprehensive web-based solution designed to solve the inefficiencies of informal land rental systems in Sri Lanka. The platform features verified listings with advanced filtering options and a specialized AI Land Consultant named 'LLR'. This AI component provides users with personalized crop suggestions, Return on Investment (ROI) estimations, and export guidance. To ensure inclusivity across diverse communities, the system supports Sinhala, Tamil, and English. The platform also includes an integrated estimation tool to help renters calculate potential farming or building costs before committing to a lease.",
    role: "As a core member of a five-person team, I played a versatile role that combined technical execution with strategic research. I was actively involved in the frontend development of the platform, ensuring a user-centric and responsive interface. Beyond coding, I contributed to the initial research phase and conducted user feedback sessions to refine the platform’s features. Working within a collaborative group environment, I shared key insights during brainstorming sessions and helped align the technical design with the practical needs of Sri Lankan landowners and entrepreneurs.",
    outcomes: "The project successfully demonstrated a scalable model for digital land utilization, showing the potential to increase landowner income by 12-18% through optimized rentals. By providing a secure and transparent environment, the platform effectively replaces unreliable informal processes with a professional digital standard. The final result is a practical solution that supports Sri Lanka’s digital transformation goals, fosters entrepreneurship, and promotes sustainable agricultural growth by turning unused land into productive assets.",
    github: null,
    liveSite: "https://project-land-rental-platform-with-ai-consultation-370.magicpatterns.app/",
    mainImg: "./project1.jpg"
  },
  {
    id: 2,
    title: "BuildMe.lk",
    course: "GTEC 23032 - Projects in Technology",
    objective: "The objective of this project is to design and develop a smart web platform that helps people in Sri Lanka plan houses and accommodation, get AI-based cost estimates, and connect with engineers, workers, and material suppliers using local construction data and standards.",
    tools: ["Python", "TypeScript", "Node.js", "CSS"],
    description: "BuildMe.lk is a smart web platform designed to help people in Sri Lanka plan houses and accommodation easily. The system allows users to enter land details, budget, and their building ideas to receive basic design guidance and an AI-based cost estimate using local material prices and labour costs. It also helps users find engineers, workers, and material suppliers through one centralized platform. This project combines civil engineering knowledge, ethical construction practices, and modern web technologies to make early-stage house planning simple, clear, and reliable.",
    role: "In this five-member group project, I mainly contributed to the research and requirement analysis parts of BuildMe.lk. I helped to study Sri Lankan construction methods, material prices, and labour costs to understand how the system should work. I supported the team by identifying user requirements, suggesting important features, and helping to plan the estimation logic and design guidance ideas. I also assisted in preparing documentation, proposal writing, and overall system planning.",
    outcomes: "Through this project, I gained experience in requirement analysis, research, and planning a real-world software solution. I understood how to connect civil engineering knowledge with web technology to solve practical problems. The project improved my teamwork, problem-solving, and system design skills while contributing to the development of a smart construction support platform for Sri Lanka.",
    github: "https://github.com/YasiruRavidith/Buidmelk",
    mainImg: "./project2.png"
  },
  {
    id: 3,
    title: "Smart Land Rental Management System",
    course: "CTEC 21063 - Database Systems",
    objective: "The objective of this project was to design and implement a robust relational database to support the 'Lanka Land Rent' platform. Developed during the first semester of my second year, the project focused on creating a structured system to manage user accounts, land property listings, rental agreements, and financial transactions. The goal was to ensure data integrity, security, and efficient retrieval for a complex marketplace involving owners, tenants, and various property specifications.",
    tools: ["PostgreSQL"],
    description: "This system manages the end to end lifecycle of land rentals between registered users. The database architecture supports distinct user roles,Owners and Tenantsa llowing for detailed property registration including geographic data, land types, and infrastructure facilities like water and electricity access. It handles the creation of multiple rental offers per property, tracks rental agreements, and records payment histories including dates and methods. Furthermore, the system incorporates a review and rating module and a document storage structure for legal contracts and identification files.",
    role: "Working within a four-member group, I was responsible for the core structural design and implementation of key database components. I took full ownership of designing and coding three major SQL tables, including the creation of their comprehensive Data Dictionaries to define constraints and data types. Additionally, I developed the Relational Schema and collaborated closely with the team on the Entity Relationship (ER) Diagram to ensure the logical flow of data across the entire management system.",
    outcomes: "The project resulted in a fully normalized relational database capable of handling concurrent transactions between owners and tenants. By developing a clean relational schema and detailed documentation, I helped ensure the system was scalable and free of data redundancy. This project successfully demonstrated the transition from a frontend concept to a functional, data-driven backend solution, providing a solid foundation for secure digital land rental management.",
    github: "https://github.com/DeshaniJayasinghe/Smart_Land_Rental_Management_System",
    mainImg: "./project3.jpg"
  },
  {
    id: 4,
    title: "Multi Client Reverse Shell Project",
    course: "CTEC 12052 - Data Communication and Networking",
    objective: "The objective was to design and develop a networked application capable of handling concurrent communication. By extending a basic single-client connection, the project aimed to implement a multi-threaded server that could manage multiple active clients simultaneously without blocking, simulating a real-world remote management or messaging system.",
    tools: ["Python", "Oracle VM VirtualBox", "Ubuntu Server", "PuTTY"],
    description: "This project involved building a 'Reverse Shell' style architecture using Python. I developed a server-side script that listens on a specific port and a client-side script for connection. To solve the problem of single-connection bottlenecks, I integrated Python’s threading library, allowing the server to spawn a unique thread for every new client connection. The system was tested in a complex virtual environment where an Ubuntu Server managed multiple client VMs, successfully tracking each client’s unique IP and Port while facilitating real-time data transmission.",
    role: "This was an individual assignment where I was responsible for the full software development lifecycle. I wrote the Python scripts for both the server and the client from scratch, specifically focusing on the socket bind/listen logic and the threading implementation. I also configured the virtualized network environment, setting up the Linux server and multiple client nodes in VirtualBox to verify that the concurrency logic worked under real network conditions.",
    outcomes: "The project resulted in a robust, multi-client communication system. It successfully demonstrated my ability to handle low-level network protocols and asynchronous programming. Key outcomes included the successful concurrent management of 2+ clients and the implementation of automated client tracking. This project provided practical experience in how modern servers (like web or chat servers) manage thousands of simultaneous users.",
    github: "https://github.com/DeshaniJayasinghe/Multi-Client-Reverse-Shell-Project", 
    mainImg: "./project4.png"
  },
  {
    id: 5,
    title: "Network Desing and Implementation",
    course: "CTEC 12052 - Data Communication and Networking",
    objective: "The primary objective was to design and implement a secure, scalable, and redundant network infrastructure for 'ABC Productions,' a leading advertising firm in Sri Lanka. The project aimed to provide seamless connectivity for over 100 endpoints across a four-story facility while ensuring departmental isolation, high availability, and protection against unauthorized external access.",
    tools: ["Cisco Packet Tracer","VLSM","CLI Configuration"],
    description: "This project involved the complete architectural design for a multi-story corporate environment housing IT, Finance, HR, and Production departments. The solution utilized a Hierarchical Network Model to manage traffic efficiently. Key technical implementations included a Variable Length Subnet Mask (VLSM) strategy to maximize IP address efficiency and the configuration of Hot Standby Router Protocol (HSRP) to ensure 99.9% network uptime. Security was integrated through hardware firewalls and specific ACL rules to restrict inter-departmental data flow, alongside a VPN setup for secure remote employee access.",
    role: "As this was an individual project, I was responsible for the entire lifecycle of the network implementation. This included analyzing host requirements for each floor, designing the logical topology, performing manual VLSM calculations for five subnets, and executing the full device configuration via the Cisco CLI. I also conducted end-to-end connectivity testing using ICMP tools and documented the technical justifications for every hardware and cabling choice made (Fiber vs. Copper).",
    outcomes: "The project resulted in a fully functional, simulated network environment that met all business requirements for ABC Productions. I achieved a 93% IP address utilization efficiency through precise subnetting. The implementation of HSRP and RSTP successfully eliminated single points of failure, ensuring that the network remains operational even during hardware malfunctions. The final deliverable was a comprehensive technical report and a verified .pkt simulation file, demonstrating a professional-grade understanding of enterprise networking.",
    github: "https://github.com/DeshaniJayasinghe/Network-Design-and-Implementation",
    mainImg: "./project5.jpg"
  },
  {
    id: 6,
    title: "Penetration Testing",
    course: "CTEC 21052 - Introduction to Cybersecurity",
    objective: "The objective was to perform a structured penetration test on a vulnerable target to identify security flaws, demonstrate successful exploitation, and perform post-exploitation activities. The project specifically focused on the BlueKeep (CVE-2019-0708) vulnerability to understand the risks of unpatched Remote Desktop Services (RDS).",
    tools: ["Kali Linux", "Windows7", "Nmap", "msfconsole","Metasploit Framework"],
    description: "This demonstration involved a multi-stage attack starting with an active scan using Nmap to identify open ports and services on the target Windows system. After identifying that the Remote Desktop Protocol (RDP) was active, I used the Metasploit Framework to search for and configure the BlueKeep exploit. The process included setting local and remote hosts, selecting specific targets, and launching the payload to achieve a Meterpreter session, providing full command-line access to the victim's machine.",
    role: "This was an individual assignment where I acted as the lead penetration tester. I configured the virtual lab environment, performed the initial connectivity checks (ping/nmap), and manually executed the exploit through the Metasploit CLI. I also performed critical post-exploitation tasks, such as using sysinfo to extract system details, getuid to check user privileges, and screenshare to monitor the target’s desktop in real-time.",
    outcomes: "The project successfully demonstrated a complete 'Remote Code Execution' (RCE) attack. By gaining full control over the target system, I illustrated the critical importance of regular security patching and disabling unnecessary services like RDP. The final output was a detailed presentation and technical evidence showing every step from initial scanning to total system compromise, confirming the efficacy of the chosen exploit.",
    github: "https://github.com/DeshaniJayasinghe/Penetration-Testing",
    mainImg: "./project6.jpg"
  },
  {
    id: 7,
    title: "Passive Recon Tools",
    course: "CTEC 21052 - Introduction to Cybersecurity",
    objective: "The objective of this mini-assessment was to demonstrate proficiency in 'Passive Reconnaissance',the art of gathering information about a target without directly interacting with its systems. The goal was to set up a secure virtualized environment and use industry-standard OSINT (Open Source Intelligence) tools to identify potential entry points, leaked data, and infrastructure details of a target.",
    tools: ["Kali Linux","Oracle VM VirtualBox","Google Hacking", "Wayback Machine", "Netcraft", "Shodan","The Harvester"],
    description: "This project involved the complete setup of a penetration testing environment using a Kali Linux virtual machine. Once the environment was optimized, I conducted a series of passive scans. I used Google Dorks to find sensitive directories and login pages, the Wayback Machine to uncover historical data and deleted pages, and Shodan to identify internet-connected devices and open ports. Finally, I utilized theHarvester via the Kali terminal to aggregate emails, subdomains, and hostnames from multiple public data sources.",
    role: "As an individual mini-assessment, I performed all technical tasks. This included the installation and configuration of the VirtualBox manager, importing and setting up the Kali Linux ISO, and executing the reconnaissance phase. I was responsible for selecting the targets, running the terminal commands for theHarvester, and analyzing the raw data to find 'interesting' security findings.",
    outcomes: "The project resulted in a comprehensive security report detailing the digital footprint of the selected targets. I successfully demonstrated how an attacker can gather high-value intelligence (such as server versions, employee emails, and subdomains) completely undetected by the target's security systems. This project laid the groundwork for understanding the 'Reconnaissance' phase of the Cyber Attack Lifecycle (Kill Chain).",
    github: "https://github.com/DeshaniJayasinghe/Passive-Recon-Tools",
    mainImg: "./project7.jpg"
  },
  {
    id: 8,
    title: "LAN Implementation and Explansion",
    course: "CTEC 22061 - System and Network Laboratory",
    objective: "The objective of this project was to design, configure, and expand a Local Area Network (LAN). The project focused on building a foundational wired network and then scaling it into a hybrid environment by integrating wireless connectivity, Internet of Things (IoT) devices, and Voice over IP (VoIP) technology.",
    tools: ["Cisco Packet Tracer", "Wired LAN", "Wireless Router Configuration", "IoT Monitor","VoIP Device Configuration"],
    description: "This project was conducted in two primary phases within a simulated environment. The first phase involved establishing a functional Wired LAN by connecting multiple PCs via a switch and configuring static IP addressing and MAC address tables. The second phase involved a major expansion where a Home Wireless Router was integrated to provide Wi-Fi connectivity (SSID: HomeNetwork_1). The network was further enhanced by adding smart IoT devices like fans and lights, which were managed through a central Registration Server and a mobile-based IoT monitor. Finally, the project incorporated VoIP technology to demonstrate integrated voice communication over the data network.",
    role: "As an individual project, I took full responsibility for the end-to-end simulation and configuration. I manually performed the initial switch and PC setups, handled the wireless GUI configuration for the home router, and set up the DHCP server to automate IP distribution for wireless nodes and smartphones. I also independently explored and implemented the VoIP setup and IoT registration, ensuring all components communicated seamlessly across the unified network topology.",
    outcomes: "The project resulted in a scalable and versatile hybrid network model. I successfully demonstrated the ability to bridge wired and wireless segments and gained practical experience in managing smart devices through an IoT server. A key outcome was the mastery of wireless connectivity protocols and the successful implementation of VoIP, proving the network's capability to handle diverse types of data and communication services within a single infrastructure.",
    github: "https://github.com/DeshaniJayasinghe/LAN-Implementation-and-Expansion",
    mainImg: "./project8.jpg"
  },
  {
    id: 9,
    title: "E portfolio",
    course: "DELT22552 - English for Technology",
    objective: "To design and develop a high-performance, responsive digital portfolio from scratch using modern web technologies, moving away from low-code platforms to demonstrate core programming and system architecture skills.",
    tools: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js"],
    description: "Instead of using conventional site builders, I built this portfolio using Vite and React to ensure maximum speed and customization. The project involved creating a component-based architecture, implementing smooth animations with Framer Motion, and managing complex data states for an expandable project gallery.",
    role: "Sole Developer - Responsible for the entire lifecycle, including UI/UX design, frontend development, asset management, and deployment logic. I focused heavily on creating a reusable 'Expandable Card' component to handle detailed project documentation.",
    outcomes: "Successfully mastered Vite-based development and the React ecosystem. I gained significant experience in Error Handling during the development phase (Syntax & Logic), responsive design principles, and learned how to optimize web assets for faster loading times.",
    github: "https://github.com/DeshaniJayasinghe/Portfolio",
    mainImg: "./project9.png"
  },
  // ADD MORE PROJECTS...
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-[#0f172a] transition-colors duration-300 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Topic Section with Purple Line */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight font-sans">
            Academic <span className="text-[#5e17eb]">Projects</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#5e17eb] mt-5 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.id} className="border border-gray-100 dark:border-gray-800 rounded-[2.5rem] bg-[#fcfcfd] dark:bg-[#1e293b]/50 overflow-hidden shadow-sm hover:shadow-md transition-all">
              
              {/* --- Card Header (Closed View) --- */}
              <div 
                className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
              >
                <img src={p.mainImg} alt={p.title} className="w-24 h-24 rounded-3xl object-cover shadow-sm border border-gray-100 dark:border-gray-700" />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{p.title}</h3>
                  <p className="text-[#5e17eb] font-bold text-xs uppercase tracking-widest mt-2">{p.course}</p>
                </div>
                <button className="px-6 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest hover:border-[#5e17eb] hover:text-[#5e17eb] transition-all shadow-sm">
                  {expandedId === p.id ? "Close Details" : "View Project Details"}
                </button>
              </div>

              {/* --- Card Body (Expanded View) --- */}
              <AnimatePresence>
                {expandedId === p.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 border-t border-gray-50 dark:border-gray-800/50 space-y-8 mt-4">
                      
                      {/* Grid Layout for details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-5">
                          <div>
                            <h4 className="text-[10px] font-bold text-[#5e17eb] uppercase tracking-[0.2em] mb-2">Objective</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium">{p.objective}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-[10px] font-bold text-[#5e17eb] uppercase tracking-[0.2em] mb-2">Description</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed italic font-medium">{p.description}</p>
                          </div>
                        </div>

                        <div className="space-y-5">
                          <div>
                            <h4 className="text-[10px] font-bold text-[#5e17eb] uppercase tracking-[0.2em] mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {p.tools.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-[10px] font-bold uppercase shadow-sm">{t}</span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-[10px] font-bold text-[#5e17eb] uppercase tracking-[0.2em] mb-2">My Role & Outcomes</h4>
                            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2 list-none">
                              <li className="flex gap-2">
                                <span className="text-[#5e17eb] font-bold">•</span>
                                <span><b className="text-gray-800 dark:text-gray-100 font-bold">Role:</b> {p.role}</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-[#5e17eb] font-bold">•</span>
                                <span><b className="text-gray-800 dark:text-gray-100 font-bold">Outcome:</b> {p.outcomes}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 mt-6">
                        {p.github && (
                          <a 
                            href={p.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-[#5e17eb] text-white rounded-2xl text-[10px] font-bold hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all shadow-lg shadow-[#5e17eb]/20 uppercase tracking-widest"
                          >
                            Github Repository
                          </a>
                        )}

                        {p.liveSite && (
                          <a 
                            href={p.liveSite} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-black dark:bg-white dark:text-black text-white rounded-2xl text-[10px] font-bold hover:bg-[#5e17eb] dark:hover:bg-[#5e17eb] dark:hover:text-white transition-all shadow-lg shadow-black/10 uppercase tracking-widest"
                          >
                            View Live Site
                          </a>
                        )}
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;