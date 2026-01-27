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

export const teamData = [
  {
    id: "s-gopakumaran-nair",
    name: "Dr. S. Gopakumaran Nair",
    role: "Chairman | Senior Advocate",
    image: "",
    bio: "Dr. S. Gopakumaran Nair is the Chairman of the Firm and a Senior Advocate with over 53 years of distinguished legal practice before the Supreme Court of India and the High Court of Kerala. He has held several prominent positions in the legal profession, including Chairman of the Bar Council of India, Chairman of the Bar Council of Kerala, and President of the Kerala High Court Advocates’ Association. He is widely respected for his contribution to constitutional law, writ jurisdiction, and academic governance, and continues to advise and represent leading public institutions.",
    expertise: [
      "Constitutional & Administrative Law",
      "Criminal Law",
      "University & Academic Governance",
      "Consumer Law",
      "Medical Negligence"
    ],
    education: [],
    experience: [
      {
        year: "",
        title: "",
        description: ""
      }
    ],
    email: "",
    phone: ""
  },
  {
    id: "s-prasanth",
    name: "Adv. S. Prasanth",
    role: "Partner | Litigation & Arbitration",
    image: "/team/s-prasanth.png",
    bio: "Advocate S. Prasanth has over 31 years of professional experience across civil, criminal, commercial, and arbitration matters. He regularly appears before the High Court of Kerala, the Armed Forces Tribunal, and various statutory and quasi-judicial bodies. He also serves as Standing Counsel to governmental and constitutional authorities and is known for his balanced, practical, and solution-oriented approach.",
    expertise: [
      "Civil & Criminal Litigation",
      "Arbitration & Mediation",
      "Service Law",
      "Banking & Insurance Law",
      "Tribunal Matters"
    ],
    education: [],
    experience: [
      {
        year: "",
        title: "",
        description: ""
      }
    ],
    email: "",
    phone: ""
  },
  {
    id: "cr-syam-kumar",
    name: "Adv. C.R. Syam Kumar",
    role: "Partner | Litigation & Arbitration",
    image: "/team/cr-syam-kumar.png",
    bio: "Advocate C.R. Syam Kumar brings more than 34 years of active legal practice, with a strong focus on civil, commercial, arbitration, and family law. He has served as Senior Government Pleader and Additional Central Government Standing Counsel and has been associated with several important reported judgments. He is widely regarded for his legal clarity, depth of preparation, and principled advocacy.",
    expertise: [
      "Civil & Commercial Litigation",
      "Arbitration",
      "Family Law",
      "Estate Planning",
      "Securities & Capital Markets"
    ],
    education: [],
    experience: [
      {
        year: "",
        title: "",
        description: ""
      }
    ],
    email: "",
    phone: ""
  },
  {
    id: "sooraj-t-elenjickal",
    name: "Adv. Sooraj T. Elenjickal",
    role: "Partner | Litigation & Arbitration",
    image: "/team/sooraj-t-elenjickal.png",
    bio: "Advocate Sooraj T. Elenjickal has over 26 years of experience before the Supreme Court of India, the High Court of Kerala, and various courts and tribunals. He handles a wide range of matters including constitutional, criminal, corporate, and financial disputes, and is known for his confident courtroom presence and his work in complex and sensitive cases.",
    expertise: [
      "Criminal Law",
      "Writ Matters",
      "Corporate Law",
      "Banking & Finance",
      "Family Law",
      "Cyber Law",
      "Accident Claims",
      "Labour Law"
    ],
    education: [],
    experience: [
      {
        year: "",
        title: "",
        description: ""
      }
    ],
    email: "",
    phone: ""
  },
  {
    id: "p-sreekumar",
    name: "Sr. Adv. P. Sreekumar",
    role: "Partner | Senior Advocate",
    image: "/team/p-sreekumar.png",
    bio: "Senior Advocate P. Sreekumar has over 32 years of experience before the Supreme Court of India and several High Courts. He is known for his thoughtful legal advice and wide practice across arbitration, education law, family law, civil and criminal litigation. He has advised and represented several public bodies and institutions.",
    expertise: [
      "Constitutional Law",
      "Arbitration",
      "Civil Litigation",
      "Family Law",
      "Education Law"
    ],
    education: [],
    experience: [
      {
        year: "",
        title: "",
        description: ""
      }
    ],
    email: "",
    phone: ""
  },

  // ===== Newly Added Associates =====

  {
    id: "athul-roy",
    name: "Athul Roy",
    role: "Associate",
    image: "/team/athul-roy.png",
    bio: "",
    expertise: [],
    education: [
      "BBA LLB (Hons)",
      "LLM - Corporate and Financial Laws"
    ],
    experience: [
      {
        year: "4 years",
        title: "Associate",
        description: ""
      }
    ],
    email: "royvakkeel@gmail.com",
    phone: "9061430452"
  },
  {
    id: "renuka-venu",
    name: "Renuka Venu",
    role: "Associate",
    image: "/team/renuka-venu.png",
    bio: "",
    expertise: [],
    education: [
      "BA LLB"
    ],
    experience: [
      {
        year: "7 years",
        title: "Associate",
        description: ""
      }
    ],
    email: "paru.renuka@gmail.com",
    phone: "8089269964"
  },
  {
    id: "indrajith-dileep",
    name: "Indrajith Dileep",
    role: "Associate",
    image: "",
    bio: "",
    expertise: [],
    education: [
      "BA LLB (Hons)",
      "LLM - Corporate and Financial Laws"
    ],
    experience: [
      {
        year: "2 years",
        title: "Associate",
        description: ""
      }
    ],
    email: "indrajithdileep2000@gmail.com",
    phone: "9496699550"
  },
  {
    id: "amala-anna-thottupuram",
    name: "Amala Anna Thottupuram",
    role: "Associate",
    image: "/team/amala-anna-thottupuram.png",
    bio: "",
    expertise: [],
    education: [
      "BBA LLB"
    ],
    experience: [
      {
        year: "1 year",
        title: "Associate",
        description: ""
      }
    ],
    email: "annaamala247@gmail.com",
    phone: "7902629981"
  },
  {
    id: "abraham-p-korah",
    name: "Abraham P. Korah",
    role: "Associate",
    image: "/team/abraham-p-korah.png",
    bio: "",
    expertise: [],
    education: [
      "BA LLB"
    ],
    experience: [
      {
        year: "33 years",
        title: "Associate",
        description: ""
      }
    ],
    email: "advocateapk@gmail.com",
    phone: "9846040094"
  }
]



// export const teamData: Lawyer[] = [
//   {
//     "id": "cr-syam-kumar",
//     "name": "C.R. Syam Kumar",
//     "role": "Partner – Litigation & Arbitration",
//     "image": "/placeholder.svg",
//     "bio": "C.R. Syam Kumar is a seasoned litigator with over 33 years of active legal practice before the High Court of Kerala and various tribunals. His work spans civil, commercial, family, and securities law, with a distinguished record in arbitration and constitutional matters. He has served in multiple senior government legal positions, including Additional Central Government Standing Counsel and Senior Government Pleader at the High Court of Kerala. During his tenure as Senior Government Pleader, he handled a substantial volume of matters and contributed to approximately 40 reported judgments, including the notable Full Bench decision reported in 2016 (4) KHC 915. He has also represented major statutory and financial institutions, including the Kerala Building & Other Construction Workers Welfare Board and HUDCO before the Debts Recovery Tribunal and the High Court of Kerala.",
//     "expertise": [
//       "Civil Litigation",
//       "Arbitration & Alternate Dispute Resolution",
//       "Family and Matrimonial Disputes",
//       "Estate Planning & Succession Matters",
//       "Securities & Capital Markets"
//     ],
//     "education": [
//       "B.A., LL.B.",
//       "LL.M. – Constitutional Law"
//     ],
//     "experience": [
//       {
//         "year": "2011–2016",
//         "title": "Senior Government Pleader, High Court of Kerala",
//         "description": "Handled a wide range of constitutional, administrative, and civil matters; contributed to around 40 reported judgments including the 2016 (4) KHC 915 Full Bench decision."
//       },
//       {
//         "year": "2007–2008",
//         "title": "Additional Central Government Standing Counsel",
//         "description": "Represented the Central Government in litigation and advisory matters."
//       },
//       {
//         "year": "1997–2007",
//         "title": "Standing Counsel, Kerala Building & Other Construction Workers Welfare Board",
//         "description": "Served as legal counsel before tribunals and courts for statutory and regulatory matters."
//       },
//       {
//         "year": "Present",
//         "title": "Counsel for HUDCO",
//         "description": "Represents HUDCO before the Debts Recovery Tribunal, Ernakulam and the High Court of Kerala."
//       }
//     ],
//     "highlights": [
//       "33+ years of extensive legal practice",
//       "Led and represented the Government of India and State Government in high-profile matters",
//       "Approximately 40 reported judgments",
//       "Trusted counsel for major statutory bodies and financial institutions"
//     ],
//     "email": "syamsmita@yahoo.com",
//     "phone": "+91 9446565361"
//   },
//   {
//     "id": "s-prasanth",
//     "name": "S. PRASANTH",
//     "role": "Partner – Litigation & Arbitration",
//     "image": "/placeholder.svg",
//     "bio": "With 31 years of professional experience, S. Prasanth is a seasoned advocate with a diverse and well-grounded practice in civil, commercial, arbitration, family and criminal matters. He currently serves as Standing Counsel to the Governor of Kerala, and senior Central Government Counsel before Kerala High Court & AFT, in addition to representing several major public sector undertakings, statutory bodies, government institutions and financial organisations. He is also empanelled as an Arbitrator with recognised institutional panels and is widely respected for his strategic approach, clear advisory strength and strong dispute-resolution capability. His practice spans multiple judicial forums, including the High Court, various Tribunals, Regulatory Authorities and Statutory Boards, with significant experience in service, insurance, banking and contractual disputes.",
//     "expertise": [
//       "Civil & Criminal Litigation",
//       "Arbitration & Mediation",
//       "Service Law & Administrative Matters",
//       "Banking & Insurance Law",
//       "Tribunal & Statutory Body Representation"
//     ],
//     "education": [
//       "B.A., LL.B."
//     ],
//     "experience": [
//       {
//         "year": "Present",
//         "title": "Standing Counsel to The Governor of Kerala",
//         "description": ""
//       },
//       {
//         "year": "Present",
//         "title": "Standing Counsel for United India Insurance Company",
//         "description": ""
//       },
//       {
//         "year": "Present",
//         "title": "Standing Counsel for Employees' Provident Fund Organisation (EPFO)",
//         "description": ""
//       },
//       {
//         "year": "Present",
//         "title": "Standing Counsel before Armed Forces Tribunal",
//         "description": ""
//       },
//       {
//         "year": "Present",
//         "title": "Standing Counsel for State Bank of India (SBI)",
//         "description": ""
//       },
//       {
//         "year": "Present",
//         "title": "Arbitrator – Kerala High Court Panel",
//         "description": ""
//       }
//     ],
//     "email": "prasanth996@gmail.com",
//     "phone": "+91 9447060299"
//   }
  
//   ,
//   {
//     "id": "s-gopakumaran-nair",
//     "name": "Dr. S. Gopakumaran Nair",
//     "role": "Chairman – Senior Advocate",
//     "image": null,
//     "bio": "Dr. S. Gopakumaran Nair, Senior Advocate, is the Chairman of the Firm and practices before the Supreme Court of India and the High Court of Kerala. He is a former Chairman of the Bar Council of India and the Bar Council of Kerala, and former President of the Kerala High Court Advocates’ Association. He is a leading authority in writ jurisdiction, academic governance, and statutory body litigation.",
//     "expertise": [
//       "Criminal Law",
//       "Constitutional & Administrative Law (Writ Jurisdiction)",
//       "University & Academic Governance Law",
//       "Consumer Law",
//       "Medical Negligence – Criminal & Consumer Matters"
//     ],
//     "education": null,
//     "experience": null,
//     "email": "sundaresangknair@gmail.com",
//     "phone": "+91 9717498937"
//   }
//   ,
//   {
//     id: "michael-rodriguez",
//     name: "Michael Rodriguez",
//     role: "Partner, Real Estate",
//     image: "/placeholder.svg",
//     bio: "Michael Rodriguez brings decades of experience in commercial real estate transactions, development projects, and property litigation. He has facilitated billions in real estate deals.",
//     expertise: ["Real Estate Transactions", "Property Development", "Zoning", "Landlord-Tenant"],
//     education: [
//       "J.D., NYU School of Law",
//       "B.A. Urban Planning, UCLA"
//     ],
//     experience: [
//       {
//         year: "2009-Present",
//         title: "Partner",
//         description: "Managing complex commercial real estate transactions"
//       }
//     ],
//     email: "m.rodriguez@premierLegal.com",
//     phone: "+1 (555) 123-4570"
//   },
//   {
//     id: "lisa-patel",
//     name: "Dr. Lisa Patel",
//     role: "Partner, Healthcare Law",
//     image: "/placeholder.svg",
//     bio: "Dr. Lisa Patel combines medical and legal expertise to serve healthcare providers, hospitals, and pharmaceutical companies. Her unique background enables comprehensive healthcare compliance solutions.",
//     expertise: ["Healthcare Compliance", "Medical Malpractice Defense", "HIPAA", "Healthcare Transactions"],
//     education: [
//       "J.D., Georgetown Law",
//       "M.D., Johns Hopkins School of Medicine",
//       "B.S. Biology, Duke University"
//     ],
//     experience: [
//       {
//         year: "2011-Present",
//         title: "Partner",
//         description: "Leading healthcare law practice"
//       }
//     ],
//     email: "l.patel@premierLegal.com",
//     phone: "+1 (555) 123-4571"
//   },
//   {
//     id: "david-wilson",
//     name: "David Wilson",
//     role: "Senior Associate, Family Law",
//     image: "/placeholder.svg",
//     bio: "David Wilson handles sensitive family law matters with compassion and professionalism. His approach combines legal expertise with understanding of the emotional aspects of family disputes.",
//     expertise: ["Divorce", "Child Custody", "Prenuptial Agreements", "Family Mediation"],
//     education: [
//       "J.D., University of Chicago Law School",
//       "B.A. Psychology, Northwestern University"
//     ],
//     experience: [
//       {
//         year: "2015-Present",
//         title: "Senior Associate",
//         description: "Family law practice with focus on complex divorce cases"
//       }
//     ],
//     email: "d.wilson@premierLegal.com",
//     phone: "+1 (555) 123-4572"
//   },
//   {
//     id: "amanda-foster",
//     name: "Amanda Foster",
//     role: "Associate, Tax Law",
//     image: "/placeholder.svg",
//     bio: "Amanda Foster provides strategic tax planning and compliance services for individuals and businesses. Her expertise helps clients navigate complex tax regulations.",
//     expertise: ["Tax Planning", "IRS Disputes", "Estate Planning", "Tax Compliance"],
//     education: [
//       "J.D., University of Virginia Law School",
//       "LL.M. Taxation, NYU",
//       "B.S. Accounting, Penn State"
//     ],
//     experience: [
//       {
//         year: "2017-Present",
//         title: "Associate",
//         description: "Tax law and estate planning"
//       }
//     ],
//     email: "a.foster@premierLegal.com",
//     phone: "+1 (555) 123-4573"
//   },
//   {
//     id: "robert-kim",
//     name: "Robert Kim",
//     role: "Associate, Environmental Law",
//     image: "/placeholder.svg",
//     bio: "Robert Kim advises clients on environmental compliance, sustainability initiatives, and regulatory matters. His work helps businesses balance growth with environmental responsibility.",
//     expertise: ["Environmental Compliance", "Sustainability", "Climate Law", "Natural Resources"],
//     education: [
//       "J.D., UC Berkeley Law",
//       "M.S. Environmental Science, Stanford",
//       "B.S. Environmental Studies, Yale"
//     ],
//     experience: [
//       {
//         year: "2018-Present",
//         title: "Associate",
//         description: "Environmental law and regulatory compliance"
//       }
//     ],
//     email: "r.kim@premierLegal.com",
//     phone: "+1 (555) 123-4574"
//   }
// ];
