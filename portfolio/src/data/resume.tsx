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
        "FreeCodeCamp's Scientific Computing with Python course teaches essential libraries like NumPy for numerical computations 🧮, SciPy for scientific functions 🔬, and Matplotlib for data visualization 📊. You'll also learn Pandas for data manipulation 📑, along with topics like RegEx, Web Scraping, and APIs.",
      image:
        "https://clipground.com/images/freecodecamp-logo-6.jpg",
      links: [],
    },
   
    {
      title: "J.P. Morgan Software Engineering Virtual Experience Program",
      dates: "",
      location: "Remote",
      description: "The J.P. Morgan Software Engineering Virtual Experience Program, offered through platforms like Forage, is a free, self-paced program designed to give students hands-on experience with real-world software development tasks. Participants work on projects such as building a data visualization dashboard, implementing secure authentication, and handling financial transactions using Python and other technologies. This program provides valuable insights into the financial technology sector, helping students develop technical skills while gaining exposure to J.P. Morgan’s work environment.",
      image:
        "https://undergradcareers.nd.edu/assets/542930/290x/foragelogo.jpg",
      links: [],
    },
    
    {
      title: "Search Engine Technology & Generative AI",
      dates: "",
      location: "Remote",
      description:
        "Search Engine Technology focuses on designing algorithms to retrieve and rank the most relevant information from vast datasets. It involves techniques like web crawling, indexing, ranking algorithms (e.g., PageRank), and Natural Language Processing (NLP) to improve search accuracy.  Generative AI, powered by models like GPT (ChatGPT), DALL·E, and BERT, enhances search engines by understanding queries better, generating human-like responses, and even creating summaries or images. AI-driven search engines, like Google’s SGE (Search Generative Experience), aim to provide more contextual and conversational results, transforming how users interact with information online. 🚀🔍",
      image:
        "https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png",
      links: [],
    },
    {
      title: "Learn R programming language in Infosys springboard",
      dates: "",
      location: "Remote",
      description:
        "The R Programming course on Infosys Springboard is designed to help learners master data analysis, statistical computing, and visualization using R. It covers fundamental concepts like data structures, functions, loops, and data manipulation with libraries such as ggplot2, dplyr, and tidyr. The course is ideal for beginners interested in data science, machine learning, and analytics. With hands-on exercises and real-world applications",
      image:
        "https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/springboard-logo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [],
        
      
    },
   
   
   
    {
      title: "Python Fundamentals in Infosys springboard",
      dates: "",
      location: "Remote",
      description:
        "The Python Fundamentals course on Infosys Springboard introduces learners to the basics of Python programming, covering variables, data types, loops, functions, and object-oriented programming (OOP). It provides hands-on experience in writing Python scripts, solving problems, and working with libraries for real-world applications. This course is ideal for beginners looking to build a strong foundation in programming",
      image:
        "https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/springboard-logo.png",
      links: [],
    },
  ],
} as const;
