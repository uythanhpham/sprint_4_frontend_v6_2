'use client';

import './Header.css';
import { User, Info, Handshake } from 'lucide-react'; // import icon từ Lucide

export default function Header() {
  return (
    <header className="header">
      <div className="logo" aria-label="Virtual Try-On logo">
        VTO
      </div>

      <nav className="nav-links" role="navigation" aria-label="Main navigation">
        <a href="#" title="About Us">
          <Info size={38} />
        </a>
        <a href="#" title="Brand Collaboration">
          <Handshake size={38} />
        </a>
        <a href="#" title="Sign Up / Login">
          <User size={38} />
        </a>
      </nav>
    </header>
  );
}
