import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleDownloadCV = () => {
  // Create a temporary link to download CV
  const link = document.createElement('a');
  link.href = '/Akbar Imawan Dwi Cahya.pdf'; // You can replace this with actual CV path
  link.download = 'Akbar Imawan Dwi Cahya.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
              <span className="text-xl">👋</span>
              <span className="text-muted-foreground font-medium">Hello, I'm</span>
            </div>
          
          {/* Name with gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-primary text-gradient">
              Akbar Imawan
            </span>
            <br />
            <span className="text-foreground">Dwi Cahya</span>
          </h1>
          
          {/* Role */}
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Fullstack Developer <span className="text-accent">|</span> Web Developer
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">
            Crafting elegant digital experiences with modern web technologies. 
            Passionate about building scalable applications that make a difference.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <Button 
              size="lg" 
              className="gradient-primary hover:shadow-glow transition-all duration-300 group"
              onClick={() => scrollToSection('projects')}
            >
              <span>View My Work</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              <span>Download CV</span>
            </Button>
          </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl" />
              
              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse" style={{ animationDuration: '3s' }} />
                <img 
                  src={profileImage} 
                  alt="Akbar Imawan Dwi Cahya - Fullstack Developer"
                  className="w-full h-full object-cover rounded-full border-4 border-background shadow-card"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
