import { Link } from "react-router-dom";

export default function Hero(){
    return(
        <section className="hero">
            <h1>Hi I'm Mahesh Babu</h1>
            <h2>Software Developer | Java | React | Spring Boot</h2>
            <p>I build clean and scalable applications</p>

            <div className="buttons"> 
                <Link to="/projects" className="btn primary"> 
                    View Projects
                </Link>
                <Link to="/contact" className="btn secondary">
                    Contact Me
                </Link>
            </div>
        </section>
    )
}