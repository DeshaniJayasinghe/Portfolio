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
import Footer from './components/Footer';

function App() {
  return (
    // bg-white එකට dark:bg-[#0f172a] එකතු කළා. එවිට white bar ප්‍රශ්නය විසඳෙනවා.
    <div className="bg-white dark:bg-[#0f172a] min-h-screen relative transition-colors duration-300">
      
      {/* 1. Custom Cursor */}
      <CustomCursor />

      {/* 2. Navigation Bar */}
      <Navbar />

      {/* 3. Main Content Sections */}
      <main>
        {/* හැම section එකකටම dark:bg-[#0f172a] class එක තියෙනවා නේද කියලා ඒ ඒ component ඇතුළෙදිත් බලන්න */}
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="certification"><Certification /></section>
        <section id="achievements"><Achievements /></section>
        <section id="activities"><Activities /></section>
        <section id="engagement"><Engagement /></section>
        <section id="reflections"><Reflection /></section>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

export default App;