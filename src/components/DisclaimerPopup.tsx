import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const DisclaimerPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer");
    if (!hasSeenDisclaimer) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hasSeenDisclaimer", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-md animate-fade-in">
      <div className="bg-background rounded-3xl max-w-2xl mx-8 p-10 relative animate-scale-in border border-border/50">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-all duration-300 hover:rotate-90"
          aria-label="Close disclaimer"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h2 className="text-3xl font-light text-foreground mb-6">
          Legal Disclaimer
        </h2>
        
        <div className="text-muted-foreground space-y-4 mb-8 leading-relaxed font-light">
          <p>
            The information provided on this website is for general informational purposes only 
            and does not constitute legal advice. No attorney-client relationship is formed by 
            using this website or contacting our firm through the information provided here.
          </p>
          <p>
            For specific legal advice tailored to your situation, please schedule a consultation 
            with one of our attorneys. Past results do not guarantee future outcomes.
          </p>
        </div>
        
        <div className="flex gap-4">
          <Button 
            onClick={handleAccept} 
            className="flex-1 rounded-full transition-all duration-300 hover:scale-105"
          >
            I Understand
          </Button>
          <Button 
            onClick={handleClose} 
            variant="outline" 
            className="flex-1 rounded-full transition-all duration-300 hover:scale-105"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
