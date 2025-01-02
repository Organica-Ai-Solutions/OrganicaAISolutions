import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Organica AI Solutions</h3>
            <p className="text-muted-foreground text-sm">
              Empowering businesses with innovative technology solutions
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>1438 N7th st.</li>
              <li>Philadelphia PA0, 19122</li>
              <li>USA</li>
              <li>+1-215-888-8748</li>
              <li>contact@organicaai.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/organica-ai-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/organicaai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com/organicaai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Organica AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 