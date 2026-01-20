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
import crochet1 from "../assets/crochet1.png";
import crochet2 from "../assets/crochet2.png";
import crochet3 from "../assets/crochet3.png";
import crochet4 from "../assets/crochet4.png";
import crochet5 from "../assets/crochet5.png";
import crochet6 from "../assets/crochet6.png";
import crochet7 from "../assets/crochet7.png";
import crochet8 from "../assets/crochet8.png";
import crochet9 from "../assets/crochet9.png";
import crochet10 from "../assets/crochet10.png";



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
  problem?: string;
  userQuotes?: string[];
  solution?: string;
  features?: { title: string; lowfi?: string }[];
  summary?: string;
  ranking?: number;
};

const projects: ProjectItem[] = [
  {
    picture: crochet1,
    project: "Crochet Cuteness",
    year: "2025-2026",
    type: "Personal Design Project",
    link: "https://www.figma.com/design/7xJNdNuXfmmeVSLFXG7AFu/shop?t=dln73GrPbyB5q0nV-0",
    short: "A design platform for the crochet community with patterns, tutorials, and creator engagement.",
    concept: "Warm pink and white palette with playful loading animations and community engagement features.",
    tech: ["Figma", "UX Research"],
    screenshots: [crochet1, crochet2, crochet3, crochet4, crochet5, crochet6, crochet7, crochet8, crochet9, crochet10],
    role: "Product Designer",
    duration: "Ongoing",
    outcome: "Platform concept with engagement and monetization strategy.",
    process: ["Community Research", "Pain Point Analysis", "Solution Design", "Feature Planning"],
    problem: "Crochet community members found patterns too expensive and lacked step-by-step creator walkthroughs.",
    userQuotes: [
      "Patterns are too expensive without proper guidance.",
      "I want to connect directly with creators for pattern testing feedback."
    ],
    solution: "Created a platform where users purchase patterns, watch guided tutorials, and engage with creators for feedback.",
    features: [
      { title: "Pattern Marketplace", lowfi: "User and creator pattern listings with pricing" },
      { title: "Video Tutorials", lowfi: "Step-by-step guided walkthroughs by pattern creators" },
      { title: "Daily Rewards", lowfi: "Calendar-based coin claims and points system" },
      { title: "Creator Messaging", lowfi: "Direct messaging between users and creators" },
      { title: "Community Competitions", lowfi: "In-platform competitions between brands for engagement" },
      { title: "Seller Program", lowfi: "Users can become creators and sell patterns" },
      { title: "Admin Panel", lowfi: "Platform management tools (future)" }
    ],
    summary: "This is a personal design project I created for the crochet community, based on user needs and engagement strategies.\n\nIdea & Problem Solving: I noticed in crochet communities that patterns were seen as too expensive and often lacked step-by-step creator walkthroughs. My solution: a platform where users can purchase patterns, watch guided tutorials, and engage directly with creators for pattern testing questions.\n\nDesign Choices: I chose a warm pink and white palette to match the logo and create a welcoming brand identity. I included a loading animation before the main page for a more playful feel compared to a plain white screen.\n\nEngagement Features: Daily coin claims via a calendar, a points system tied to purchases, and in-platform competitions between brands to encourage community sharing and friendly rivalry.\n\nBusiness Strategy: Monetization through ads, a seller program where users can become creators, and eventually an admin panel to manage all platform activities (not yet designed).\n\nCommunity Building: Direct messaging between users and creators for feedback and pattern testing discussions.\n\nThis project reflects my process: identifying user pain points → designing solutions that blend usability with business goals → adding interactive elements to keep users engaged.",
    ranking: 1,
  },
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
    problem: "Users experienced friction during checkout and low trust signaling.",
    userQuotes: [
      "I abandon carts when checkout is confusing.",
      "I want clear product images and quick checkout." 
    ],
    solution: "Redesigned checkout flow, emphasized imagery and clear CTAs to shorten time-to-purchase.",
    features: [
      { title: "Onboarding", lowfi: "Simple account creation + guest checkout" },
      { title: "Note Jotting", lowfi: "Admin notes for orders and customer preferences" },
      { title: "Search", lowfi: "Filtered product search with clear results" }
    ],
    summary: "A conversion-focused full-stack storefront with an improved checkout experience.",
    ranking: 12,
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
    problem: "Portfolio felt generic; needed stronger typographic personality and motion.",
    userQuotes: [
      "The site needs to feel unique and memorable.",
      "Animations help me understand the structure faster."
    ],
    solution: "Explored layered typography and subtle motion to increase scannability and uniqueness.",
    features: [
      { title: "Onboarding", lowfi: "Intro animation to orient visitors" },
      { title: "Note Jotting", lowfi: "Designer notes panel for CMS integration" },
      { title: "Search", lowfi: "Filter projects by type and year" }
    ],
    summary: "A prototype emphasizing typographic systems and motion to improve portfolio scanning.",
    ranking: 11,
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
    problem: "Brand needed a playful, scannable landing to showcase menu and flavors.",
    userQuotes: [
      "I want to know what flavors are available quickly.",
      "The site should feel fun and easy to order from."
    ],
    solution: "Created brand-first product cards and a colorful, scannable landing that guides ordering.",
    features: [
      { title: "Onboarding", lowfi: "First-time user flavor tour" },
      { title: "Note Jotting", lowfi: "Recipe notes for editors" },
      { title: "Search", lowfi: "Ingredient search with dietary tags" }
    ],
    summary: "A playful landing and menu prototype used to gather stakeholder feedback.",
    ranking: 6,
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
    problem: "Operational staff lacked a unified view of airport tasks and alerts.",
    userQuotes: [
      "I need one place for critical alerts and task handoff.",
      "Too many systems make it hard to see what's urgent."
    ],
    solution: "Designed a data-driven dashboard with progressive disclosure and prioritized alerts.",
    features: [
      { title: "Onboarding", lowfi: "Role-based quickstart for staff" },
      { title: "Note Jotting", lowfi: "Shift notes and handover comments" },
      { title: "Search", lowfi: "Search by flight, gate, or task" }
    ],
    summary: "Concept validated with stakeholders via walkthroughs to show improved visibility.",
    ranking: 10,
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
    problem: "Guests couldn't easily understand sustainability impact while booking.",
    userQuotes: [
      "I want to know the hotel's sustainability credentials before booking.",
      "Booking should feel premium but responsible."
    ],
    solution: "Introduced sustainability badges and clear booking visuals to communicate impact.",
    features: [
      { title: "Onboarding", lowfi: "Welcome messaging highlighting sustainability" },
      { title: "Note Jotting", lowfi: "Concierge notes and guest preferences" },
      { title: "Search", lowfi: "Filter rooms by sustainability features" }
    ],
    summary: "Brand and booking visuals that balance luxury with clear sustainability signals.",
    ranking: 7,
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
    problem: "Teams lacked a single source of truth for tokens and components.",
    userQuotes: [
      "We duplicate styles across projects.",
      "A shared token system would speed handoffs."
    ],
    solution: "Defined tokens and examples to create a reusable, documented design system.",
    features: [
      { title: "Onboarding", lowfi: "Token usage quickstart for new designers" },
      { title: "Note Jotting", lowfi: "Component migration notes" },
      { title: "Search", lowfi: "Search tokens and components by name" }
    ],
    summary: "Reusable tokens and documented components to improve consistency across teams.",
    ranking: 8,
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
    problem: "Landing lacked expressive visuals that matched the manga aesthetic.",
    userQuotes: [
      "I want bold visuals that feel like a panel layout.",
      "Type and illustration should carry emotion."
    ],
    solution: "Used bold type and hero illustrations to mimic manga panels and create impact.",
    features: [
      { title: "Onboarding", lowfi: "Hero tour of visual storytelling" },
      { title: "Note Jotting", lowfi: "Art direction notes for illustrators" },
      { title: "Search", lowfi: "Filter illustrations by scene or character" }
    ],
    summary: "High-contrast landing inspired by manga, focused on bold visuals and hero art.",
    ranking: 4,
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
    problem: "Ordering flows were slow and menus were hard to scan for dietary needs.",
    userQuotes: [
      "I can't find vegetarian options quickly.",
      "The order summary getting lost while browsing is frustrating."
    ],
    solution: "Built a persistent order summary, dietary filters, and scannable menu cards.",
    features: [
      { title: "Onboarding", lowfi: "Quick tutorial for first-time ordering" },
      { title: "Note Jotting", lowfi: "Kitchen notes for special requests" },
      { title: "Search", lowfi: "Search dishes and filter by dietary tags" }
    ],
    summary: "Ordering-focused menu design to reduce friction and speed checkout.",
    ranking: 9,
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
    problem: "Candidates and employers needed a more guided matching and onboarding experience.",
    userQuotes: [
      "I want job recommendations that match my profile.",
      "Onboarding should be fast so I can apply quickly."
    ],
    solution: "Created a match-first homepage and streamlined onboarding to increase conversions.",
    features: [
      { title: "Onboarding", lowfi: "Guided profile setup with tips" },
      { title: "Note Jotting", lowfi: "Recruiter notes attached to candidate profiles" },
      { title: "Search", lowfi: "Search jobs by skills and preferences" }
    ],
    summary: "A recruiting platform focused on matching and quick onboarding for candidates.",
    ranking: 5,
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
    problem: "New users needed a playful, clear onboarding to feel comfortable with games.",
    userQuotes: [
      "I want to learn game rules quickly.",
      "Onboarding microcopy should reduce anxiety about losing progress."
    ],
    solution: "Designed progressive onboarding, clear categories, and playful interactions to ease new users in.",
    features: [
      { title: "Onboarding", lowfi: "Progressive tips per first games" },
      { title: "Note Jotting", lowfi: "Gameplay notes for designers" },
      { title: "Search", lowfi: "Search games by category and popularity" }
    ],
    summary: "Playful landing with onboarding micro-interactions to improve first-time user experience.",
    ranking: 3,
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
    problem: "Logistics teams lacked a clear alerting pattern and prioritized task view.",
    userQuotes: [
      "We need real-time visibility on exceptions.",
      "Alerts should be prioritized so we know what to fix first."
    ],
    solution: "Designed dashboards with prioritized exceptions and simple alerts to speed response.",
    features: [
      { title: "Onboarding", lowfi: "Role-based dashboard onboarding" },
      { title: "Note Jotting", lowfi: "Incident notes and resolution history" },
      { title: "Search", lowfi: "Search shipments, milestones, and alerts" }
    ],
    summary: "Prototype dashboard focused on exception prioritization and real-time visibility.",
    ranking: 2,
  },
];

projects.sort((a, b) => (a.ranking || 999) - (b.ranking || 999));

export default projects;

