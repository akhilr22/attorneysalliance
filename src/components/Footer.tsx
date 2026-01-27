import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src="/attorneys_alliance_logo.png"
                alt="Attorney's Alliance Logo"
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-light text-lg tracking-wide text-foreground">
                Attorney's Alliance
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Excellence in legal counsel. Trusted advisors for over 30 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-light text-foreground mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-light">
                  About
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-light">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-light">
                  Expertise
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-light text-foreground mb-4 tracking-wide">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li>Corporate Law</li>
              <li>Litigation</li>
              <li>Intellectual Property</li>
              <li>Real Estate</li>
              <li>Family Law</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-light text-foreground mb-4 tracking-wide">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm font-light">
                <Phone className="h-4 w-4 text-foreground/40" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm font-light">
                <Mail className="h-4 w-4 text-foreground/40" />
                info@premierlegal.com
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm font-light">
                <MapPin className="h-4 w-4 text-foreground/40 mt-0.5" />
                <span>123 Legal Plaza<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-light">
            © 2024 Attorney's Alliance Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
