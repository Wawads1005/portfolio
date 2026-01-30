import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

function ProjectsAndExperiencesScreen() {
  return (
    <div className="container mx-auto grid max-w-5xl gap-6 pt-20">
      {projects.map((project) => {
        return <ProjectCard key={project.title} project={project} />;
      })}
    </div>
  );
}

export default ProjectsAndExperiencesScreen;
