export const profile = {
  name: "Hammad Ameer", role: "Software Engineering Student", location: "Lahore, Pakistan",
  email: "gkhokhar826@gmail.com", phone: "+92 316 6670632",
  github: "https://github.com/hammadameer-8525",
  linkedin: "https://linkedin.com/in/hammad-ameer-60070b375",
  linkedinLabel: "linkedin.com/in/hammad-ameer-60070b375",
  university: "University of Central Punjab (UCP)",
  tagline: "I build practical software, explore intelligent systems, and transform ideas into meaningful digital experiences.",
};
export const stats = [{value:"04",label:"Semesters Completed"},{value:"01",label:"Programming Competition Win"},{value:"06+",label:"Software & Academic Projects"},{value:"AI",label:"Certified Training"}];
export type SkillCategory = "Frontend"|"Backend"|"Mobile"|"Database"|"Tools"|"Others";
export interface Skill { name:string; category:SkillCategory }
export const skills: Skill[] = [
  {name:"HTML5",category:"Frontend"},{name:"CSS3",category:"Frontend"},{name:"JavaScript",category:"Frontend"},
  {name:"Java",category:"Backend"},{name:"Python",category:"Backend"},{name:"OOP",category:"Backend"},
  {name:"Mobile App Development",category:"Mobile"},{name:"GUI Development",category:"Mobile"},
  {name:"SQL",category:"Database"},{name:"Database Management Systems",category:"Database"},{name:"MySQL Workbench",category:"Database"},
  {name:"IntelliJ IDEA",category:"Tools"},{name:"VS Code",category:"Tools"},{name:"Git & GitHub",category:"Tools"},
  {name:"Data Structures & Algorithms",category:"Others"},{name:"Software Requirements Engineering",category:"Others"},{name:"AI Foundations",category:"Others"},
];
export const skillCategories: SkillCategory[] = ["Frontend","Backend","Mobile","Database","Tools","Others"];
export type ProjectImageType = "website" | "dashboard" | "mobile" | "project-cover";
export type ProjectVisualType = "real" | "concept";
export interface Project { id:string; number:string; title:string; tech:string[]; description:string; status:string; featured?:boolean; image?:string; imageAlt?:string; imageType?:ProjectImageType; visualType?:ProjectVisualType; details?:{problem:string;solution:string;features:string[]}; githubUrl?:string; liveUrl?:string; apkUrl?:string; apkFile?:string }
export const projects: Project[] = [
  {id:"skyloop-brothers",number:"01",title:"SKYLOOP BROTHERS LTD",tech:[],status:"LIVE / PRODUCTION",featured:true,image:"/images/projects/skyloop.webp",imageAlt:"Real capture of the SKYLOOP BROTHERS LTD website",imageType:"website",visualType:"real",description:"Publicly deployed business website for SKYLOOP BROTHERS LTD.",liveUrl:"https://skyloopbrothers.co.uk"},
  {id:"arcart",number:"02",title:"ARCART LTD",tech:[],status:"LIVE / PRODUCTION",featured:true,image:"/images/projects/arcart.webp",imageAlt:"Real capture of the ARCART LTD public website",imageType:"website",visualType:"real",description:"Publicly deployed business website for ARCART LTD.",liveUrl:"https://arcartltd.co.uk"},
  {id:"stockpilot",number:"03",title:"StockPilot",tech:[],status:"IN DEVELOPMENT",image:"/images/projects/stockpilot-concept-v2.webp",imageAlt:"Concept visual for the StockPilot inventory automation SaaS",imageType:"dashboard",visualType:"concept",description:"An inventory automation SaaS concept for monitoring products, stock activity, and suppliers."},
  {id:"studymate-ai",number:"04",title:"StudyMate AI",tech:[],status:"CONCEPT IN DEVELOPMENT",image:"/images/projects/studymate-concept-v2.webp",imageAlt:"Concept visual for the StudyMate AI mobile study planner",imageType:"mobile",visualType:"concept",description:"A mobile study companion concept for planning subjects, tracking progress, and exploring AI-assisted learning."},
  {id:"ownchat",number:"05",title:"OwnChat",tech:[],status:"IN DEVELOPMENT",image:"/images/projects/ownchat-concept-v2.webp",imageAlt:"Concept visual for the OwnChat messaging platform",imageType:"project-cover",visualType:"concept",description:"An original messaging product concept spanning conversation lists, direct chat, and presence across desktop and mobile."},
];
export const academicProjects: Project[] = [
  {id:"student-performance",number:"A1",title:"Student Performance Management System",tech:["Java","SQL"],status:"ACADEMIC BUILD",description:"Desktop application for managing and analyzing student grades, attendance, and academic performance with relational database integration.",details:{problem:"Manually tracking student grades and attendance across a department is slow and error-prone.",solution:"A desktop application with custom data models and a local relational database for efficient query filtering and reporting.",features:["Custom data models for grades and attendance","Integrated relational database","Transactional reporting"]}},
  {id:"art-gallery",number:"A2",title:"Art Gallery Management System",tech:["Java","OOP"],status:"ACADEMIC BUILD",description:"Interactive software system for managing artwork inventory, artists, and exhibition schedules using object-oriented programming principles.",details:{problem:"Galleries need a structured way to track inventory, artist profiles, and exhibition schedules.",solution:"An OOP-driven platform using inheritance and polymorphism with a custom GUI for a cohesive admin experience.",features:["Artwork inventory tracking","Artist profile management","Custom GUI framework"]}},
  {id:"chatbot",number:"A3",title:"Intelligent Chat Bot",tech:["Python","AI Fundamentals"],status:"ACADEMIC BUILD",description:"A script-based chatbot using natural-language response logic, pattern matching, and extensible contextual rules.",details:{problem:"Users need a lightweight, interactive way to query a contextual knowledge base.",solution:"A script-based chatbot combining pattern matching with extensible parsing rules for contextual responses.",features:["Natural-language response logic","Pattern matching engine","Extensible contextual rules"]}},
  {id:"auth-login",number:"A4",title:"Secure User Authentication & Login Page",tech:["HTML","CSS","Backend Logic"],status:"ACADEMIC BUILD",description:"Responsive authentication interface with input validation and secure credential-handling concepts.",details:{problem:"Login flows need to be both secure and pleasant to use across devices.",solution:"A responsive front-end with active form validation and secure credential comparison routines.",features:["Active visual form validation","Secure input handling","Responsive layout"]}},
  {id:"health-share-bridge",number:"A5",title:"Health Share Bridge System",tech:["Software Engineering","SRS","UML"],status:"ACADEMIC BUILD",description:"A medicine donation and distribution platform specification featuring 18 detailed use cases, diagrams, and validation test suites.",details:{problem:"Medicine donation and distribution needs a rigorously specified system before development begins.",solution:"A complete Software Requirements Specification with 18 use cases mapped through activity, sequence, and use-case diagrams.",features:["18 detailed use cases","Activity, sequence & use-case diagrams","Positive and negative validation test suites"]}},
];
export const education={degree:"BS Software Engineering",institution:"University of Central Punjab",location:"Lahore, Pakistan",period:"October 2024 – 2028 (Expected)",status:"4th Semester Completed",coursework:["Data Structures & Algorithms","Object-Oriented Programming","Database Systems","Programming Fundamentals","Artificial Intelligence Foundations","Software Engineering"]};
export const certifications=[{title:"IELTS Mastery Course",issuer:"University of Central Punjab (UCP)"},{title:"Agentic AI Course",issuer:"University of Central Punjab (UCP)"}];
export const achievement={title:"1st Place — Speed Programming Competition",institution:"University of Central Punjab",description:"Secured first place in a university programming competition by solving algorithmic and analytical challenges under time pressure."};
export const journey=["Programming Fundamentals","Object-Oriented Programming","Databases","Data Structures & Algorithms","Software Engineering","Artificial Intelligence","Full-Stack Development"];
export const navLinks=[{number:"01",label:"Home",href:"#home"},{number:"02",label:"About",href:"#about"},{number:"03",label:"Projects",href:"#projects"},{number:"04",label:"Skills",href:"#stack"},{number:"05",label:"Education",href:"#education"},{number:"06",label:"Certificates",href:"#certificates"},{number:"07",label:"Contact",href:"#contact"}];
export const stackStrip=["Java","Python","JavaScript","SQL","HTML5","CSS3","Git & GitHub"];
