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
import smoothie1 from "../assets/smoothie1.png";
import smoothie2 from "../assets/smoothie2.png";
import smoothie3 from "../assets/smoothie3.png";
import smoothie4 from "../assets/smoothie4.png";
import smoothie5 from "../assets/smoothie5.png";
import smoothie6 from "../assets/smoothie6.png";
import smoothie7 from "../assets/smoothie7.png";
import smoothie8 from "../assets/smoothie8.png";
import smmothie9 from "../assets/smoothie9.png";
import smoothie10 from "../assets/smoothie10.png";
import soothie11 from "../assets/smoothie11.png";
import travel1 from "../assets/travel1.png";
import travel2 from "../assets/travel2.png";
import travel3 from "../assets/travel3.png";
import travel4 from "../assets/travel4.png";
import travel5 from "../assets/travel5.png";
import travel6 from "../assets/travel6.png";
import travel7 from "../assets/travel7.png";
import travel8 from "../assets/travel8.png";
import travel9 from "../assets/travel9.png";
import travel10 from "../assets/travel10.png";
import eco1 from "../assets/eco1.png";
import eco2 from "../assets/eco2.png";
import eco3 from "../assets/eco3.png";
import anime1 from "../assets/anime1.png";
import anime2 from "../assets/anime2.png";
import anime3 from "../assets/anime3.png";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import food5 from "../assets/food5.png";
import food6 from "../assets/food6.png";
import food7 from "../assets/food7.png";
import food8 from "../assets/food8.png";
import food9 from "../assets/food9.png";
import food10 from "../assets/food10.png";
import life1 from "../assets/life1.png";
import life2 from "../assets/life2.png";
import life4 from "../assets/life4.png";
import life5 from "../assets/life5.png";
import life6 from "../assets/life6.png";
import life7 from "../assets/life7.png";
import life8 from "../assets/life8.png";
import life9 from "../assets/life9.png";
import life10 from "../assets/life10.png";
import casino1 from "../assets/casino1.png";
import casino2 from "../assets/casino2.png";
import mile1 from "../assets/mile1.png";
import mile2 from "../assets/mile2.png";
import mile3 from "../assets/mile3.png";
import mile4 from "../assets/mile4.png";
import mile5 from "../assets/mile5.png";



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
    screenshots: [picThree, smoothie1, smoothie2, smoothie3, smoothie4, smoothie5, smoothie6, smoothie7, smoothie8, smmothie9, smoothie10, soothie11],
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
    screenshots: [picFour, travel1, travel2, travel3, travel4, travel5, travel6, travel7, travel8, travel9, travel10],
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
    screenshots: [picFive, eco1, eco2, eco3],
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
    screenshots: [picSeven, anime1, anime2, anime3],
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
    screenshots: [picEight, food1, food2, food3, food4, food5, food6, food7, food8, food9, food10],
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
    screenshots: [picNine, life1, life2, life4, life5, life6, life7, life8, life9, life10],
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
    screenshots: [pic11, casino1, casino2],
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
    screenshots: [pic12, mile1, mile2, mile3, mile4, mile5],
    role: "UX & Data Viz",
    duration: "1 month",
    outcome: "Prototype dashboard with alerting patterns.",
    process: ["Requirements", "Dashboards", "Prototype"],
  },
];

export default projects;

