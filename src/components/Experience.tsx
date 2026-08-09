import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Research & Development",
      company: "PT. Java Consulting Indonesia",
      period: "Aug 2023 - Present",
      description: "Involved in developing and maintaining internal applications to streamline company operations.",
      details: [
        "Built a system to help internal clients report issues, request new features, and track application-related problems.",
        "Handled bug fixes and implemented new features to improve the payroll system."
      ],
      stacks: ["Angular JS", "PHP Native", "Python", "MySQL", "Oracle", "Bootstrap", "RabbitMQ", "MongoDB", "Twilio"]
    },
    {
      title: "Fullstack Web Developer",
      company: "GoSocial Indonesia",
      period: "Aug 2023 - Feb 2024",
      description: "Developed a multi-event digital invitation platform with a built-in reseller system, allowing users to create and manage unlimited invitations during an active subscription period.",
      details: [
        "Multi-Invitation Management - Users can create and customize multiple invitation pages within their account.",
        "Reseller & Submember System - Accounts upgraded to reseller can manage and sell invitation access to submembers, each with flexible pricing and account control",
        "Subscription-Based Access - Users can generate invitations as long as their package is active, with automatic validation and feature access control"
      ],
      stacks: ["Laravel", "MySQL"]
    },
    {
      title: "Fullstack Web Developer",
      company: "Cekotechnology",
      period: "May 2023 - May 2024",
      description: "Responsible for developing and maintaining inventory and financial tracking systems tailored to operational needs.",
      details: [
        "Global & Laptop Rental Inventory System - Developed a comprehensive inventory management system to track global stock and laptop rentals, including features for purchase orders (PO), incoming and outgoing goods, and item categorization",
        "Port Income Management System - Built a financial tracking application to manage and record income and expenses related to port operations, ensuring accurate and real-time financial reporting",
      ],
      stacks: ["CodeIgniter", "MySQL"]
    },
    {
      title: "Web Developer",
      company: "PT. Padmatirta Wisesa",
      period: "Feb 2022 - Aug 2023",
      description: "Involved in the development of enterprise-level internal systems to support office operations and warehouse management.",
      details: [
        "ERP (Enterprise Resource Planning) System - Developed a custom ERP application tailored to office needs, covering various operational modules",
        "Warehouse Management System (WMS) - Built and maintained a warehouse management application to handle inventory movement, tracking, and reporting"
      ],
      stacks: ["PHP Native", "CodeIgniter", "JavaScript", "jQuery", "SQL Server"]
    },
    {
      title: "Freelance Web Developer",
      company: "Freelance",
      period: "Jan 2021 - Present",
      description: "Developed custom web-based applications for various clients across industries. Involved in end-to-end development—from planning and system architecture to frontend/backend implementation and deployment.",
      details: [
        "Admin Dashboards & Reporting Systems - Built data-driven dashboards with advanced filtering, charts, and user role management",
        "E-Commerce Platforms - Developed online stores with product management, shopping cart, and payment gateway integration",
        "Inventory Management Systems - Designed and implemented inventory tracking systems with stock monitoring and reporting features",
        "Psychological Test Platforms (Psikotest) - Created online assessment systems for candidate evaluation and result analytics",
        "Campus Company Profile Websites - Developed dynamic and responsive websites to showcase campus information, programs, and news",
        "Boarding House Management - Built apps for managing tenant data, room availability, payments, and reports",
        "Digital Invitation Platforms - Delivered elegant and customizable web invitations with RSVP, photo galleries, and guestbooks",
        "Warehouse Management Systems - Built comprehensive WMS with features for stock movement, location tracking, and reporting.",
        "HRIS (Human Resource Information System) - Developed systems to manage employee data, attendance, leave, payroll, and performance records",
        "Cacoon - Built a vessel monitoring system for docking operations. Each shift (1 - 3) is required to capture vessel photos using an Android device, which are stored in documentation records and monitored via both web and mobile interfaces. The system integrates backend and mobile frontend logic, where document submission to headquarters is triggered directly from mobile actions",
        "Others - Various other custom systems tailored to specific business needs",
      ],
      stacks: ["PHP Native", "Laravel", "CodeIgniter", "Next.js", "Vue.js", "Alpine.js", "MySQL", "SQL Server", "Bootstrap", "Tailwind", "RabbitMQ", "Google Cloud Service", "Key Cloack"]
    },
    {
      title: "Web Developer",
      company: "Politeknik Negeri Jember",
      period: "Mar 2021 - Sep 2021",
      description: "Contributed to the development of internal academic systems to improve administrative efficiency and user experience.",
      details: [
        "Online SIM User Interface - Designed and implemented a responsive user interface for the campus information system (SIM) using Bootstrap 4 and Laravel, enhancing usability for students and staff",
        "Lecture Menu CRUD Module - Developed a complete CRUD (Create, Read, Update, Delete) module for managing lecture data within the academic SIM, utilizing Laravel 7 and Backpack for Laravel to streamline backend operations"
      ],
      stacks: ["Laravel", "Webpack", "Javascript"]
    },
    {
      title: "Web Developer (Internship)",
      company: "CV. E-Solusindo",
      period: "Sep 2020 - Dec 2020",
      description: "Developed a complete web-based information system focused on turtledove-related content and community engagement.",
      details: [
        "Turtledove Information System - Designed and implemented a responsive user interface for the turtledove information system website to enhance user experience and accessibility",
        "News Portal - Developed a dynamic news portal integrated with the turtledove information system, enabling content management, article publishing, and user interaction features"
      ],
      stacks: ["CodeIgniter", "Bootstrap", "JavaScript", "MySQL", "jQuery"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-primary text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-effect hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                      <Briefcase className="h-6 w-6 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  {exp?.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground/90">Job Desc :</p>
                  <ul className="space-y-1">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground/90">Stack & Other :</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.stacks.map((stack, i) => (
                      <div key={i} className="text-sm text-muted-foreground flex items-center border px-3 py-1 rounded-full bg-primary/10 border-primary/20">
                        <span>{stack}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
