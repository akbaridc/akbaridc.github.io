import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
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
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight">Featured Projects</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={(index % 3) * 60} className="h-full">
              <Dialog.Root
                onOpenChange={(open) => !open && setSelectedProject(null)}
                modal={true}
              >
                <Dialog.Trigger asChild>
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="group border border-border/60 rounded-xl overflow-hidden hover:border-primary/45 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer flex flex-col h-full bg-card/25 backdrop-blur-sm"
                  >
                    <div className="relative h-48 w-full overflow-hidden border-b border-border/40 bg-secondary/20">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.images?.[0] || "/placeholder.svg"})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-75" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/45 backdrop-blur-[1px]">
                        <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-mono text-xs font-medium tracking-wide shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-350">
                          View Project &rarr;
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 mt-6">
                        {project.tags?.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-[10px] font-mono tracking-wider uppercase bg-primary/5 border border-primary/10 text-primary/80 px-2 py-0.5 rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 3 && (
                              <span className="text-[10px] font-mono tracking-wider text-muted-foreground px-1.5 py-0.5">
                                +{project.tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between border-t border-border/30 pt-3 mt-1">
                          <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                            Details
                          </span>
                          
                          <div className="flex gap-2">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="h-8 w-8 rounded-full border border-border bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                                aria-label={`${project.title} demo`}
                              >
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            )}
                            {project.source && (
                              <a
                                href={project.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="h-8 w-8 rounded-full border border-border bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                                aria-label={`${project.title} source`}
                              >
                                <Github className="h-3.5 w-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[999] transition-all duration-300" />
                  <Dialog.Content className="fixed inset-4 md:inset-10 lg:inset-x-24 xl:inset-x-48 lg:inset-y-16 flex items-center justify-center z-[1000] focus:outline-none">
                    <Dialog.Title className="sr-only">
                      {selectedProject?.title || "Project Detail"}
                    </Dialog.Title>
                    <Dialog.Description className="sr-only">
                      Project image carousel viewer and details
                    </Dialog.Description>

                    {selectedProject && <ProjectDetailModal project={selectedProject} />}
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

const ProjectDetailModal = ({ project }: { project: Project }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      if (emblaApi) emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="bg-card border border-border/80 rounded-2xl w-full max-w-5xl h-full max-h-[85vh] md:max-h-[80vh] flex flex-col md:flex-row overflow-hidden shadow-2xl relative">
      <Dialog.Close asChild>
        <button className="absolute top-4 right-4 bg-background/60 hover:bg-background/90 border border-border/40 text-foreground p-2 rounded-full z-50 transition-colors focus:outline-none">
          <X className="w-4 h-4" />
        </button>
      </Dialog.Close>

      {/* Left panel: Carousel */}
      <div className="w-full md:w-3/5 bg-black/95 flex flex-col relative h-[40vh] md:h-full justify-center group/carousel">
        <div className="overflow-hidden h-full flex items-center" ref={emblaRef}>
          <div className="flex h-full w-full">
            {project.images.map((img: string, i: number) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center p-4">
                <img
                  src={img}
                  alt={`Project ${project.title} image ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {project.images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 border border-border/20 text-foreground p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 border border-border/20 text-foreground p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi && emblaApi.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    selectedIndex === i ? "w-4 bg-primary" : "w-1.5 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Right panel: Details */}
      <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-card h-[45vh] md:h-full border-t md:border-t-0 md:border-l border-border/40">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-primary font-medium tracking-wider uppercase">
              // Project Showcase
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Description
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.tags?.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[10px] font-mono tracking-wider uppercase bg-primary/5 border border-primary/10 text-primary/80 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-border/30">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/95 text-sm font-medium transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors shadow-sm ${
                project.link
                  ? "border-border hover:bg-secondary/40 text-muted-foreground hover:text-foreground"
                  : "bg-primary text-primary-foreground hover:bg-primary/95 border-none"
              }`}
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
