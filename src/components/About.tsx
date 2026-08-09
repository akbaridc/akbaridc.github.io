import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Efficient development process with attention to detail"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Strong team player with excellent communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="gradient-accent text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-effect p-8 md:p-12 rounded-2xl">
          <p className="text-lg text-foreground/90 leading-relaxed text-center max-w-3xl mx-auto">
            As a <span className="text-primary font-semibold">Fullstack Developer</span>, I specialize in building modern web applications 
            using cutting-edge technologies. With a keen eye for design and a passion for clean code, 
            I transform ideas into polished, user-friendly products that deliver real value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
