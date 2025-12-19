import '../Styles/Footer.css';

export default function Footer({ theme, toggleTheme }) {
  return (
    <footer className="footer">
      
      {/* Left */}
      <div className="footer-brand">
        <h3>Mahesh</h3>
        <p>Building clean & scalable web applications.</p>
      </div>

      {/* Center */}
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Right */}
      <div className="footer-actions">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        <p className="copyright">
          © {new Date().getFullYear()} Mahesh. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
