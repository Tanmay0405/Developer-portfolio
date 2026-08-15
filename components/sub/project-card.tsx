import Image from "next/image";

type ProjectCardProps = {
  src?: string;
  title: string;
  description: string;
  tech: readonly string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const ProjectCard = ({
  src,
  title,
  description,
  tech,
  github,
  live,
  featured = false,
}: ProjectCardProps) => {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white/[0.025] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.045] ${
        featured
          ? "border-purple-500/40 hover:border-purple-400/70 hover:shadow-[0_0_35px_rgba(139,92,246,0.15)]"
          : "border-white/10 hover:border-cyan-400/40"
      }`}
    >
      {/* Project Image */}
      <div className="relative h-[220px] overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={title}
            width={1000}
            height={650}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#12072b] via-[#24104f] to-[#061b35]">
            <div className="text-center">
              <div className="mb-3 text-5xl opacity-80">
                {title === "TaskFlow" ? "✓" : "📰"}
              </div>

              <p className="text-lg font-semibold text-white/80">
                {title}
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-70" />

        {featured && (
          <span className="absolute left-4 top-4 rounded-full border border-purple-400/40 bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-200 backdrop-blur-md">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-xl font-bold text-white md:text-2xl">
          {title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          {description}
        </p>

        {/* Technology badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-purple-500/20 bg-purple-500/[0.07] px-3 py-1 text-xs font-medium text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}
        {(github || live) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/10"
              >
                GitHub
              </a>
            )}

            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
              >
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};