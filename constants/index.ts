
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
    skill_name: "React",
    image: "react.png",
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
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;


export const PROJECTS = [
{
  title: "Smart Surveillance AI: Mask & Emotion Detection System",
  description:
    "An AI-powered real-time surveillance system that detects face mask compliance and human emotions simultaneously using computer vision. Built with MobileNetV2 and a custom CNN trained on FER-2013, the system processes live video streams to identify mask usage and classify emotions like Happy, Angry, Sad, and Neutral.",
  image: "/projects/project-1.png",
  link: "https://github.com/Tanmay0405",
},
{
  title: "BookIt Lite: Property Booking & Management System",
  description:
    "Developed a scalable booking system that allows users to browse, create, and manage property listings and reservations in real time. Built with the MERN stack, the platform handles large-scale data operations efficiently while maintaining a clean and intuitive UI.",
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
};
