import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import dataProjects from "../constants/projects";
import Reveal from "./Reveal";

type Project = {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  link: string | null;
  source: string | null;
};

const Projects = () => {
  const projects = dataProjects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 space-y-2">
            <p className="font-mono text-sm text-primary tracking-widest">{"// projects"}</p>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight">Projects</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={index} delay={(index % 3) * 60} className="h-full">
              <Dialog.Root
                onOpenChange={(open) => !open && setSelectedProject(null)}
                modal={true}
              >
              <Dialog.Trigger asChild>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors cursor-pointer flex flex-col h-full"
                >
                  <div
                    className="h-44 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.images?.[0] || "/placeholder.svg"})` }}
                  />

                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div className="space-y-2">
                      <h3 className="font-medium">{project.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {project.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs font-mono text-muted-foreground border border-border px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex gap-3 ml-auto">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`${project.title} demo`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        {project.source && (
                          <a
                            href={project.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`${project.title} source`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/70 z-40" />
                <Dialog.Content className="fixed inset-0 flex items-center justify-center bg-black/80 z-[9999]">
                  <Dialog.Title className="sr-only">
                    {selectedProject?.title || "Project Detail"}
                  </Dialog.Title>
                  <Dialog.Description className="sr-only">
                    Project image carousel viewer
                  </Dialog.Description>

                  {selectedProject && <CarouselViewer project={selectedProject} />}
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const CarouselViewer = ({ project }: { project: Project }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="bg-card border border-border rounded-lg max-w-4xl w-full relative overflow-hidden">
      <Dialog.Close asChild>
        <button className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-50">
          <X className="w-5 h-5" />
        </button>
      </Dialog.Close>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {project.images.map((img: string, i: number) => (
            <div key={i} className="flex-[0_0_100%] min-w-0">
              <img
                src={img}
                alt={`Project ${project.title} image ${i + 1}`}
                className="w-full h-[70vh] object-contain bg-black"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Projects;
