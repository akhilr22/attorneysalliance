import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import LawyerCard from "@/components/LawyerCard";
import { teamData } from "@/data/teamData";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        title="Our Legal Team"
        subtitle="Meet the accomplished attorneys dedicated to your success"
        showCTA={false}
        height="medium"
      />

      <section className="section-container">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team brings together diverse expertise, exceptional credentials, and a 
            shared commitment to delivering outstanding legal services. Each attorney is 
            dedicated to understanding your unique needs and providing strategic counsel 
            tailored to your situation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((lawyer) => (
            <LawyerCard
              key={lawyer.id}
              id={lawyer.id}
              name={lawyer.name}
              role={lawyer.role}
              image={lawyer.image}
              email={lawyer.email}
              phone={lawyer.phone}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
