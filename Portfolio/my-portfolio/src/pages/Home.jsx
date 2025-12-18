import '../Styles/Home.css';
import '../Styles/About.css'
import { Link } from 'react-router-dom'; 
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Hero from '../components/Hero.jsx';

export default function Home() {  
  return (
    <div className="home">
       <Hero />
       
       <div className='home-cards'>
        <About />
        <Skills />
       </div>
    </div>
  );
} 