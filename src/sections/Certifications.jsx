import React from "react";

const skills = [
  "JavaScript",
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "MySQL",
  "PHP",
  "Tailwind CSS",
  "AJAX",
  "HTML",
  "CSS",
  "EJS",
  "Git",
  "GitHub",
  "JWT",
  "Cloudinary",
  "REST APIs",
  "MVC",
  "Generative AI",
];

const Certifications = () => {
  return (
    <section id="educations" className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education & Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Learning that{" "}
            <span className="font-serif italic font-normal text-white">
              builds expertise.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My education and certifications reflect my commitment to continuous
            learning, technical growth, and staying updated with modern industry
            standards.
          </p>
        </div>  

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div className="text-sm text-muted-foreground space-y-4">
                <div>
                  <div className="font-medium">B.Tech in CSE</div>
                  <div>Sandip University, Sijaul, Madhubani — 2021 – 2025</div>
                  <div>CGPA: 8.4</div>
                </div>

                <div>
                  <div className="font-medium">XII (BSEB)</div>
                  <div>Vishweshwar Singh Janta College, Rajnagar — 2020</div>
                </div>

                <div>
                  <div className="font-medium">X (BSEB)</div>
                  <div>Anoop High School, Bhatsimari, Rajnagar — 2018</div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Certifications</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li>
                  <strong>Core Java Training</strong> — Internshala (2023) —
                  Scored 91% (Top Performer)
                </li>
                <li>
                  <strong>Alpha (DSA with Java)</strong> — Apna College (2023)
                </li>
              </ul>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Experience</h3>
              <div className="text-sm text-muted-foreground space-y-3">
                <div>
                  <div className="font-medium">Web Developer</div>
                  <div>
                    Lead Sure Media Pvt. Ltd., Noida — July 2025 – Present
                  </div>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Developed and maintained dynamic web applications using
                      PHP, MySQL, JavaScript, and AJAX.
                    </li>
                    <li>
                      Built SEO-friendly websites, backend logic, and frontend
                      integration for scalable web solutions.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="font-medium">Web Developer Intern</div>
                  <div>CODSOFT — July 2024 – Aug 2024</div>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Assisted in developing web applications with HTML, CSS,
                      JavaScript and backend work using Node.js and MongoDB.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
