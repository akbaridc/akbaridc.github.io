import Reveal from "./Reveal";

const Skills = () => {
  const skillCategories = [
    {
      category: "frontend",
      skills: ["React", "AngularJS", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript", "Alpine.js"],
    },
    {
      category: "backend",
      skills: ["PHP", "Laravel", "Python", "MySQL", "PostgreSQL", "Oracle"],
    },
    {
      category: "tools",
      skills: ["Git", "Composer", "Postman", "Docker", "MongoDB", "Redis", "RabbitMQ"],
    },
  ];

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
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="group flex items-center gap-3 text-foreground/90">
                      <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                        ›
                      </span>
                      <span>{skill}</span>
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
