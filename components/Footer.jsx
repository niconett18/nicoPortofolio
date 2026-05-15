import { SiGithub, SiInstagram } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Nicholas Edmund</p>
      <div className="site-footer-links">
        <a href="https://github.com/niconett18" target="_blank" rel="noopener noreferrer">
          <SiGithub size={14} />
          GitHub
        </a>
        <a href="https://www.instagram.com/niconet18/" target="_blank" rel="noopener noreferrer">
          <SiInstagram size={14} />
          Instagram
        </a>
      </div>
    </footer>
  );
}
