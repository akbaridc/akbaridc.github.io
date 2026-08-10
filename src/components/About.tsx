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

        <Reveal delay={100}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Fullstack Developer specializing in modern web applications — from
            frontend interfaces to backend systems. Focus on clean code, fast
            delivery, and building products that work.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
