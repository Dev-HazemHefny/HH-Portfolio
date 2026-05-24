"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const projects = [
    {
      id: 1,
      title: "SunFlower E-Commerce Application",
      description:
        "Full-featured e-commerce platform with multilingual support (English & Russian) and responsive design",
      technologies: ["React.js", "Material UI", "Context API"],
      highlights: [
        "Performance Optimization",
        "Multilingual Support",
        "Responsive Design",
        "Product Management",
      ],
      image: "/images/sun.png",
      github: "https://www.sun-flower-gifts.com/",
    },
    {
      id: 2,
      title: "Event Management System",
      description:
        "GraphQL-powered event management platform demonstrating modern API design with complex queries, mutations, and system architecture.",
      technologies: [
        "GraphQL",
        "Apollo Server",
        "MongoDB",
        "Node.js",
      ],
      highlights: [
        "GraphQL API",
        "Event Management",
        "System Architecture",
      ],
      image: "/images/event.png",
      github: "https://github.com/Dev-HazemHefny/Event-Booking",
    },

    {
      id: 3,
      title: " Panto E-Commerce Platform",
      description:
        "Advanced state management showcase with Redux implementation, featuring comprehensive cart, wishlist, and multi-language support.",
      technologies: [
        "React.js",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
      ],
      highlights: [
        "Stripe Integration",
        "Redux State Management",
        "Cart System",
        "Wishlist",
        "Multi-language",
        "Responsive Design",
      ],
      image: "/images/pantoo.png",
      github: "https://github.com/Dev-HazemHefny/panto-e-commerce-",
    },
    {
      id: 4,
      title: "Tripper Booking Platform",
      description:
        "Complete booking platform inspired by Airbnb, admin dashboard built with Angular, Stripe integration, and scalable MVC architecture.",
      technologies: [
        "Angular",
        "Material UI",
        "React.js",
        "Node.js",
        "Express",
        "JWT",
        "Stripe",
        "MongoDB",
      ],
      highlights: [
        "Database Design",
        "Admin Dashboard",
        "Booking Management",
        "MVC Architecture",
        "Stripe Integration",
        "JWT Authentication",
      ],
      image: "/images/tripper.png",
      github: "https://github.com/MohamedMahmoudmm/tripper_backend_api",
    },

    {
      id: 5,
      title: "Movie App",
      description:
        "A modern movie browsing application with search, filtering, and detailed view capabilities.",
      technologies: ["Angular", "Angular Material", "TMDP API"],
      highlights: [
        "Integration with TMDP API",
        "Movie Search",
        "Detailed View",
        "Responsive Design",
      ],
      image: "/images/movie.png",
      github: "https://github.com/Dev-HazemHefny/Movie-App",
    },
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = useCallback(
    (newDirection) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        let next = prev + newDirection;
        if (next < 0) return projects.length - 1;
        if (next >= projects.length) return 0;
        return next;
      });
    },
    [projects.length],
  );

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);

    // Handle page visibility to fix slider when returning from external links
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Reset slider state when tab becomes visible again
        setCurrentIndex(0);
        setDirection(0);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Auto-rotate slider
  useEffect(() => {
    if (!isClient) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => {
        let next = prev + 1;
        if (next >= projects.length) return 0;
        return next;
      });
    }, 6000);

    return () => clearInterval(timer);
  }, [isClient, projects.length]);

  const getPrevIndex = () =>
    currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

  const ProjectCard = ({ project, position = "side" }) => {
    const isCenter = position === "center";
    return (
      <motion.div
        layout
        animate={{
          scale: isCenter ? 1.25 : 0.95,
          opacity: isCenter ? 1 : 0.65,
          zIndex: isCenter ? 20 : 10,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`bg-dark-secondary/50 border border-accent/20 rounded-2xl overflow-hidden group transition-all duration-300 ${
          isCenter ? "shadow-2xl hover:border-accent/50" : ""
        }`}
      >
        <div className="relative h-44 md:h-64 w-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {isCenter && (
          <div className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.highlights.map((h, i) => (
                <span
                  key={i}
                  className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pt-4 border-t border-gray-700">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent flex-1 justify-center py-2 border border-accent/30 rounded-lg text-sm"
              >
                <FaGithub size={16} /> Repository
              </a>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-dark relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work and technical expertise across the MERN
            stack
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative h-full">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="w-full"
              >
                {/* Project Card */}
                <div className="bg-dark-secondary/50 border border-accent/20 hover:border-accent/50 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-lg glow mx-auto max-w-2xl">
                  {/* Project Image */}
                  <div className="relative h-80 w-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center overflow-hidden">
                    <Image
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-gray-300 text-base mb-6">
                      {projects[currentIndex].description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentIndex].highlights.map(
                        (highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ),
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentIndex].technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-300 bg-dark px-3 py-1 rounded border border-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-6 border-t border-gray-700">
                      <a
                        href={projects[currentIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors flex-1 justify-center py-2 border border-accent/30 rounded-lg hover:border-accent"
                      >
                        <FaGithub size={18} />
                        <span className="text-sm">Repository</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/3 -translate-x-16 md:-translate-x-20 z-50 p-3 rounded-full bg-accent/20 hover:bg-accent/40 text-accent transition-all duration-300 hover:scale-110"
            aria-label="Previous project"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/3 translate-x-16 md:translate-x-20 z-50 p-3 rounded-full bg-accent/20 hover:bg-accent/40 text-accent transition-all duration-300 hover:scale-110"
            aria-label="Next project"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-gray-600 w-3 hover:bg-accent/60"
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-gray-400">
            <span className="text-accent font-bold">{currentIndex + 1}</span> /{" "}
            {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
}
