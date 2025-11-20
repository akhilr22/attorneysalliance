import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import lawyerPlaceholder from "@/assets/lawyer-placeholder.jpg";

interface LawyerCardProps {
  id: string;
  name: string;
  role: string;
  image: string;
  email?: string;
  phone?: string;
}

const LawyerCard = ({ id, name, role, image }: LawyerCardProps) => {
  const displayImage = image === "/placeholder.svg" ? lawyerPlaceholder : image;

  return (
    <Link to={`/lawyer/${id}`} className="group block">
      <Card className="overflow-hidden border-0 bg-transparent hover-lift transition-all duration-500 h-full">
        <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-muted mb-6 relative">
          <img
            src={displayImage}
            alt={`${name} - ${role}`}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-foreground" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-light text-xl text-foreground mb-2 group-hover:text-foreground/70 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm font-light">{role}</p>
        </div>
      </Card>
    </Link>
  );
};

export default LawyerCard;
