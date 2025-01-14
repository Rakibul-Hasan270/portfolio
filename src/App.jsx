import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import Contact from './components/Contact/Contact';
import SkillsNxt from './components/SkillsNxt/SkillsNxt';
import Education from './components/Education/Education';
import { IoHome } from "react-icons/io5";
import { MdOutlinePerson4 } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { useState } from 'react';

AOS.init();

function App() {
  const [activeButton, setActiveButton] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveButton(id);
  };


  return (
    <div className='max-w-6xl mx-auto p-4'>
      {/* Fixed Navigation Buttons */}
      <div className='flex justify-center'>
        <div className='h-14 w-full mx-auto rounded-full bottom-0 fixed z-50 max-w-lg backdrop-blur-sm border-2 border-pink-800 flex items-center justify-evenly'>
          <button className={`text-2xl ${activeButton === "navbar" ? "text-pink-600" : "text-white"
            }`} onClick={() => scrollToSection('navbar')}>
            <IoHome />
          </button>
          <button className={`text-2xl ${activeButton === "about" ? "text-pink-600" : "text-white"
            }`} onClick={() => scrollToSection('about')}>
            <MdOutlinePerson4 />
          </button>
          <button className={`text-2xl ${activeButton === "skills" ? "text-pink-600" : "text-white"
            }`} onClick={() => scrollToSection('skills')}>
            <SiHyperskill />
          </button>
          <button className={`text-2xl ${activeButton === "projects" ? "text-pink-600" : "text-white"
            }`} onClick={() => scrollToSection('projects')}>
            <IoBagHandleOutline />
          </button>
          <button className={`text-2xl ${activeButton === "education" ? "text-pink-600" : "text-white"
            }`} onClick={() => scrollToSection('education')}>
            <FaUserGraduate />
          </button>
          <button className={`text-2xl ${activeButton === "contact" ? "text-pink-600" : "text-white"
            }`} onClick={() => scrollToSection('contact')}>
            <LuMessageSquareMore />
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex flex-col left-0 fixed z-50 items-center mx-auto top-1/2 transform -translate-y-1/2">
        <div className='flex flex-col'>
          <a href='https://www.linkedin.com/in/rakibul-hasan01/' target="_blank" rel="noopener noreferrer">
            <div className='cursor-pointer flex-1 flex items-center gap-[40px] bg-pink-800 p-2 transform -translate-x-24 duration-500 hover:translate-x-0'>LinkedIn <FaLinkedin className='text-xl' /></div>
          </a>
          <a href='https://github.com/Rakibul-Hasan270' target="_blank" rel="noopener noreferrer">
            <div className='cursor-pointer flex-1 flex items-center gap-[50px] bg-pink-800 p-2 transform -translate-x-24 duration-500 hover:translate-x-0'>Github <FaGithub className='text-xl' /></div>
          </a>
          <a href='https://mail.google.com/mail/u/0/#inbox' target="_blank" rel="noopener noreferrer">
            <div className='cursor-pointer flex-1 flex items-center gap-[60px] bg-pink-800 p-2 transform -translate-x-24 duration-500 hover:translate-x-0'>Email <AiOutlineMail className='text-xl' /></div>
          </a>
          <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
            <div className='cursor-pointer flex-1 flex items-center gap-[31px] bg-pink-800 p-2 transform -translate-x-24 duration-500 hover:translate-x-0'>Facebook <FaFacebook className='text-xl' /></div>
          </a>
        </div>
      </div>


      {/* Sections */}
      <div id="navbar">
        <Navbar />
      </div>
      <div id="banner">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <SkillsNxt />
      </div>
      <div id="projects">
        <ProjectShowcase />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
