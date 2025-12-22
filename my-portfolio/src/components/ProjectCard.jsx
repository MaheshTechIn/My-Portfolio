// import '../styles/Projects.css';

// export default function ProjectCard({ title, description, tech, link }) {
//   return (
//     <div className="project-card">
//       <h3>{title}</h3>
//       <p>{description}</p>

//       <div className="project-tech">
//         {tech.map((item, index) => (
//           <span key={index}>{item}</span>
//         ))}
//       </div>

//       <a href={link} className="project-link" target="_blank" rel="noreferrer">
//         View Project
//       </a>
//     </div>
//   );
// }
import '../styles/Projects.css';

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-tech">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <a href={link} className="project-link" target="_blank" rel="noreferrer">
        View Project
      </a>
    </div>
  );
}

