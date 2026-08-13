import Reveal from "./Reveal";
import { Database } from "lucide-react";
import {
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiAlpinedotjs,
  SiPhp,
  SiLaravel,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiV
} from "react-icons/si";

const skillCategories = [
  {
    category: "frontend",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Vue", Icon: SiV, color: "#61DAFB" },
      { name: "AngularJS", Icon: SiAngular, color: "#DD0031" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Alpine.js", Icon: SiAlpinedotjs, color: "#8BC0D0" },
    ],
  },
  {
    category: "backend",
    skills: [
      { name: "PHP", Icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    category: "database",
    skills: [
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Oracle", Icon: Database, color: "#F80000" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    category: "version control",
    skills: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
    ],
  },
  {
    category: "etc",
    skills: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "RabbitMQ", Icon: SiRabbitmq, color: "#FF6600" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 space-y-2">
            <p className="font-mono text-sm text-primary tracking-widest">{"// skills"}</p>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight">Skills</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <Reveal key={category.category} delay={i * 80}>
              <div className="space-y-4">
                <h3 className="font-mono text-sm text-muted-foreground">
                  $ {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(({ name, Icon, color }) => (
                    <div
                      key={name}
                      className="group relative flex h-12 w-12 items-center justify-center border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:bg-card"
                    >
                      <Icon
                        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                        style={{ color }}
                      />
                      <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-card px-2 py-1 font-mono text-xs text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
