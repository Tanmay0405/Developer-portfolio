import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      {/* Section Heading */}
      <h1 className="text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-green-400 py-10">
        Featured Work
      </h1>

      {/* Projects Grid */}
      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            live={project.live}
            featured={index < 2}
          />
        ))}
      </div>
    </section>
  );
};