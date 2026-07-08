import SectionLabel from "@/components/SectionLabel";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/api";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Projects</SectionLabel>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
