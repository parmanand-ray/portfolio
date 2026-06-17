import React from "react";
const experiences = [
  {
    period: "July 2025 — Present",
    role: "Web Developer",
    company: "Lead Sure Media Pvt. Ltd.",
    description:
      "Developing dynamic web applications using PHP, MySQL, JavaScript, and AJAX. Working on backend logic, database queries, frontend integration, and SEO-friendly website optimization.",
    technologies: ["PHP", "MySQL", "JavaScript", "AJAX", "HTML", "CSS"],
    current: true,
  },
  {
    period: "July 2024 — Aug 2024",
    role: "Web Developer Intern",
    company: "CODSOFT",
    description:
      "Assisted in building web applications using HTML, CSS, and JavaScript. Worked on backend development with Node.js, Express.js, and MongoDB.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    current: false,
  },
];
const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in aminate-delay-200">
            {" "}
            Building scalable web applications with clean code, responsive
            interfaces, secure backends, REST APIs, and AI-powered user
            experiences.
          </p>
        </div>
        {/* timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,116,0.8)]" />
          Experience items
        </div>
      </div>
    </section>
  );
};

export default Experience;
