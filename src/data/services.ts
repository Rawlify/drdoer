import { ServiceItem, FeatureItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    title: "Website & Software Development",
    shortDescription:
      "Modern static websites and full-stack web applications with secure backends, custom admin panels, and domain mapping. Built in collaboration with Rawlify starting from 20,000 LKR ($70 USD).",
    fullDescription:
      "We build high-performance, modern, and SEO-optimized websites and custom software solutions in collaboration with Rawlify. Whether you need a sleek static business landing page, a portfolio, or a dynamic web application with a secure backend, administrative control panel, and custom domain mapping, we deliver production-ready software starting from just 20,000 LKR ($70 USD).",
    image: "/assets/software-development.jpg",
    imageAlt: "Website and Software Development in collaboration with Rawlify",
    partner: "In Collaboration with Rawlify",
    partnerLogo: "/assets/rawlify-logo.png",
    pricing: "Starting from 20,000 LKR ($70 USD)",
    badge: "Tech & Software",
    features: [
      "Static Websites & Modern Landing Pages",
      "Full-Stack Web Apps with Secure Backend APIs",
      "Custom Admin Panels & Content Dashboards",
      "Custom Domain Mapping (.com, .lk, etc.) & DNS Setup",
      "Mobile-First Responsive Design & Ultra-Fast Loading",
      "Transparent Pricing Starting from 20,000 LKR ($70 USD)",
    ],
    subjects: [
      "Static Websites",
      "Full-Stack Web Apps",
      "Custom Admin Panels",
      "Domain Mapping & DNS",
      "API & Database Integration",
      "Rawlify Collaboration",
    ],
    turnaround: "Fast 3–7 business days delivery",
  },
  {
    id: "assignment-services",
    title: "Assignment Services",
    shortDescription:
      "Our assignment services cover a wide range of subjects, including Management, HR, Logistics, and more. We help you excel in your academic journey by providing high-quality solutions tailored to your specific needs.",
    fullDescription:
      "Our assignment services cover a wide range of subjects, including Management, HR, Logistics, Marketing, International Relations, Business Studies, and more. We help you excel in your academic journey by providing high-quality solutions tailored to your specific needs.",
    image: "/assets/assignments.jpg",
    imageAlt: "Assignment Writing and Academic Services",
    badge: "Academic Support",
    features: [
      "100% Original & Plagiarism-Free Content",
      "Strict Adherence to Marking Rubrics & Formatting Styles",
      "In-Depth Research & Accurate Citations (APA, Harvard, etc.)",
      "Free Revisions to Ensure Complete Satisfaction",
      "Confidential & Secure Service Handling",
    ],
    subjects: [
      "Management",
      "Human Resources (HR)",
      "Logistics & Supply Chain",
      "Marketing & Sales",
      "International Relations",
      "Business Studies",
      "Finance & Accounting",
      "General Academic Papers",
    ],
    turnaround: "Flexible timelines tailored to your deadline",
  },
  {
    id: "graphic-design",
    title: "Graphic Design Services",
    shortDescription:
      "Explore our graphic design services, where creativity meets business needs. We specialize in creating eye-catching advertisements, engaging social media posts, and stunning business card designs.",
    fullDescription:
      "Explore our graphic design services, where creativity meets business needs. We specialize in creating eye-catching advertisements, engaging social media posts, stunning business card designs, posters, and promotional graphics that elevate your brand identity.",
    image: "/assets/design.jpg",
    imageAlt: "Professional Graphic Design Services",
    badge: "Creative & Branding",
    features: [
      "Eye-Catching Advertisement Designs",
      "Engaging Social Media Post Graphics",
      "Stunning Business Card & Stationery Layouts",
      "Custom Brand Visuals & Promotional Flyers",
      "High-Resolution Print & Web-Ready Formats",
    ],
    subjects: ["Social Media Graphics", "Marketing Collateral", "Business Cards", "Banners & Posters"],
    turnaround: "Fast 1-3 business days delivery",
  },
  {
    id: "cv-cover-letters",
    title: "Professional CV & Cover Letters",
    shortDescription:
      "Your resume and cover letter play a crucial role in your career. Let us help you stand out from the competition with our professional CV and cover letter services, showcasing your skills effectively.",
    fullDescription:
      "Your resume and cover letter play a crucial role in your career. Let us help you stand out from the competition with our professional CV and cover letter services, showcasing your skills effectively and positioning you as the ideal candidate for top opportunities.",
    image: "/assets/cv images.png",
    imageAlt: "Professional CV and Cover Letter Creation",
    badge: "Career Solutions",
    features: [
      "ATS-Friendly Modern Layouts & Structure",
      "Role-Targeted Impact-Driven Content",
      "Compelling & Personalized Cover Letter Writing",
      "Highlighting Core Strengths, Experience & Achievements",
      "Multiple Format Options (PDF & Editable Doc)",
    ],
    turnaround: "Standard 2–4 business days delivery",
  },
  {
    id: "sinhala-typing-translation",
    title: "Sinhala Typing and Translation",
    shortDescription:
      "Accurate communication is key. We offer expert Sinhala typing and translation services to bridge language gaps and convey your message effectively to your target audience.",
    fullDescription:
      "Accurate communication is key. We offer expert Sinhala typing and translation services to bridge language gaps and convey your message effectively to your target audience with cultural nuance and grammatical precision.",
    image: "/assets/typing.jpg",
    imageAlt: "Sinhala Typing and Translation Services",
    badge: "Language & Translation",
    features: [
      "High-Accuracy Sinhala Typing (Unicode & Legacy Fonts)",
      "English to Sinhala & Sinhala to English Translation",
      "Academic, Legal, Commercial & Personal Document Handling",
      "Fast Turnaround & Strict Proofreading",
      "Clean, Formatted & Printable Document Outputs",
    ],
    turnaround: "Prompt delivery based on word count",
  },
];

export const featuresData: FeatureItem[] = [
  {
    id: "plagiarism-free",
    title: "Plagiarism-Free & Clean Code",
    description:
      "We take pride in delivering original, verified academic content and modern, high-standard software architecture crafted from scratch.",
    icon: "ShieldCheck",
  },
  {
    id: "on-time-delivery",
    title: "On-Time Delivery",
    description:
      "Our commitment to on-time delivery ensures that your assignments, resumes, designs, and websites reach you exactly when you need them.",
    icon: "Clock",
  },
  {
    id: "expert-solutions",
    title: "Expert Solutions & Tech Stack",
    description:
      "Customized solutions tailored to match your unique requirements—from academic writing to full-stack website engineering powered by Rawlify.",
    icon: "Award",
  },
  {
    id: "content-strategy",
    title: "Strategic Growth & Domain Setup",
    description:
      "Beyond basic execution, we provide strategic guidance, custom domain mapping, and targeted insights that help your projects succeed.",
    icon: "Compass",
  },
];
