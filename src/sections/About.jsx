import React from "react";
import {
  Code2,
  Database,
  Rocket,
  Brain,
  ShieldCheck,
  Layers,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive and scalable web applications using React, Node.js, Express.js, and modern technologies.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Developing secure REST APIs, authentication systems, and database-driven applications with clean architecture.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Turning ideas into efficient digital solutions with focus on performance, usability, and maintainability.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Exploring AI-powered applications and integrating intelligent features using modern AI technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Applications",
    description:
      "Implementing authentication, authorization, and secure development practices for reliable applications.",
  },
  {
    icon: Layers,
    title: "Modern Architecture",
    description:
      "Building structured applications using MVC patterns, reusable components, and scalable project architecture.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me.
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
              Building Modern Web Applications,
              <span className="font-serif italic font-normal text-white">
                {" "}
                One Component at a Time
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
              <p>
                I am Parmanand Ray, a Full Stack Web Developer passionate about
                building modern, responsive, and scalable web applications. I
                specialize in JavaScript, React.js, Node.js, Express.js,
                MongoDB, and PHP, with experience in developing complete web
                solutions from frontend interfaces to backend APIs.
              </p>

              <p>
                I enjoy transforming ideas into functional digital products by
                writing clean code, designing efficient solutions, and building
                user-focused applications. I have worked on projects involving
                authentication systems, REST APIs, AI-powered applications, and
                database-driven platforms using technologies like MERN Stack,
                MySQL, and Gemini API.
              </p>

              <p>
                Currently, I am focused on improving my development skills,
                exploring new technologies, and creating impactful web
                experiences. I believe in continuous learning, problem-solving,
                and delivering solutions that combine performance, simplicity,
                and great user experience.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Building innovative and scalable digital solutions through
                clean code, modern technologies, and problem-solving. Focused on
                creating web applications that deliver smooth user experiences
                and meaningful impact."
              </p>
            </div>
          </div>
          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 ">
            {highlights.map((item, index) => (
              <div
                kay={index}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  {<item.icon className="h-6 w-6 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
