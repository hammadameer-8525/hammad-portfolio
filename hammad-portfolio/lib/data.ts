export const profile = {
  name: "Hammad Ameer",
  role: "Software Engineering Student",
  location: "Lahore, Pakistan",
  email: "gkhokhar826@gmail.com",
  phone: "+92 316 6670632",
  linkedin: "https://linkedin.com/in/hammad-ameer-60070b375",
  linkedinLabel: "linkedin.com/in/hammad-ameer-60070b375",
  university: "University of Central Punjab (UCP)",
  roles: [
    "SOFTWARE ENGINEERING STUDENT",
    "AI ENTHUSIAST",
    "PROBLEM SOLVER",
    "ASPIRING FULL-STACK DEVELOPER",
  ],
  tagline:
    "I build practical software, explore intelligent systems, and transform ideas into meaningful digital experiences.",
};

export const stats = [
  { value: "04", label: "Semesters Completed" },
  { value: "01", label: "Programming Competition Win" },
  { value: "06+", label: "Software & Academic Projects" },
  { value: "AI", label: "Certified Training" },
];

export type SkillCategory = "Languages" | "Development" | "Tools" | "Computer Science" | "AI";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "HTML5", category: "Languages" },
  { name: "CSS3", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "GUI Development", category: "Development" },
  { name: "OOP", category: "Development" },
  { name: "IntelliJ IDEA", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "MySQL Workbench", category: "Tools" },
  { name: "Data Structures & Algorithms", category: "Computer Science" },
  { name: "Database Management Systems", category: "Computer Science" },
  { name: "Software Requirements Engineering", category: "Computer Science" },
  { name: "AI Foundations", category: "AI" },
];

export const skillCategories: { key: SkillCategory; color: string }[] = [
  { key: "Languages", color: "#ff8a00" },
  { key: "Development", color: "#ff4d3d" },
  { key: "Tools", color: "#f5c76b" },
  { key: "Computer Science", color: "#30d6a3" },
  { key: "AI", color: "#ffb000" },
];

export interface Project {
  id: string;
  number: string;
  title: string;
  tech: string[];
  description: string;
  details: {
    problem: string;
    solution: string;
    features: string[];
  };
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "student-performance",
    number: "01",
    title: "Student Performance Management System",
    tech: ["Java", "SQL"],
    description:
      "Desktop application for managing and analyzing student grades, attendance, and academic performance with relational database integration.",
    details: {
      problem:
        "Manually tracking student grades and attendance across a department is slow and error-prone.",
      solution:
        "A desktop application with custom data models and a local relational database for efficient query filtering and reporting.",
      features: [
        "Custom data models for grades and attendance",
        "Integrated relational database",
        "Transactional reporting",
      ],
    },
  },
  {
    id: "art-gallery",
    number: "02",
    title: "Art Gallery Management System",
    tech: ["Java", "OOP"],
    description:
      "Interactive software system for managing artwork inventory, artists, and exhibition schedules using object-oriented programming principles.",
    details: {
      problem:
        "Galleries need a structured way to track inventory, artist profiles, and exhibition schedules.",
      solution:
        "An OOP-driven platform using inheritance and polymorphism with a custom GUI for a cohesive admin experience.",
      features: [
        "Artwork inventory tracking",
        "Artist profile management",
        "Custom GUI framework",
      ],
    },
  },
  {
    id: "chatbot",
    number: "03",
    title: "Intelligent Chat Bot",
    tech: ["Python", "AI Fundamentals"],
    description:
      "A script-based chatbot using natural-language response logic, pattern matching, and extensible contextual rules.",
    details: {
      problem:
        "Users need a lightweight, interactive way to query a contextual knowledge base.",
      solution:
        "A script-based chatbot combining pattern matching with extensible parsing rules for contextual responses.",
      features: [
        "Natural-language response logic",
        "Pattern matching engine",
        "Extensible contextual rules",
      ],
    },
  },
  {
    id: "auth-login",
    number: "04",
    title: "Secure User Authentication & Login Page",
    tech: ["HTML", "CSS", "Backend Logic"],
    description:
      "Responsive authentication interface with input validation and secure credential-handling concepts.",
    details: {
      problem:
        "Login flows need to be both secure and pleasant to use across devices.",
      solution:
        "A responsive front-end with active form validation and secure credential comparison routines.",
      features: [
        "Active visual form validation",
        "Secure input handling",
        "Responsive layout",
      ],
    },
  },
  {
    id: "health-share-bridge",
    number: "05",
    title: "Health Share Bridge System",
    tech: ["Software Engineering", "SRS", "UML"],
    description:
      "A medicine donation and distribution platform specification featuring 18 detailed use cases, activity diagrams, sequence diagrams, use-case diagrams, and validation test suites.",
    details: {
      problem:
        "Medicine donation and distribution needs a rigorously specified system before development begins.",
      solution:
        "A complete Software Requirements Specification with 18 use cases mapped through activity, sequence, and use-case diagrams.",
      features: [
        "18 detailed use cases",
        "Activity, sequence & use-case diagrams",
        "Positive and negative validation test suites",
      ],
    },
  },
  {
    id: "personal-portfolio",
    number: "06",
    title: "Personal Portfolio Website",
    tech: ["HTML5", "CSS3", "Modern Web Development"],
    description:
      "Responsive portfolio designed to present technical skills, projects, education, and professional development.",
    details: {
      problem:
        "Technical work and skills need a clear, professional home on the web.",
      solution:
        "A responsive personal portfolio summarizing projects, skills, and engineering objectives.",
      features: [
        "Fully responsive layout",
        "Project and skills showcase",
        "Deployment-ready structure",
      ],
    },
  },
];

export const education = [
  {
    degree: "BS Software Engineering",
    institution: "University of Central Punjab",
    location: "Lahore, Pakistan",
    period: "October 2024 – 2028 (Expected)",
    status: "4th Semester Completed",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Programming Fundamentals",
      "Artificial Intelligence Foundations",
      "Software Engineering",
    ],
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Punjab College",
    location: "Okara, Pakistan",
    period: "Completed",
    status: "Intermediate",
    coursework: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    degree: "Matriculation — Science",
    institution: "Govt. High School 1/4.L",
    location: "Okara, Pakistan",
    period: "Completed",
    status: "Matric",
    coursework: ["Mathematics", "Physics", "Chemistry", "Biology"],
  },
];

export const certifications = [
  {
    title: "Artificial Intelligence Certification",
    issuer: "NAVTTC — National Industrial Training",
    provider: "Microtech Solutions, Lahore",
    focus: [
      "AI Foundations",
      "Machine Learning Principles",
      "Python",
      "Practical Data Applications",
    ],
  },
  {
    title: "Microsoft Office Professional Training",
    issuer: "6-Month Professional Course",
    provider: "Computer & Office Productivity Training",
    focus: [
      "Microsoft Word",
      "Microsoft Excel",
      "PowerPoint",
      "Office Productivity",
    ],
  },
];
export const achievement = {
  title: "1st Place — Speed Programming Competition",
  institution: "University of Central Punjab",
  description:
    "Secured first place in a university programming competition by solving algorithmic and analytical challenges under time pressure.",
};

export const journey = [
  "Programming Fundamentals",
  "Object-Oriented Programming",
  "Databases",
  "Data Structures & Algorithms",
  "Software Engineering",
  "Artificial Intelligence",
  "Full-Stack Development",
];

export const navLinks = [
  { label: "Home", href: "#home", concept: "The Core" },
  { label: "About", href: "#about", concept: "The Engineer" },
  { label: "Skills", href: "#skills", concept: "The System" },
  { label: "Projects", href: "#projects", concept: "The Builds" },
  { label: "Education", href: "#education", concept: "The Foundation" },
  { label: "Certificates", href: "#certificates", concept: "The Evolution" },
  { label: "Achievements", href: "#achievements", concept: "The Proof" },
  { label: "Contact", href: "#contact", concept: "The Next Connection" },
];
