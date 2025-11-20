import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-office.jpg";
import lawyerPlaceholder from "@/assets/lawyer-placeholder.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        title="About Us"
        subtitle="Building a legacy of legal excellence since 1990"
        showCTA={false}
        height="medium"
      />

      {/* Vision Statement */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Our Vision
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            To be the most trusted legal advisor, delivering innovative solutions and 
            exceptional service while upholding the highest standards of integrity and 
            professionalism. We envision a future where legal excellence is accessible, 
            transparent, and transformative for our clients and communities.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-container bg-muted">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Our Core Values
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Excellence
              </h3>
              <p className="text-muted-foreground">
                We pursue the highest standards in everything we do, constantly innovating 
                to deliver superior results for our clients.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8 text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Integrity
              </h3>
              <p className="text-muted-foreground">
                Our reputation is built on honesty, transparency, and ethical practice. 
                We always put our clients' interests first.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Dedication
              </h3>
              <p className="text-muted-foreground">
                We are committed to understanding your unique needs and providing 
                personalized attention to achieve your goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Message from Our Founder
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              "When I founded Attorney's Alliance Services over three decades ago, I had a simple 
              vision: to create a firm where legal excellence meets genuine client care. 
              Today, I'm proud to lead a team of exceptional attorneys who share this 
              commitment to making a meaningful difference in our clients' lives."
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              "We believe that great legal service goes beyond knowledge of the law. It 
              requires empathy, strategic thinking, and the courage to challenge the status 
              quo. These principles guide us every day as we advocate for our clients."
            </p>
            <div className="border-l-4 border-primary pl-6 italic text-muted-foreground mt-6">
              "Justice delayed is justice denied. That's why we approach every case with 
              urgency, dedication, and unwavering commitment to achieving the best possible 
              outcome."
            </div>
            <div className="mt-6">
              <p className="font-semibold text-foreground">Margaret Chen, Esq.</p>
              <p className="text-sm text-muted-foreground">Founder & Managing Partner</p>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-medium">
            <img
              src={lawyerPlaceholder}
              alt="Margaret Chen, Founder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-container bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8 text-center">
            Our Journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-background font-bold">1990</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Foundation
                </h3>
                <p className="text-muted-foreground">
                  Attorney's Alliance Services was founded with a mission to provide exceptional 
                  legal counsel to businesses and individuals in New York.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-background font-bold">2005</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Expansion
                </h3>
                <p className="text-muted-foreground">
                  Opened additional offices and expanded our practice areas to serve a 
                  broader range of client needs across multiple states.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-background font-bold">2020</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Innovation
                </h3>
                <p className="text-muted-foreground">
                  Embraced technology and digital transformation to enhance client service 
                  and operational excellence during unprecedented times.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-background font-bold">2024</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Leadership
                </h3>
                <p className="text-muted-foreground">
                  Recognized as one of the nation's leading law firms, continuing to set 
                  new standards for legal excellence and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
