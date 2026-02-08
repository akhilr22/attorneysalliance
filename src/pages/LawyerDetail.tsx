import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { teamData } from "@/data/teamData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, GraduationCap, Briefcase, Award, ArrowLeft } from "lucide-react";
import lawyerPlaceholder from "@/assets/lawyer-placeholder.jpg";

const LawyerDetail = () => {
  const { id } = useParams();
  const lawyer = teamData.find((l) => l.id === id);

  if (!lawyer) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 section-container text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Attorney Not Found</h1>
          <Button asChild>
            <Link to="/team">Back to Team</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const displayImage = lawyer.image === "/placeholder.svg" ? lawyerPlaceholder : lawyer.image;

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/team">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Team
            </Link>
          </Button>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Sidebar */}
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                    <img
                      src={displayImage}
                      alt={lawyer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h1 className="text-2xl font-serif font-bold text-foreground mb-2">
                      {lawyer.name}
                    </h1>
                    <p className="text-muted-foreground mb-6">{lawyer.role}</p>

                    <div className="space-y-3 mb-6">
                      <a
                        href={`mailto:${lawyer.email}`}
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">{lawyer.email}</span>
                      </a>
                      <a
                        href={`tel:${lawyer.phone}`}
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">{lawyer.phone}</span>
                      </a>
                    </div>

                    <Button className="w-full" asChild>
                      <Link to="/contact">Schedule Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>


            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Biography */}
              {lawyer.bio &&<Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Biography
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {lawyer.bio}
                  </p>
                </CardContent>
              </Card>}

              {/* Education */}
              {!!lawyer.education.length && <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    Education
                  </h2>
                  <ul className="space-y-2">
                    {lawyer.education?.map((edu, index) => (
                      <li key={index} className="text-muted-foreground">
                        • {edu}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>}

              {/* Experience Timeline */}
              {!!lawyer.experience[0].title && <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                    Professional Experience
                  </h2>
                  <div className="space-y-6">
                    {lawyer.experience?.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary pl-6 relative">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                        <div className="text-sm text-primary font-semibold mb-1">
                          {exp.year}
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>}

              {/* Case Highlights */}
              {/* <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Notable Achievements
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      Successfully represented major corporations in high-stakes transactions
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      Published extensively in leading legal journals and publications
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      Frequent speaker at national legal conferences and seminars
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      Recognized by peers as a leader in their practice area
                    </li>
                  </ul>
                </CardContent>
              </Card> */}
              {/* Expertise Tags */}
              {!!lawyer.expertise.length && <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="flex items-center gap-2 text-2xl font-serif font-bold text-foreground mb-4">
                    {/* <Award className="h-5 w-5 text-primary" /> */}
                    Areas of Expertise
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {lawyer.expertise.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 bg-muted text-foreground text-sm rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LawyerDetail;
