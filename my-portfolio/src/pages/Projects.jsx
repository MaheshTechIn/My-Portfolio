import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'YouTube Video Downloader',
      description:
        'Web app to download YouTube videos in multiple formats using FastAPI and yt-dlp.',
      tech: ['FastAPI', 'Python', 'HTML', 'CSS'],
      link: 'https://github.com/your-username/youtube-downloader',
    },
    {
      title: 'Course Enrollment System',
      description:
        'React-based course platform with pagination and conditional enrollment.',
      tech: ['React', 'Next.js', 'TypeScript'],
      link: 'https://github.com/your-username/course-platform',
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio built using React and Vite.',
      tech: ['React', 'Vite', 'CSS'],
      link: 'https://github.com/your-username/portfolio',
    },
  ];

  return (
    <div className="projects">
      <h1 className="projects-title">Projects 🚀</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
