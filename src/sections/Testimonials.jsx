import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useState } from "react";
const testimonials = [
  {
    quote:
      "Parmanand consistently delivered reliable web solutions and showed strong ownership across both frontend and backend tasks. His ability to work with PHP, MySQL, JavaScript, and optimize websites for SEO made him a valuable contributor to the team.",
    author: "Madhu Ranjan",
    role: "Senior Developer, Lead Sure Media Pvt. Ltd.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },

  {
    quote:
      "Parmanand demonstrated excellent learning speed and technical curiosity. He adapted quickly to real project requirements and delivered clean, responsive web experiences with attention to detail.",
    author: "Amit Verma",
    role: "Team Lead, Web Development",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },

  {
    quote:
      "Working with Parmanand was smooth because of his strong problem-solving approach and willingness to handle both UI and backend responsibilities. He brought practical full-stack thinking to every task.",
    author: "Rohit Sharma",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },

  {
    quote:
      "Parmanand built projects that combined modern technologies with real-world functionality. His MERN and AI integration work reflected both technical capability and product thinking.",
    author: "Ankit Kumar",
    role: "Project Mentor",
    avatar:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop",
  },

  {
    quote:
      "Parmanand approaches development with consistency and discipline. Whether improving frontend responsiveness or implementing backend logic, he focuses on delivering practical results.",
    author: "Rahul Mehta",
    role: "Web Development Manager",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];
const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const privious = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>
        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animate-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>
              <div className="flex items-center gap-4 ">
                <span className=" inline-flex w-14 h-14 shrink-0 rounded-full ring-2 ring-primary/30 items-center justify-center text-2xl text-primary font-semibold ">
                  {testimonials[activeIdx].author.charAt(0)}
                </span>
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Tesimonial Navigation */}

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={privious}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronLeft />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    onClick={() => setActiveIdx(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                  />
                ))}
              </div>

              <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                <ChevronRight onClick={next} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
