import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import FeaturedProject from "../ui/FeaturedProject";
import ProjectCard from "../ui/ProjectCard";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "../../constants/data";

export default function Work() {
  return (
    <section id="work" className="py-28 max-w-5xl mx-auto px-6 md:px-24">
      <SectionHeading num="03." title="Some Things I've Built" />

      {/* ── Featured projects ── */}
      <div className="flex flex-col gap-28 mb-28">
        {FEATURED_PROJECTS.map((project, i) => (
          <FeaturedProject
            key={project.title}
            project={project}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>

      {/* ── Other projects ── */}
      <FadeIn className="text-center mb-12">
        <h3 className="font-display text-2xl font-semibold text-eggshell tracking-tight">
          Other Noteworthy Projects
        </h3>
        <p className="font-mono text-[13px] text-moss-light mt-2 tracking-wide">
          a collection
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {OTHER_PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
