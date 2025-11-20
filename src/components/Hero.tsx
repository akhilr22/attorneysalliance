import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-law.jpg";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  height?: "full" | "medium";
}

const Hero = ({ title, subtitle, showCTA = true, height = "full" }: HeroProps) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`relative ${height === "full" ? "h-screen" : "h-[70vh]"} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Legal excellence"
          className="w-full h-full object-cover scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-5xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-background mb-8 animate-slide-up leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-background/80 mb-12 font-light max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
          {subtitle}
        </p>
        {showCTA && (
          <div className="flex gap-4 justify-center flex-wrap animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              asChild 
              className="rounded-full px-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="rounded-full px-8 bg-background/10 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground transition-all duration-500 hover:scale-105"
            >
              <Link to="/expertise">Our Services</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      {height === "full" && (
        <button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-background/60 hover:text-background transition-all duration-500 cursor-pointer animate-bounce"
          aria-label="Scroll to content"
        >
          <div className="flex flex-col items-center gap-2">
            <ChevronDown className="h-6 w-6" />
            <span className="text-xs font-light tracking-widest">SCROLL</span>
          </div>
        </button>
      )}
    </section>
  );
};

export default Hero;
