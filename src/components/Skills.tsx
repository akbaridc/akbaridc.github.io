const Skills = () => {
  const skillCategories = [
    { 
      category: "Frontend", 
      skills: ["React", "AngularJS", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript", "Alpine.js"] 
    },
    { 
      category: "Backend", 
      skills: ["PHP", "Laravel", "Python (Beginner)", "MySQL", "PostgreSQL", "Oracle"] 
    },
    { 
      category: "Tools & Others", 
      skills: ["Git", "Composer", "Postman", "Docker (Basic)", "MongoDB", "Redis", "RabbitMQ"] 
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-primary text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl space-y-6 hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-accent">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    <span className="text-foreground/90 group-hover:text-foreground group-hover:translate-x-1 transition-all">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
