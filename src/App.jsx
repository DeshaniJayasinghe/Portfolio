import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Achievements from './components/Achievements';
import Activities from './components/Activities';
import Engagement from './components/FutureEngagement';
import Skills from './components/Skills';
import Reflection from './components/Reflection';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer'; // <--- අලුතින් Import කරා

function App() {
  return (
    <div className="bg-white min-h-screen relative">
      {/* 1. Custom Cursor - මුළු සයිට් එකටම උඩින් පේන්න */}
      <CustomCursor />

      {/* 2. Navigation Bar */}
      <Navbar />

      {/* 3. Main Content Sections */}
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Skills /></section> {/* Navbar එකේ link එකට ගැලපෙන්න Experience ID එක Skills වලට දෙන්න පුළුවන් */}
        <section id="projects"><Projects /></section>
        <section id="certification"><Certification /></section>
        <section id="achievements"><Achievements /></section>
        <section id="activities"><Activities /></section>
        <section id="engagement"><Engagement /></section>
        <section id="reflections"><Reflection /></section>
      </main>

      {/* 4. Footer - සයිට් එකේ අන්තිමට Contact විස්තර සමඟ */}
      <Footer />
    </div>
  );
}

export default App;