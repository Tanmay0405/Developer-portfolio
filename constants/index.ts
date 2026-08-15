
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Java",
    image: "java.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "SQL",
    image: "sql.png",
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
    link: "https://github.com/Tanmay0405",
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
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js ",
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
] as const;

export const DATABASE_SKILL = [
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
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
    skill_name: "Oracle SQL",
    image: "oracle.png",
    width: 70,
    height: 70,
  },
] as const;

export const CORE_CS_SKILLS = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "DBMS",
  "Multithreading",
  "Exception Handling",
] as const;

export const PROJECTS = [
  {
    title: "BookIt Lite",
    description:
      "A full-stack property booking and management platform with property listings, reservations, authentication, and REST APIs built using the MERN stack.",
    image: "/projects/project-2.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Tanmay0405/bookit-lite",
    live: "",
  },

  {
    title: "TaskFlow",
    description:
      "A full-stack task management application for creating, organizing, and managing tasks with protected routes and user authentication.",
    image: "",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Tanmay0405/task-manager",
    live: "",
  },

  {
    title: "Developer Portfolio",
    description:
      "A modern space-themed developer portfolio built to showcase skills, projects, certifications, and professional experience with an interactive user interface.",
    image: "/projects/project-3.png",
    tech: ["Next.js", "React", "JavaScript", "Framer Motion"],
    github: "https://github.com/Tanmay0405/Developer-portfolio",
    live: "https://tanmay-portfolio-bld0.onrender.com",
  },

  {
    title: "Smart Surveillance AI",
    description:
      "A real-time computer vision system combining face mask detection and emotion recognition using MobileNetV2 and a CNN trained on the FER-2013 dataset.",
    image: "/projects/project-1.png",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "MobileNetV2",
      "CNN",
    ],
    github: "https://github.com/Tanmay0405/mask-emotion-detector",
    live: "",
  },

  {
    title: "ParseTruth",
    description:
      "A collaborative project developed with a teammate to detect and classify potentially misleading or fake news content.",
    image: "",
    tech: ["Python", "Machine Learning", "NLP"],
    github: "https://github.com/blazePrakhar/ParseTruth",
    live: "https://parsetruth.streamlit.app/",
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
  sourceCode: "https://github.com/Tanmay0405/Developer-portfolio",
};
