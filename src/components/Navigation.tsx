import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Expertise", path: "/expertise" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <Scale className={`h-6 w-6 transition-all duration-500 ${
              location.pathname.includes("lawyer") ? "text-foreground" : scrolled ? "text-foreground" : "text-background"
            } group-hover:scale-110`} />
            <span className={`font-light text-lg tracking-wide transition-colors duration-500 ${
              location.pathname.includes("lawyer") ? "text-foreground" : scrolled ? "text-foreground" : "text-background" }
            }`}>
              Attorney's Alliance
            </span>
 
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-light tracking-wide transition-all duration-300 relative group ${
                  location.pathname.includes("lawyer") ? "text-foreground" : scrolled ? "text-foreground hover:text-foreground" : "text-background/90 hover:text-background"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                  location.pathname.includes("lawyer") ? "text-foreground" : scrolled ? "bg-foreground" : "bg-background"
                }`} />
              </Link>
            ))}
            <Button 
              variant="default" 
              size="sm"
              asChild
              className="rounded-full px-6 transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-background"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in bg-background/95 backdrop-blur-xl rounded-2xl mt-2 p-6 border border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-foreground/70 transition-colors font-light py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="default" asChild className="w-full rounded-full mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
