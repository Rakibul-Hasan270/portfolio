import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Skills from './components/Skills/Skills';
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



AOS.init();

function App() {

  return (
    <div className='max-w-6xl mx-auto p-4'>
      <div className='flex justify-center'>
        <div className='h-14 w-full mx-auto rounded-full bottom-0 fixed z-50 max-w-lg backdrop-blur-sm  border flex items-center justify-evenly'>
          <p className='text-2xl'><IoHome /></p>
          <p className='text-2xl'><MdOutlinePerson4 /></p>
          <p className='text-2xl'><SiHyperskill /></p>
          <p className='text-2xl'><IoBagHandleOutline /></p>
          <p className='text-2xl'><FaUserGraduate /></p>
          <p className='text-2xl'><LuMessageSquareMore /></p>
        </div>
      </div>

      <div className="h-20 w-8 bg-pink-800 left-0 fixed z-50 flex items-center border-4 mx-auto top-1/2 transform -translate-y-1/2">
    
      </div>


      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      {/* <Skills></Skills> */}
      <SkillsNxt></SkillsNxt>
      <ProjectShowcase></ProjectShowcase>
      <Education></Education>
      <Contact></Contact>
    </div>
  )
}

export default App
