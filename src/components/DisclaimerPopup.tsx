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

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

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
      <div className="bg-background rounded-3xl max-w-2xl mx-8 p-10 relative animate-scale-in border border-border/50 max-h-[90vh] flex flex-col">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-all duration-300 hover:rotate-90"
          aria-label="Close disclaimer"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h2 className="text-3xl font-light text-foreground mb-6">
          Disclaimer & Confirmation
        </h2>
        
        <div className="text-muted-foreground space-y-4 mb-8 leading-relaxed font-light overflow-y-auto flex-1 pr-2">
          <p>
            Under the rules of the Bar Council of India, Attorneys' Alliance (the "Firm") is prohibited from soliciting work or advertising. By clicking "I Agree" below, the user acknowledges that:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from the Firm or any of its members to solicit any work or advertise through this website</li>
            <li>The purpose of this website is to provide the user with information about the Firm, its practice areas, its advocates and solicitors;</li>
            <li>The user wishes to gain more information about the Firm for his/her own information and personal/professional use; and</li>
            <li>The information about the Firm is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website are completely at the user's volition and any transmission, receipt or use of this website would not create any lawyer-client relationship.</li>
            <li>This website is not intended to be a source of advertising or solicitation and the contents hereof should not be construed as legal advice in any manner whatsoever.</li>
            <li>The Firm is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user requires any assistance, he/she must seek independent legal advice.</li>
            <li>The content of this website is Intellectual Property of the Firm.</li>
          </ul>
          <p>
            By clicking "Agree", you confirm that you have read and understood the above disclaimer.
          </p>
        </div>
        
        <div className="flex gap-4">
          <Button 
            onClick={handleAccept} 
            className="flex-1 rounded-full transition-all duration-300 hover:scale-105"
          >
            Agree
          </Button>
          <Button 
            onClick={handleClose} 
            variant="outline" 
            className="flex-1 rounded-full transition-all duration-300 hover:scale-105"
          >
            Disagree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
