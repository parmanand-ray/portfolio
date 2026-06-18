import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#experience",
    label: "Experience",
  },
   {
    href: "#educations",
    label: "Education",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}   z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold  tracking-tight hover:text-primary"
        >
          PR <span className="text-primary">.</span>
        </a>
        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-1 ">
          <div className="glass rounded-full px-2 py-1 gap-1 flex items-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className="px-4 py-2 text-muted-foreground text-sm hover:text-foreground rounded-full hover:bg-surface"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* CTA button */}
        <div className=" hidden md:block">
          <Button
            size="sm"
            onClick={() => document.getElementById("contact").scrollIntoView()}
          >
            Contact Me
          </Button>
        </div>

        {/* mobile nav btn */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground corsor-pointer "
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              size="sm"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
