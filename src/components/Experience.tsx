import Reveal from "./Reveal";

const Experience = () => {
  const experiences = [
    {
      title: "Research & Development",
      company: "PT. Java Consulting Indonesia",
      period: "Aug 2023 - Present",
      description: "Involved in developing and maintaining internal applications to streamline company operations.",
      details: [
        "Built a system to help internal clients report issues, request new features, and track application-related problems.",
        "Handled bug fixes and implemented new features to improve the payroll system.",
      ],
      stacks: ["Angular JS", "PHP Native", "Python", "MySQL", "Oracle", "Bootstrap", "RabbitMQ", "MongoDB", "Twilio"],
    },
    {
      title: "Fullstack Web Developer",
      company: "GoSocial Indonesia",
      period: "Aug 2023 - Feb 2024",
      description: "Developed a multi-event digital invitation platform with a built-in reseller system, allowing users to create and manage unlimited invitations during an active subscription period.",
      details: [
        "Multi-Invitation Management - Users can create and customize multiple invitation pages within their account.",
        "Reseller & Submember System - Accounts upgraded to reseller can manage and sell invitation access to submembers.",
        "Subscription-Based Access - Users can generate invitations as long as their package is active.",
      ],
      stacks: ["Laravel", "MySQL"],
    },
    {
      title: "Fullstack Web Developer",
      company: "Cekotechnology",
      period: "May 2023 - May 2024",
      description: "Responsible for developing and maintaining inventory and financial tracking systems tailored to operational needs.",
      details: [
        "Global & Laptop Rental Inventory System - Developed a comprehensive inventory management system to track global stock and laptop rentals.",
        "Port Income Management System - Built a financial tracking application to manage and record income and expenses related to port operations.",
      ],
      stacks: ["CodeIgniter", "MySQL"],
    },
    {
      title: "Web Developer",
      company: "PT. Padmatirta Wisesa",
      period: "Feb 2022 - Aug 2023",
      description: "Involved in the development of enterprise-level internal systems to support office operations and warehouse management.",
      details: [
        "ERP (Enterprise Resource Planning) System - Developed a custom ERP application tailored to office needs.",
        "Warehouse Management System (WMS) - Built and maintained a warehouse management application to handle inventory movement, tracking, and reporting.",
      ],
      stacks: ["PHP Native", "CodeIgniter", "JavaScript", "jQuery", "SQL Server"],
    },
    {
      title: "Freelance Web Developer",
      company: "Freelance",
      period: "Jan 2021 - Present",
      description: "Developed custom web-based applications for various clients across industries — from planning and architecture to frontend/backend implementation and deployment.",
      details: [
        "Admin Dashboards & Reporting Systems - Built data-driven dashboards with filtering, charts, and role management.",
        "E-Commerce Platforms - Developed online stores with product management, cart, and payment gateway integration.",
        "Inventory Management Systems - Designed inventory tracking systems with stock monitoring and reporting.",
        "Psychological Test Platforms (Psikotest) - Created online assessment systems for candidate evaluation.",
        "HRIS - Employee data, attendance, leave, payroll, and performance records.",
        "Cacoon - Vessel monitoring system for docking operations with mobile capture and web monitoring.",
      ],
      stacks: ["PHP Native", "Laravel", "CodeIgniter", "Next.js", "Vue.js", "MySQL", "SQL Server", "Bootstrap", "Tailwind", "RabbitMQ", "Google Cloud Service", "Keycloak"],
    },
    {
      title: "Web Developer",
      company: "Politeknik Negeri Jember",
      period: "Mar 2021 - Sep 2021",
      description: "Contributed to the development of internal academic systems to improve administrative efficiency and user experience.",
      details: [
        "Online SIM User Interface - Designed a responsive UI for the campus information system (SIM) using Bootstrap 4 and Laravel.",
        "Lecture Menu CRUD Module - Developed a complete CRUD module for managing lecture data within the academic SIM.",
      ],
      stacks: ["Laravel", "Webpack", "Javascript"],
    },
    {
      title: "Web Developer (Internship)",
      company: "CV. E-Solusindo",
      period: "Sep 2020 - Dec 2020",
      description: "Developed a complete web-based information system focused on turtledove-related content and community engagement.",
      details: [
        "Turtledove Information System - Designed and implemented a responsive UI for the turtledove information system website.",
        "News Portal - Developed a dynamic news portal integrated with the turtledove information system.",
      ],
      stacks: ["CodeIgniter", "Bootstrap", "JavaScript", "MySQL", "jQuery"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 space-y-2">
            <p className="font-mono text-sm text-primary tracking-widest">{"// experience"}</p>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight">Work Experience</h2>
          </div>
        </Reveal>

        <div className="relative pl-6 md:pl-8 border-l border-border/80 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={(index % 3) * 60}>
              <div className="relative">
                {/* Timeline node */}
                <div className="absolute left-0 -translate-x-[31px] md:-translate-x-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/60 border border-border text-xs font-mono text-muted-foreground w-fit h-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 max-w-3xl leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-4 pl-1">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2.5">
                      <span className="text-primary/75 mt-1.5 text-[8px]">&bull;</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.stacks.map((stack, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono tracking-wider uppercase bg-secondary/50 border border-border px-2 py-0.5 rounded text-muted-foreground"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
