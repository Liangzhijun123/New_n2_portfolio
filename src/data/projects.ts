import picOne from "../assets/pic1.svg";
import picTwo from "../assets/pic2.svg";
import picThree from "../assets/pic3.svg";
import picFour from "../assets/pic4.svg";
import picFive from "../assets/pic5.svg";
import picSix from "../assets/pic6.svg";
import picSeven from "../assets/pic7.svg";
import picEight from "../assets/pic_8.svg";
import picNine from "../assets/lifework.svg";
import pic11 from "../assets/pic11.svg";
import pic12 from "../assets/pic12.svg";
import AboutMe from "../assets/AboutMe.png";
import CanIDo from "../assets/CanIDo.png";
import contactme from "../assets/contactme.png";

export type ProjectItem = {
  picture: string;
  project: string;
  year?: string;
  type?: string;
  link?: string;
  short?: string;
  concept?: string;
  tech?: string[];
  screenshots?: string[];
  role?: string;
  duration?: string;
  outcome?: string;
  process?: string[];
};

const projects: ProjectItem[] = [
  {
    picture: picOne,
    project: "E-commerce",
    year: "2024",
    type: "Group Project",
    link: "https://ecommerce-full-stack-jet.vercel.app/",
    short: "A full-stack e-commerce site designed for clarity and fast checkout.",
    concept: "Focus on large product imagery, clear CTAs, and accessible checkout flows.",
    tech: ["React", "Node.js", "MongoDB"],
    screenshots: [picOne],
    role: "Frontend & UI",
    duration: "4 months",
    outcome: "Improved checkout flow and conversion-focused layout.",
    process: ["Research", "Wireframes", "Hi-fi design", "Handoff"],
  },
  {
    picture: picTwo,
    project: "Alternative version of portfolio",
    year: "2024",
    type: "Individual Project",
    link: "https://portfolio-liart-iota.vercel.app/",
    short: "Exploring typography, motion, and modular grid systems.",
    concept: "Layered typography and soft motion to increase scannability.",
    tech: ["React", "Vite", "TailwindCSS"],
    screenshots: [picTwo, AboutMe, CanIDo, contactme],
    role: "Design + Implementation",
    duration: "2 weeks",
    outcome: "Prototype showcasing motion and type scale patterns.",
    process: ["Ideation", "Type experiments", "Prototype"],
  },
  {
    picture: picThree,
    project: "Smoothie",
    year: "2024",
    type: "Individual Project",
    link: "https://www.figma.com/proto/dqXTuN0fxFodAwFQkaQQLZ/smoothies?node-id=107-697&starting-point-node-id=107%3A697&t=Ng6C5VgiM058y17u-1",
    short: "Landing & menu concept for a smoothie brand with playful colors.",
    concept: "Brand-first approach with scannable product cards and playful accents.",
    tech: ["Figma", "Design System"],
    screenshots: [picThree],
    role: "Product Designer",
    duration: "3 weeks",
    outcome: "Clickable prototype used for stakeholder feedback.",
    process: ["Brand exploration", "Component library", "Prototype"],
  },
  {
    picture: picFour,
    project: "Management Airport in Japan",
    year: "2024",
    type: "Individual Project",
    link: "https://www.figma.com/proto/RtqZg8YmHdXJrNs6naLowW/management-app-for-airport-in-japan?node-id=2-2&t=wBeyt1JY8PNttAjp-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2",
    short: "Operations dashboard concept for airport staff focusing on visibility.",
    concept: "Data-driven dashboard with progressive disclosure and alerts.",
    tech: ["Figma", "UX Research"],
    screenshots: [picFour],
    role: "UX Designer",
    duration: "1 month",
    outcome: "Concept validated with stakeholders via walkthroughs.",
    process: ["Interviews", "Flows", "Prototype"],
  },
  {
    picture: picFive,
    project: "Eco-Luxury Hotel",
    year: "2024",
    type: "Individual Project",
    link: "https://www.figma.com/proto/oRICFBb36yceOWdy5s49cB/Eco-Luxury-Hotel?node-id=0-3&t=CZIZUp0WgJwijrB3-1&scaling=min-zoom&page-id=0%3A1",
    short: "Brand & booking flow visuals balancing luxury with sustainability.",
    concept: "Earthy palette and sustainability badges to communicate impact.",
    tech: ["Figma", "Branding"],
    screenshots: [picFive],
    role: "Visual Designer",
    duration: "3 weeks",
    outcome: "Brand prototype and booking visuals.",
    process: ["Moodboards", "Visual system", "Booking flow"],
  },
  {
    picture: picSix,
    project: "Design System Guide",
    year: "2024",
    type: "Individual Project",
    link: "https://www.figma.com/design/ZkcODW9OMxXMzQBXmDFHwL/Design-System-Guide?node-id=0-1&t=CoMTm0isnt5PYVat-1",
    short: "Design tokens and component examples to speed up handoffs.",
    concept: "Define tokens and examples for consistent cross-team use.",
    tech: ["Figma", "Design Tokens"],
    screenshots: [picSix],
    role: "Design Systems",
    duration: "2 months",
    outcome: "Reusable tokens and documented components.",
    process: ["Token audit", "Component library", "Docs"],
  },
  {
    picture: picSeven,
    project: "Manga Landpage Design",
    year: "2024",
    type: "Individual Project",
    link: "https://www.figma.com/proto/oJ7ZacNRrHJF5yApM75hGN/manga?node-id=33-93&t=FDBZLPpHpTB9K1hp-1&scaling=scale-down&page-id=0%3A1",
    short: "High-contrast landing inspired by manga panel layouts.",
    concept: "Bold type and hero illustrations mimic manga panels.",
    tech: ["Figma", "Illustration"],
    screenshots: [picSeven],
    role: "Illustration & UI",
    duration: "2 weeks",
    outcome: "Landing visuals and hero art.",
    process: ["Illustration", "Layout", "Prototype"],
  },
  {
    picture: picEight,
    project: "FoodieOrder - Online Food Ordering",
    year: "2024",
    type: "Individual Project",
    link: "https://www.figma.com/proto/CbXtLVYtZrnkUQHlwTkVKO/FoodieOrder---Online-Food-Ordering?node-id=59-58&t=3avEhp40FprRYU5c-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=59%3A58",
    short: "Ordering flow & menu design with reduced friction for users.",
    concept: "Persistent order summary and clear dietary filters for quick ordering.",
    tech: ["Figma", "UX"],
    screenshots: [picEight],
    role: "Product Designer",
    duration: "3 weeks",
    outcome: "Improved menu scannability and ordering flow.",
    process: ["User flows", "Prototype", "Testing"],
  },
  {
    picture: picNine,
    project: "LifeWork - Job Agency",
    year: "2024",
    type: "Internship Individual Project",
    link: "https://www.figma.com/proto/12VF8vOuWxQJnH4ZyD99P9/internship-project---lifework?node-id=0-1963&t=kWvuOvgwwFAg0c43-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    short: "A recruiting platform focused on matching and onboarding.",
    concept: "Recommendations-first homepage and streamlined candidate profiles.",
    tech: ["Figma", "Research"],
    screenshots: [picNine],
    role: "Intern - Product",
    duration: "Internship",
    outcome: "Match-first homepage and onboarding flow.",
    process: ["Research", "Wireframes", "Prototype"],
  },
  {
    picture: pic11,
    project: "Casino",
    year: "2024",
    type: "Individual Project",
    link: "https://www.figma.com/proto/q66IPombEfO2IjlLXQAWO2/casino?node-id=1-2&node-type=frame&t=UeAP7Nc1KSDSGz7S-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    short: "Playful landing and onboarding micro-interactions.",
    concept: "Bright UI with progressive onboarding and clear categories.",
    tech: ["Figma", "Animation"],
    screenshots: [pic11],
    role: "UI Designer",
    duration: "2 weeks",
    outcome: "Landing concept and onboarding microcopy.",
    process: ["Concept", "Micro-interactions", "Prototype"],
  },
  {
    picture: pic12,
    project: "Milestone Group Logistics",
    year: "2024",
    type: "Individual Project",
    link: "https://www.figma.com/proto/3Kd05YVZDWfcsbxv8dBcS8/Milestone-Group-Logistics?node-id=1-2&node-type=frame&t=jTGPwK1YrP1gwrE3-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    short: "Dashboard & tracking concept for logistics with alerting patterns.",
    concept: "Real-time visibility, simple alerts, and prioritized exceptions.",
    tech: ["Figma", "Data Viz"],
    screenshots: [pic12],
    role: "UX & Data Viz",
    duration: "1 month",
    outcome: "Prototype dashboard with alerting patterns.",
    process: ["Requirements", "Dashboards", "Prototype"],
  },
];

export default projects;
// (Removed duplicate block) — single canonical export above
