import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/akbaridc", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akbaridc", label: "LinkedIn" },
  { icon: Twitter, href: "https://www.threads.com/@akbaridc_", label: "Threads" },
];

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Akbar Imawan Dwi Cahya
        </p>
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
