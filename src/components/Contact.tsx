import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akbarimawan18@gmail.com",
      href: "mailto:akbarimawan18@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 812 1694 0494",
      href: "https://wa.me/6281216940494"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jember, Indonesia",
      href: "https://maps.app.goo.gl/tT1XsaAGBdWmMzJU9"
    }
  ];

  const socials = [
    { icon: Github, href: "https://github.com/akbaridc", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/akbaridc", label: "LinkedIn" },
    { icon: Twitter, href: "https://www.threads.com/@akbaridc_", label: "Threads" },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="gradient-primary text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="glass-effect rounded-2xl p-8 md:p-12 space-y-8">
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border/50" />

          {/* Social Links */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-muted-foreground">Connect with me</p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-xl border-primary/30 hover:bg-primary/10 hover:border-primary transition-all hover:scale-110"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <Button
              size="lg"
              className="gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="mailto:akbarimawan18@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
