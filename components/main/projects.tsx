import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  const featuredProjects = PROJECTS.slice(0, 2);
  const additionalProjects = PROJECTS.slice(2);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      {/* Main Heading */}
      <h1 className="py-10 text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-green-400">
        Projects
      </h1>

      {/* Featured Projects */}
      <div className="w-full max-w-[1200px] px-6">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
           Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              live={project.live}
              featured
            />
          ))}
        </div>
      </div>

      {/* Additional Projects */}
      <div className="mt-20 w-full max-w-[1200px] px-6">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
           Additional Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
};