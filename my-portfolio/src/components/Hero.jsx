import { Link } from "react-router-dom";
import "../Styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-name">
        Hi, I’m <span>Mahesh Babu</span>
      </h1>

      <h2 className="hero-role">
        Software Developer | Java | React | Spring Boot
      </h2>

      <p className="hero-tagline">
        I build clean and scalable applications
      </p>

      <div className="buttons">
        <Link to="/projects" className="btn primary">
          View Projects
        </Link>
        <Link to="/contact" className="btn secondary">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
