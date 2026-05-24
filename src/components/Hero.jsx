'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Dev-HazemHefny', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/hazem-hefny-762755204', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:hefnyhazem531@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, url: 'https://wa.me/201060671828', label: 'WhatsApp' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-dark via-dark-secondary to-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          <span className="gradient-text">Full-Stack Developer</span>
          <br />
          <span className="text-gray-300">Specialized in MERN Stack</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Building scalable web applications with React, Node.js, Express, and MongoDB. Passionate about clean code, responsive design, and creating exceptional user experiences.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 mb-10 max-w-xl mx-auto"
        >
          <div className="bg-dark-secondary/50 backdrop-blur p-4 rounded-lg border border-accent/20 hover:border-accent/50 transition-all">
            <p className="text-2xl font-bold text-accent">12+</p>
            <p className="text-sm text-gray-400">Projects Completed</p>
          </div>
          <div className="bg-dark-secondary/50 backdrop-blur p-4 rounded-lg border border-accent/20 hover:border-accent/50 transition-all">
            <p className="text-2xl font-bold text-accent">1+</p>
            <p className="text-sm text-gray-400">Years Experience</p>
          </div>
          <div className="bg-dark-secondary/50 backdrop-blur p-4 rounded-lg border border-accent/20 hover:border-accent/50 transition-all">
            <p className="text-2xl font-bold text-accent">10+</p>
            <p className="text-sm text-gray-400">Technologies</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="glow px-8 py-3 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-light transition-all cursor-pointer"
          >
            View My Work
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all cursor-pointer"
          >
            Get In Touch
          </ScrollLink>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-secondary hover:bg-accent/10 border border-accent/20 hover:border-accent rounded-full text-accent transition-all glow"
                title={social.label}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
  
    </section>
  );
}
