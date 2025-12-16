import '../Styles/Home.css';
import { Link } from 'react-router-dom';
export default function Home() { 
  return (
    <div className="home">
      {/* hero section  */}
      <section className="hero">
        <h1>Hi, I'm Mahesh 👋</h1>
        <h2>Software Developer | Java | React | Spring Boot </h2>
        <p>I build clean and scalable applications</p>

       <div className="buttons">
        <Link to="/Projects" className="btn primary">View Projects</Link>
        <Link to="/Contact" className="btn secondary">Contact Me</Link>
      </div>
      </section>
        {/* about section  */}
       <section className="about">
          <h2>About Me 🙋‍♂️</h2>
          <p>
            I'm Mahesh, a passionate software developer with expertise in Java, React, and Spring Boot. I love creating efficient and user-friendly applications that solve real-world problems. With a strong foundation in computer science and a keen eye for detail, I strive to deliver high-quality code and innovative solutions.
          </p>  
       </section>

        {/* sklills section */}
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>Java</li>
            <li>React</li>
            <li>Spring Boot</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>SQL & NoSQL Databases</li>
          </ul>
        </section>
        
    </div>
  );
}
