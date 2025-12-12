"use client";

import * as React from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { logos } from "@/data/logos";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { Spotlight } from "@/components/ui/spotlight";
import { informations } from "@/data/informations";

export default function HomePage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const allSkills = Object.entries(skills).flatMap(([category, items]) =>
    items.map((skill) => ({ skill, category })),
  );

  return (
    <React.Fragment>
      {/* Hero Section */}
      <section
        id="about"
        className="relative flex min-h-screen items-center justify-center px-6 pt-16"
      >
        <Spotlight className="w-[200%]" />
        <div className="z-20 mx-auto w-full max-w-5xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <div
                className={`transition-all duration-700 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <p className="text-muted-foreground mb-2 font-mono text-sm">
                  Hello, I'm
                </p>
                <h1 className="text-5xl font-bold tracking-tight text-balance md:text-7xl">
                  {informations.lastName}, {informations.firstName}
                </h1>
              </div>

              <div
                className={`transition-all delay-150 duration-700 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed text-pretty md:text-2xl">
                  A curiosity-driven explorer, always chasing the{" "}
                  <span className="text-accent-foreground font-medium">
                    "aha"
                  </span>{" "}
                  moments.
                </p>
              </div>

              <div
                className={`transition-all delay-300 duration-700 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
                  Full-stack developer specializing in building exceptional
                  digital experiences with modern web technologies. I transform
                  complex problems into elegant solutions through code and
                  creativity.
                </p>
              </div>
            </div>

            <div
              className={`flex gap-4 transition-all delay-500 duration-700 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Button size="lg" asChild className="group">
                <a href="#contact">
                  Get In Touch
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:animate-bounce" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground h-6 w-6" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 space-y-4">
            <p className="text-accent-foreground font-mono text-sm">
              FEATURED WORK
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Projects & Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              A collection of projects that showcase my technical skills and
              problem-solving approach.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:auto-rows-auto md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                className={index === 2 ? "md:col-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-secondary/30 overflow-hidden px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 space-y-4">
            <p className="text-accent-foreground font-mono text-sm">
              TECHNICAL EXPERTISE
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Skills & Languages
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>

          {/* Auto-scrolling carousel */}
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                playOnInit: true,
                stopOnInteraction: false,
                stopOnFocusIn: false,
                active: true,
                speed: 1,
              }),
            ]}
          >
            <CarouselContent className="-ml-6">
              {allSkills.map((allSkill, index) => {
                const Logo = logos[allSkill.skill];

                if (!Logo) {
                  return null;
                }

                return (
                  <CarouselItem
                    key={`skill-${index}`}
                    className="basis-56 pl-6"
                  >
                    <div className="bg-card flex flex-col items-center justify-center gap-2 rounded-md p-6">
                      <Logo className="text-accent-foreground h-12 w-12" />
                      <span className="text-center text-sm font-medium whitespace-nowrap">
                        {allSkill.skill}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {allSkill.category}
                      </span>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-12 space-y-4">
            <p className="text-accent-foreground font-mono text-sm">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row [&_a]:w-32">
            <Button variant="outline" asChild>
              <a href={`mailto:${informations.email}`} target="_blank">
                <SiGmail />
                <span>Email</span>
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={informations.links.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <SiGithub />
                <span>GitHub</span>
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={informations.links.linkedIn}
                rel="noopener noreferrer"
                target="_blank"
              >
                <SiLinkedin />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
