import { Card, CardContent } from "./ui/card";
import { Mail, Phone } from "lucide-react";

interface StaffCardProps {
    name: string;
    role: string;
    email: string;
    phone: string;
}

const StaffCard = ({ name, role, email, phone }: StaffCardProps) => {
    return (
        <Card className="hover-lift transition-all duration-300">
            <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{role}</p>

                <div className="space-y-2">
                    {
                        email && <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail className="h-4 w-4" />
                        <span>{email}</span>
                    </a>
                    }
                    <a
                        href={`tel:${phone}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Phone className="h-4 w-4" />
                        <span>{phone}</span>
                    </a>
                </div>
            </CardContent>
        </Card>
    );
};

export default StaffCard;
