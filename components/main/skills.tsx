import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  CORE_CS_SKILLS,
  DATABASE_SKILL,
  FRONTEND_SKILL,
  SKILL_DATA,
} from "@/constants";

const BACKEND_CONCEPTS = ["REST APIs", "JWT Authentication", "CRUD Operations"];

const TOOLS = [
  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "Vercel",
  "Render",
  "Netlify",
];

const Badge = ({
  children,
  variant = "purple",
}: {
  children: React.ReactNode;
  variant?: "purple" | "cyan" | "indigo";
}) => {
  const variants = {
    purple:
      "border-purple-500/30 bg-purple-500/[0.07] hover:border-purple-400/70 hover:bg-purple-500/[0.14] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    cyan: "border-cyan-500/30 bg-cyan-500/[0.07] hover:border-cyan-400/70 hover:bg-cyan-500/[0.14] hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]",
    indigo:
      "border-indigo-500/30 bg-indigo-500/[0.07] hover:border-indigo-400/70 hover:bg-indigo-500/[0.14] hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]",
  };

  return (
    <span
      className={`px-5 py-2.5 rounded-full border text-gray-200 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center overflow-hidden py-24"
    >
      {/* Section heading */}
      <div className="relative z-10">
        <SkillText />
      </div>

      {/* Languages */}
      <div className="relative z-10 mt-14 w-[90%] max-w-[1100px] rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-10 backdrop-blur-sm">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
          👨‍💻 Languages
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {SKILL_DATA.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Frontend */}
      <div className="relative z-10 mt-8 w-[90%] max-w-[1100px] rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-10 backdrop-blur-sm">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
          🎨 Frontend
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {FRONTEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="relative z-10 mt-8 w-[90%] max-w-[1100px] rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-10 backdrop-blur-sm">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
          ⚙️ Backend & APIs
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {BACKEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {BACKEND_CONCEPTS.map((skill) => (
            <Badge key={skill} variant="purple">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="relative z-10 mt-8 w-[90%] max-w-[1100px] rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-10 backdrop-blur-sm">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
          🗄️ Databases
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {DATABASE_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Core CS & Fundamentals */}
      <div className="relative z-10 mt-8 w-[90%] max-w-[1100px] rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-10 backdrop-blur-sm">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
          🧠 Core CS & Fundamentals
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {CORE_CS_SKILLS.map((skill) => (
            <Badge key={skill} variant="cyan">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="relative z-10 mt-8 w-[90%] max-w-[1100px] rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-10 backdrop-blur-sm">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
          🛠️ Tools & Deployment
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {TOOLS.map((tool) => (
            <Badge key={tool} variant="indigo">
              {tool}
            </Badge>
          ))}
        </div>
      </div>

      {/* Background video */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 z-[-10] flex items-center justify-center bg-cover opacity-25">
          <video
            className="h-full w-full object-cover"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
