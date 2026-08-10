import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

const contactInfo = [
  {
    icon: Mail,
    label: "email",
    value: "akbarimawan18@gmail.com",
    href: "mailto:akbarimawan18@gmail.com",
    hint: "send me an email",
  },
  {
    icon: Phone,
    label: "phone",
    value: "+62 812 1694 0494",
    href: "https://wa.me/6281216940494",
    hint: "drop a message",
  },
  {
    icon: MapPin,
    label: "location",
    value: "Jember, Indonesia",
    href: "https://maps.app.goo.gl/tT1XsaAGBdWmMzJU9",
    hint: "find me here",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-12 space-y-3">
            <p className="font-mono text-sm text-primary tracking-widest">
              {"// contact"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Got a project? <span className="text-gradient">Let's talk.</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Have an idea in mind or just want to say hi? My inbox is always
              open — I'll get back to you as soon as I can.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-4 sm:grid-cols-3">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden border border-border rounded-lg p-5 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="mb-4 h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                <p className="font-mono text-xs text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-sm truncate">{item.value}</p>
                <p className="mt-3 font-mono text-xs text-muted-foreground/70 inline-flex items-center gap-1">
                  {item.hint}
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1 group" asChild>
              <a
                href="https://wa.me/6281216940494"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="flex-1 group" asChild>
              <a
                href="mailto:akbarimawan18@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Send an Email
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
