import { Briefcase, Users, Award, BookOpen, Scale, Building, Heart, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import DisclaimerPopup from "@/components/DisclaimerPopup";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LawyerCard from "@/components/LawyerCard";
import { teamData } from "@/data/teamData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-office.jpg";

const Index = () => {
  const featuredLawyers = teamData.slice(0, 4);

  const practices = [
    { icon: Briefcase, title: "Corporate Law", description: "Strategic guidance for business success" },
    { icon: Scale, title: "Litigation", description: "Expert representation in complex disputes" },
    { icon: Building, title: "Real Estate", description: "Comprehensive property legal services" },
    { icon: Heart, title: "Family Law", description: "Compassionate support for family matters" },
    { icon: Globe, title: "Intellectual Property", description: "Protection for your innovations" },
    { icon: BookOpen, title: "Estate Planning", description: "Secure your legacy and future" },
  ];

  const thoughtLeadership = [
    {
      title: "Corporate Compliance 2024",
      excerpt: "Essential insights on regulatory changes affecting businesses.",
      image: aboutImage,
    },
    {
      title: "Future of IP Law",
      excerpt: "How AI reshapes intellectual property protection.",
      image: aboutImage,
    },
    {
      title: "Real Estate Trends",
      excerpt: "Market analysis and legal considerations for investors.",
      image: aboutImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DisclaimerPopup />
      
      <Hero
        title="Excellence in Legal Counsel"
        subtitle="Trusted advisors providing strategic legal solutions for over 30 years"
      />

      {/* About Section */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6 animate-slide-up">
            <div className="inline-block">
              <span className="text-xs tracking-widest text-muted-foreground font-light">ABOUT US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
              Three Decades of Legal Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              Attorneys’ Alliance Services combines deep expertise with innovative approaches to 
              deliver exceptional results. We build lasting relationships based on trust and 
              integrity.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 transition-all duration-500 hover:scale-105"
            >
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 rounded-3xl overflow-hidden animate-fade-in group">
            <img
              src={aboutImage}
              alt="Modern law office"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-xs tracking-widest text-muted-foreground font-light mb-4 block">OUR TEAM</span>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Distinguished Legal Professionals
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg leading-relaxed">
            Accomplished attorneys dedicated to serving our clients with expertise and care
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredLawyers.map((lawyer, index) => (
            <div 
              key={lawyer.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <LawyerCard
                id={lawyer.id}
                name={lawyer.name}
                role={lawyer.role}
                image={lawyer.image}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-8 transition-all duration-500 hover:scale-105"
          >
            <Link to="/team">Meet Full Team</Link>
          </Button>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-container bg-muted">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-xs tracking-widest text-muted-foreground font-light mb-4 block">EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Comprehensive Legal Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <Card 
                key={index} 
                className="border-0 bg-background hover-lift transition-all duration-500 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <Icon className="h-8 w-8 text-foreground mb-6 transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="font-light text-xl text-foreground mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {practice.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button 
            asChild 
            size="lg"
            variant="outline"
            className="rounded-full px-8 transition-all duration-500 hover:scale-105"
          >
            <Link to="/expertise">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="section-container">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-xs tracking-widest text-muted-foreground font-light mb-4 block">INSIGHTS</span>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
            Thought Leadership
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {thoughtLeadership.map((article, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-0 hover-lift transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-light text-lg text-foreground mb-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="section-container bg-muted">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <span className="text-xs tracking-widest text-muted-foreground font-light mb-4 block">RECOGNITION</span>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
            Awards & Accolades
          </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <Award className="h-12 w-12" />
            <Award className="h-12 w-12" />
            <Award className="h-12 w-12" />
            <Award className="h-12 w-12" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
