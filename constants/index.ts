
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
  skill_name: "Python",
  image: "python.png",
  width: 70,
  height: 70,
},
{
  skill_name: "Java",
  image: "java.png",
  width: 70,
  height: 70,
},
{
  skill_name: "SQL",
  image: "mysql.png",
  width: 70,
  height: 70,
},
{
  skill_name: "Machine Learning",
  image: "ml.png",
  width: 70,
  height: 70,
},
{
  skill_name: "AI",
  image: "ai.jpeg",
  width: 70,
  height: 70,
},

] as const;

export const SOCIALS = [

  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/tanmay-awasthi-programmer4",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Tanmay0450",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
{
  title: "AI-Powered Resume Analyzer",
  description:
    "An ML-based web app that evaluates resumes against job descriptions using NLP and OpenAI APIs. Built with Python, React, and FastAPI.",
  image: "/projects/project-1.png",
  link: "https://github.com/Tanmay0405",
},
{
  title: "Student Result Dashboard",
  description:
    "Full stack dashboard using React, Node.js, and MongoDB to manage student performance, export reports, and analyze trends with charts.",
  image: "/projects/project-2.png",
  link: "https://github.com/Tanmay0405",
},

  {
    title: "Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "https://github.com/Tanmay0405",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Tanmay0405",
      },
            {
      name: "LeetCode",
      icon: "leet.png", 
      link: "https://leetcode.com/tanmayawasthi", 
    },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/tanmay-awasthi-programmer4",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "View Resume",
        icon: null,
        link: "/Resume.pdf", 
      },    
      {
        name: "Email Me",
        icon: null,
        link: "mailto:tanmayawasthi070@gmail.com",
      },
    ],
  },
] as const;


export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
     title: "Certificates", 
     link: "#certificates"
  }
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Tanmay0405",
  //liveSite: "https://tanmay-portfolio.vercel.app",
};
