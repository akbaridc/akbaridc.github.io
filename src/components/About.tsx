import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 space-y-2">
            <p className="font-mono text-sm text-primary tracking-widest">{"// about"}</p>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight">About Me</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-6">
            <Reveal delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated **Fullstack Developer** with a passion for building robust and scalability-focused web applications. 
                With experience spanning across frontend interfaces, database design, and backend system development, I bridge the gap between user experience and technical execution.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-muted-foreground leading-relaxed">
                My approach focuses on writing clean, modular code, optimizing load speeds, and crafting intuitive user interfaces. I love taking complex business logic and breaking it down into simple, performant, and reliable web applications.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <Reveal delay={200}>
              <div className="border border-border/60 bg-card/25 backdrop-blur-sm p-6 rounded-xl space-y-1">
                <span className="text-3xl font-semibold text-primary">5+</span>
                <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">Years Active</p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div className="border border-border/60 bg-card/25 backdrop-blur-sm p-6 rounded-xl space-y-1">
                <span className="text-3xl font-semibold text-primary">20+</span>
                <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">Projects Shipped</p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="border border-border/60 bg-card/25 backdrop-blur-sm p-6 rounded-xl space-y-1">
                <span className="text-3xl font-semibold text-primary">99%</span>
                <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">Success Rate</p>
              </div>
            </Reveal>
            <Reveal delay={350}>
              <div className="border border-border/60 bg-card/25 backdrop-blur-sm p-6 rounded-xl space-y-1">
                <span className="text-3xl font-semibold text-primary">24/7</span>
                <p className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">Communication</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
