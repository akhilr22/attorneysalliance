export interface Lawyer {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  education: string[];
  experience: {
    year: string;
    title: string;
    description: string;
  }[];
  email: string;
  phone: string;
}

export const teamData: Lawyer[] = [
  {
    id: "sarah-martinez",
    name: "Sarah Martinez",
    role: "Senior Partner, Corporate Law",
    image: "/placeholder.svg",
    bio: "Sarah Martinez is a distinguished corporate attorney with over 20 years of experience in mergers, acquisitions, and corporate governance. She has advised Fortune 500 companies on complex transactions and regulatory compliance.",
    expertise: ["Corporate Law", "M&A", "Securities", "Corporate Governance"],
    education: [
      "J.D., Harvard Law School",
      "B.A. Economics, Yale University"
    ],
    experience: [
      {
        year: "2010-Present",
        title: "Senior Partner",
        description: "Leading corporate practice group and managing high-value transactions"
      },
      {
        year: "2005-2010",
        title: "Partner",
        description: "Specialized in mergers and acquisitions for technology companies"
      },
      {
        year: "2000-2005",
        title: "Associate Attorney",
        description: "Corporate law practice focusing on securities and compliance"
      }
    ],
    email: "s.martinez@premierLegal.com",
    phone: "+1 (555) 123-4567"
  },
  {
    id: "james-chen",
    name: "James Chen",
    role: "Partner, Litigation",
    image: "/placeholder.svg",
    bio: "James Chen is a skilled litigator with extensive trial experience in complex commercial disputes. His strategic approach and courtroom expertise have secured favorable outcomes for clients across various industries.",
    expertise: ["Commercial Litigation", "Trial Advocacy", "Arbitration", "Dispute Resolution"],
    education: [
      "J.D., Stanford Law School",
      "B.S. Business Administration, UC Berkeley"
    ],
    experience: [
      {
        year: "2012-Present",
        title: "Partner",
        description: "Lead counsel in high-stakes commercial litigation matters"
      },
      {
        year: "2007-2012",
        title: "Senior Associate",
        description: "Managed complex commercial disputes and class actions"
      }
    ],
    email: "j.chen@premierLegal.com",
    phone: "+1 (555) 123-4568"
  },
  {
    id: "emily-thompson",
    name: "Emily Thompson",
    role: "Partner, Intellectual Property",
    image: "/placeholder.svg",
    bio: "Emily Thompson specializes in intellectual property law, protecting innovations and brands for technology companies and creative industries. Her expertise spans patents, trademarks, and copyright law.",
    expertise: ["Patent Law", "Trademark", "Copyright", "IP Licensing"],
    education: [
      "J.D., Columbia Law School",
      "M.S. Computer Science, MIT",
      "B.S. Engineering, Caltech"
    ],
    experience: [
      {
        year: "2013-Present",
        title: "Partner",
        description: "Head of intellectual property practice group"
      },
      {
        year: "2008-2013",
        title: "Associate",
        description: "Patent prosecution and IP litigation"
      }
    ],
    email: "e.thompson@premierLegal.com",
    phone: "+1 (555) 123-4569"
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    role: "Partner, Real Estate",
    image: "/placeholder.svg",
    bio: "Michael Rodriguez brings decades of experience in commercial real estate transactions, development projects, and property litigation. He has facilitated billions in real estate deals.",
    expertise: ["Real Estate Transactions", "Property Development", "Zoning", "Landlord-Tenant"],
    education: [
      "J.D., NYU School of Law",
      "B.A. Urban Planning, UCLA"
    ],
    experience: [
      {
        year: "2009-Present",
        title: "Partner",
        description: "Managing complex commercial real estate transactions"
      }
    ],
    email: "m.rodriguez@premierLegal.com",
    phone: "+1 (555) 123-4570"
  },
  {
    id: "lisa-patel",
    name: "Dr. Lisa Patel",
    role: "Partner, Healthcare Law",
    image: "/placeholder.svg",
    bio: "Dr. Lisa Patel combines medical and legal expertise to serve healthcare providers, hospitals, and pharmaceutical companies. Her unique background enables comprehensive healthcare compliance solutions.",
    expertise: ["Healthcare Compliance", "Medical Malpractice Defense", "HIPAA", "Healthcare Transactions"],
    education: [
      "J.D., Georgetown Law",
      "M.D., Johns Hopkins School of Medicine",
      "B.S. Biology, Duke University"
    ],
    experience: [
      {
        year: "2011-Present",
        title: "Partner",
        description: "Leading healthcare law practice"
      }
    ],
    email: "l.patel@premierLegal.com",
    phone: "+1 (555) 123-4571"
  },
  {
    id: "david-wilson",
    name: "David Wilson",
    role: "Senior Associate, Family Law",
    image: "/placeholder.svg",
    bio: "David Wilson handles sensitive family law matters with compassion and professionalism. His approach combines legal expertise with understanding of the emotional aspects of family disputes.",
    expertise: ["Divorce", "Child Custody", "Prenuptial Agreements", "Family Mediation"],
    education: [
      "J.D., University of Chicago Law School",
      "B.A. Psychology, Northwestern University"
    ],
    experience: [
      {
        year: "2015-Present",
        title: "Senior Associate",
        description: "Family law practice with focus on complex divorce cases"
      }
    ],
    email: "d.wilson@premierLegal.com",
    phone: "+1 (555) 123-4572"
  },
  {
    id: "amanda-foster",
    name: "Amanda Foster",
    role: "Associate, Tax Law",
    image: "/placeholder.svg",
    bio: "Amanda Foster provides strategic tax planning and compliance services for individuals and businesses. Her expertise helps clients navigate complex tax regulations.",
    expertise: ["Tax Planning", "IRS Disputes", "Estate Planning", "Tax Compliance"],
    education: [
      "J.D., University of Virginia Law School",
      "LL.M. Taxation, NYU",
      "B.S. Accounting, Penn State"
    ],
    experience: [
      {
        year: "2017-Present",
        title: "Associate",
        description: "Tax law and estate planning"
      }
    ],
    email: "a.foster@premierLegal.com",
    phone: "+1 (555) 123-4573"
  },
  {
    id: "robert-kim",
    name: "Robert Kim",
    role: "Associate, Environmental Law",
    image: "/placeholder.svg",
    bio: "Robert Kim advises clients on environmental compliance, sustainability initiatives, and regulatory matters. His work helps businesses balance growth with environmental responsibility.",
    expertise: ["Environmental Compliance", "Sustainability", "Climate Law", "Natural Resources"],
    education: [
      "J.D., UC Berkeley Law",
      "M.S. Environmental Science, Stanford",
      "B.S. Environmental Studies, Yale"
    ],
    experience: [
      {
        year: "2018-Present",
        title: "Associate",
        description: "Environmental law and regulatory compliance"
      }
    ],
    email: "r.kim@premierLegal.com",
    phone: "+1 (555) 123-4574"
  }
];
