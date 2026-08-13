import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const LINES = [
  { prompt: "$ whoami", output: "akbarimawan — fullstack developer" },
  { prompt: "$ cat stack", output: "react, typescript, laravel, php, mysql" },
  { prompt: "$ ./build", output: "shipping reliable web apps since 2020" },
];

const TYPE_MS = 30;
const PAUSE_MS = 500;
const LOOP_MS = 1700;

const Terminal = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const line = LINES[lineIndex];
    let id: ReturnType<typeof setTimeout>;

    if (!showOutput && charCount < line.prompt.length) {
      id = setTimeout(() => setCharCount((c) => c + 1), TYPE_MS);
    } else if (!showOutput) {
      id = setTimeout(() => setShowOutput(true), PAUSE_MS);
    } else if (lineIndex < LINES.length - 1) {
      id = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharCount(0);
        setShowOutput(false);
      }, PAUSE_MS);
    } else {
      id = setTimeout(() => {
        setLineIndex(0);
        setCharCount(0);
        setShowOutput(false);
      }, LOOP_MS);
    }
    return () => clearTimeout(id);
  }, [lineIndex, charCount, showOutput]);

  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden font-mono text-sm w-full max-w-lg">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="ml-2 text-xs text-muted-foreground">akbar@portfolio:~</span>
      </div>
      <div className="p-5 space-y-3 min-h-[236px]">
        {LINES.map((line, i) => {
          const completed = i < lineIndex;
          const current = i === lineIndex;
          if (!completed && !current) return null;

          const typed = current ? line.prompt.slice(0, charCount) : line.prompt;
          const [cmd, ...rest] = typed.split(" ");
          const restText = rest.join(" ");

          return (
            <div key={i} className="space-y-1">
              <div className="text-foreground">
                <span className="text-primary">{cmd}</span>
                {restText && <span> {restText}</span>}
                {current && !showOutput && <span className="cursor-blink text-primary">▌</span>}
              </div>
              {(completed || (showOutput && current)) && (
                <div className="text-muted-foreground pl-4">{line.output}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/Akbar Imawan Dwi Cahya.pdf";
  link.download = "Akbar Imawan Dwi Cahya.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-4 pt-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] hero-glow glow-breathe pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="relative inline-flex">
              <div className="absolute -inset-8 hero-glow rounded-full" />
              <div className="absolute -inset-1 rounded-full hero-ring" />
              <img
                src={profileImage}
                alt="Akbar Imawan Dwi Cahya - Fullstack Developer"
                className="relative w-24 h-24 rounded-full border-4 border-background object-cover"
              />
            </div>

            <div>
              <p className="font-mono text-sm text-primary tracking-widest mb-4">
                {">"} hello, i am
              </p>
              <h1 className="text-5xl md:text-7xl font-normal leading-none tracking-tight">
                Akbar Imawan
                <br />
                Dwi Cahya
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-md">
              Fullstack Developer — crafting web applications with modern
              technologies, from frontend interfaces to backend systems.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline" onClick={handleDownloadCV}>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>available for projects</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
