import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import React from "react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "ProResume AI - ATS Resume Builder",
    description:
      "A full-stack AI-powered resume builder that helps users create ATS-friendly resumes with AI-generated summaries and job descriptions.",
    image: "/projects/proresume.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Gemini API"],
    link: "https://pro-resume-ai.onrender.com/",
    github: "https://github.com/parmanand-ray/resume-builder",
  },
  {
    title: "WanderLust - Room Renting Platform",
    description:
      "A full-stack room rental platform with authentication, CRUD operations, image uploads, and scalable MVC architecture.",
    image: "/projects/wanderlust.jpg",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "MVC", "Cloudinary"],
    link: "https://wonderlust-jq4y.onrender.com/",
    github: "https://github.com/parmanand-ray/wonderLust",
  },
  {
    title: "AI Chatbot Web Application",
    description:
      "An AI chatbot application that allows users to interact with an intelligent assistant using Gemini API integration.",
    image: "/projects/chatbot.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "REST API",
      "Gemini API",
    ],
    link: "https://ai-chat-bot-y6lj.onrender.com/",
    github: "https://github.com/parmanand-ray/Ai-chat",
  },
];
const Project = () => {
  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* bg gloes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
            My Projects{" "}
            <span className="font-serif italic font-normal text-white">
              & Creations
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            A collection of projects showcasing my skills in building scalable
            web applications with modern technologies and solving real-world
            problems through clean code.
          </p>
        </div>
        {/* projects grid */}
        <div className="grid md:grid-cols-2 gap-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-vedio ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {" "}
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Contents */}
              <div className="p-6 space-y-6 ">
                <div className="flex items-start justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold group-hover:text-primary transition-colors"
                  >
                    {project.title}
                  </a>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      kay={tagIdx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all cta */}
        <div className="text-center mt-12 animate-fade-in animate-delay-500">
          <a
            href="https://github.com/parmanand-ray/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
