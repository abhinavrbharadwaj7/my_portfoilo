import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhinav R Bharadwaj",
  initials: "DV",
  url: "https://dillion.io",
  location: "Banglore, India",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Typescript",
    "Node.js",
    "Python",
    "GIT",
    "C",
    "C++",
    "Django",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhinavrbharadwaj7",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhinavrbharadwaj/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ABHIKNOW2",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@abhiknow73",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Acquis Compliance",
      href: "https://www.acquiscompliance.com/",
      badges: [],
      location: "Remote",
      title: "Full-stack developer intern",
      logoUrl: "/acquis_compliance_logo.jpeg",
      start: "Oct 2024",
      end: "present",
      description:
        "Engaged in front-end and back-end development tasks, ensuring responsive and user-friendly designs and Collaborate with cross-functional teams to contribute to project planning and implementation",
    },
    {
      company: "Varcons Technologies",
      badges: [],
      href: "https://www.varconstech.com/",
      location: "Remote",
      title: "Full-stack developer intern",
      logoUrl: "",
      start: "Oct 2023",
      end: "Nov 2023",
      description:
        "Front-End Development : Designed and built responsive web interfaces with HTML, CSS, and JavaScript for a smooth user experience and Version Control : Used Git and GitHub for effective code management and team collaboration",
    },
    
  ],
  education: [
    {
    school: "INDIAN PUBLIC SCHOOL",
      href: "https://ipsturuvekere.wordpress.com/contact/",
      degree: "Schooling",
      logoUrl: "",
      start: "2012",
      end: "2019",
    },
    {
      school: "Government PU College Turuvekere",
      href: "https://yappe.in/karnataka/turuvekere/government-pu-college/1298108",
      degree: "Pre-University-PCMB",
      logoUrl: "",
      start: "2019",
      end: "2021",
    },
    {
      school: "Dayananda Sagar Academy of Technology and Management",
      href: "https://dsatm.edu.in/",
      degree: "B E in Information Science and Engineering",
      logoUrl: "",
      start: "2021",
      end: "2025",
    },
    
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Scientific Computing with Python",
      dates: "",
      location: "Remote",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://clipground.com/images/freecodecamp-logo-6.jpg",
      links: [],
    },
   
    {
      title: "J.P. Morgan Software Engineering Virtual Experience Program",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://undergradcareers.nd.edu/assets/542930/290x/foragelogo.jpg",
      links: [],
    },
    
    {
      title: "Search Engine Technology & Generative AI",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png",
      links: [],
    },
    {
      title: "Learn R programming language in Infosys springboard",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/springboard-logo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [],
        
      
    },
   
   
   
    {
      title: "Python Fundamentals in Infosys springboard",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/springboard-logo.png",
      links: [],
    },
  ],
} as const;
