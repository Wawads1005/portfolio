import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";

interface ProjectCardProps {
  project: Portfolio.Project;
  className?: string;
}

function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden pt-0 transition-all duration-300",
        className,
      )}
    >
      <div className="bg-secondary relative h-64 w-full overflow-hidden">
        <img
          src={project.coverImage || "/placeholder.svg"}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="from-background via-background/50 absolute inset-0 bg-linear-to-t to-transparent" />
      </div>
      <CardContent className="space-y-6">
        <div>
          <div className="mb-4 flex items-start justify-between gap-4">
            <h3 className="group-hover:text-accent-foreground text-2xl font-bold transition-colors">
              {project.title}
            </h3>
            <Terminal className="text-muted-foreground h-5 w-5 shrink-0" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Key Features:</p>
          <ul className="grid gap-2">
            {project.highlights.map((highlight, i) => (
              <li
                key={i}
                className="text-muted-foreground flex items-center gap-2 text-sm"
              >
                <span className="text-accent-foreground">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 font-mono text-xs"
          >
            {tech}
          </span>
        ))}
      </CardFooter>
    </Card>
  );
}

export { ProjectCard };
