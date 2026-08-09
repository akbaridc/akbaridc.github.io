"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import dataProjects from "../constants/projects";

const Projects = () => {
  const projects = dataProjects;

  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="gradient-accent text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog.Root
              key={index}
              onOpenChange={(open) => !open && setSelectedProject(null)}
              modal={true}
            >
              <Dialog.Trigger asChild>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="glass-effect rounded-2xl overflow-hidden group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
                >
                  {/* Image Preview */}
                  <div
                    className="h-48 bg-cover bg-center relative overflow-hidden"
                    style={{
                      backgroundImage: `url(${project.images?.[0] || '/placeholder.jpg'})`,
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    {/* Hover Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-3">
                        {/* Tampilkan jika project.link ada */}
                        {project.link && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation(); // biar gak trigger onClick card
                              window.open(project.link, "_blank");
                            }}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </Button>
                        )}

                        {/* Tampilkan jika project.source ada */}
                        {project.source && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.source, "_blank");
                            }}
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {project.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Dialog.Trigger>

              {/* Modal / Popup Carousel */}
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" />
                <Dialog.Content className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[9999]">
                  {/* Tambahkan Title & Description agar tidak error */}
                  <Dialog.Title className="sr-only">
                    {selectedProject?.title || "Project Detail"}
                  </Dialog.Title>
                  <Dialog.Description className="sr-only">
                    Project image carousel viewer
                  </Dialog.Description>

                  {selectedProject && (
                    <CarouselViewer project={selectedProject} />
                  )}
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Carousel Viewer Component */
const CarouselViewer = ({ project }: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="bg-background rounded-xl shadow-2xl max-w-4xl w-full relative overflow-hidden">
      <Dialog.Close asChild>
        <button className="absolute top-10 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-50">
          <X className="w-5 h-5" />
        </button>
      </Dialog.Close>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {project.images.map((img: string, i: number) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 relative">
              <img
                src={img}
                alt={`Project ${project.title} image ${i + 1}`}
                className="w-full h-[70vh] object-contain bg-black"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
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
