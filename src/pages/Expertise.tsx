import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Scale,
  Building,
  Heart,
  Globe,
  BookOpen,
  Shield,
  Users,
  TrendingUp,
  Leaf,
  Landmark,
  FileText,
} from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Briefcase,
      title: "Corporate Law",
      description:
        "Comprehensive corporate legal services including business formation, corporate governance, compliance, and commercial transactions. We guide businesses through complex legal landscapes.",
      services: [
        "Business Formation & Structuring",
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Securities & Capital Markets",
        "Contract Negotiation",
      ],
    },
    {
      icon: Scale,
      title: "Litigation",
      description:
        "Aggressive and strategic representation in complex commercial disputes, civil litigation, and trial advocacy. Our litigators have extensive courtroom experience.",
      services: [
        "Commercial Litigation",
        "Business Disputes",
        "Class Action Defense",
        "Arbitration & Mediation",
        "Appellate Practice",
      ],
    },
    {
      icon: Globe,
      title: "Intellectual Property",
      description:
        "Comprehensive IP protection services for innovations, brands, and creative works. From patents to trademarks, we safeguard your intellectual assets.",
      services: [
        "Patent Prosecution & Litigation",
        "Trademark Registration & Enforcement",
        "Copyright Protection",
        "IP Licensing & Transactions",
        "Trade Secret Protection",
      ],
    },
    {
      icon: Building,
      title: "Real Estate",
      description:
        "Full-service real estate legal counsel for commercial and residential transactions, development, leasing, and property disputes.",
      services: [
        "Commercial Real Estate Transactions",
        "Real Estate Development",
        "Leasing & Property Management",
        "Zoning & Land Use",
        "Real Estate Litigation",
      ],
    },
    {
      icon: Shield,
      title: "Healthcare Law",
      description:
        "Specialized legal services for healthcare providers, hospitals, and pharmaceutical companies, navigating complex regulatory environments.",
      services: [
        "Healthcare Compliance",
        "HIPAA & Privacy",
        "Medical Malpractice Defense",
        "Healthcare Transactions",
        "Regulatory Matters",
      ],
    },
    {
      icon: Heart,
      title: "Family Law",
      description:
        "Compassionate and professional handling of family legal matters, including divorce, custody, and domestic relations issues.",
      services: [
        "Divorce & Separation",
        "Child Custody & Support",
        "Prenuptial & Postnuptial Agreements",
        "Adoption",
        "Family Mediation",
      ],
    },
    {
      icon: BookOpen,
      title: "Estate Planning & Tax",
      description:
        "Strategic estate planning and tax services to protect your assets, minimize tax liability, and secure your family's future.",
      services: [
        "Wills & Trusts",
        "Estate Administration",
        "Tax Planning",
        "Asset Protection",
        "Probate & Trust Litigation",
      ],
    },
    {
      icon: Users,
      title: "Employment Law",
      description:
        "Comprehensive employment counsel for both employers and employees, covering all aspects of workplace law and disputes.",
      services: [
        "Employment Contracts",
        "Discrimination & Harassment",
        "Wage & Hour Compliance",
        "Executive Compensation",
        "Workplace Investigations",
      ],
    },
    {
      icon: TrendingUp,
      title: "Finance & Banking",
      description:
        "Sophisticated legal services for financial institutions, lending transactions, and regulatory compliance in the financial sector.",
      services: [
        "Banking & Finance Transactions",
        "Regulatory Compliance",
        "Secured Lending",
        "Restructuring & Bankruptcy",
        "Financial Services Litigation",
      ],
    },
    {
      icon: Leaf,
      title: "Environmental Law",
      description:
        "Environmental compliance and sustainability counsel, helping businesses navigate environmental regulations and implement green initiatives.",
      services: [
        "Environmental Compliance",
        "Sustainability Consulting",
        "Climate Change Law",
        "Natural Resources",
        "Environmental Litigation",
      ],
    },
    {
      icon: Landmark,
      title: "Government Relations",
      description:
        "Strategic government affairs and regulatory advocacy services to help navigate complex governmental processes and regulations.",
      services: [
        "Regulatory Affairs",
        "Government Contracting",
        "Lobbying & Advocacy",
        "Public Policy",
        "Administrative Law",
      ],
    },
    {
      icon: FileText,
      title: "Immigration",
      description:
        "Comprehensive immigration services for individuals and businesses, facilitating legal immigration processes and compliance.",
      services: [
        "Business Immigration",
        "Family-Based Immigration",
        "Visa Applications",
        "Citizenship & Naturalization",
        "Deportation Defense",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        title="Areas of Expertise"
        subtitle="Comprehensive legal services across multiple practice areas"
        showCTA={false}
        height="medium"
      />

      <section className="section-container">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse team of legal professionals offers comprehensive services across 
            a wide range of practice areas. Whether you're an individual, small business, 
            or large corporation, we have the expertise to meet your legal needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">
                      Key Services:
                    </h4>
                    <ul className="space-y-2">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Expertise;
