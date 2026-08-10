import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "email",
      value: "akbarimawan18@gmail.com",
      href: "mailto:akbarimawan18@gmail.com",
    },
    {
      icon: Phone,
      label: "phone",
      value: "+62 812 1694 0494",
      href: "https://wa.me/6281216940494",
    },
    {
      icon: MapPin,
      label: "location",
      value: "Jember, Indonesia",
      href: "https://maps.app.goo.gl/tT1XsaAGBdWmMzJU9",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-12 space-y-2">
            <p className="font-mono text-sm text-primary tracking-widest">{"// contact"}</p>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight">Contact</h2>
          </div>
        </Reveal>

        <Reveal>
        <div className="border border-border rounded-lg divide-y divide-border">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 hover:bg-card transition-colors"
            >
              <span className="font-mono text-sm text-muted-foreground">{item.label}</span>
              <span className="flex items-center gap-3">
                <span>{item.value}</span>
                <item.icon className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-x-1" />
              </span>
            </a>
          ))}
        </div>
        </Reveal>

        <Reveal delay={100}>
          <Button
            size="lg"
            className="w-full mt-8"
            asChild
          >
            <a
              href="https://wa.me/6281216940494"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
