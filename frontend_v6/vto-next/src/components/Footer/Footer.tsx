'use client';

import './Footer.css';
import {
  Phone,
  MessageCircle,
  Mail,
  HelpCircle,
  Map,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Subscribe section */}
        <section className="subscribe" aria-labelledby="subscribe-heading">
          <h3 id="subscribe-heading">Subscribe to our news</h3>
          <form className="subscribe-box" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Your email"
              required
            />
            <button type="submit" aria-label="Subscribe">
              &rarr;
            </button>
          </form>
        </section>

        {/* Help section */}
        <section className="help" aria-labelledby="help-heading">
          <h3 id="help-heading">Do you need help?</h3>

          <p><Phone size={25} style={{ marginRight: 8 }} /> Call us: 1-877-997-7232</p>
          <p><MessageCircle size={25} style={{ marginRight: 8 }} /> Chat with our Client Service</p>
          <p><Mail size={25} style={{ marginRight: 8 }} /> Contacts</p>
          <p><HelpCircle size={25} style={{ marginRight: 8 }} /> FAQ</p>
          <p><Map size={25} style={{ marginRight: 8 }} /> Sitemap</p>
        </section>
      </div>
    </footer>
  );
}
