'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl border-2 border-accent/30 hover:border-accent/50 transition-all flex items-center justify-center glow overflow-hidden">
              <Image 
                src="/images/myimg.JPG" 
                alt="Profile Picture" 
                fill
                priority
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover object-center w-full h-full"
              />   
            </div>
          </div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm a Full-Stack Developer specialized in the MERN Stack (MongoDB, Express, React, Node.js) with a passion for building scalable, user-centric web applications. With over 1 year of experience and recently completing an intensive ITI MERN training program, I combine technical excellence with practical problem-solving.
            </p>

            <p className="text-gray-400 mb-8">
              My expertise lies in crafting clean, maintainable code and implementing responsive designs that work seamlessly across all devices. I'm committed to continuous learning and staying updated with the latest technologies in web development.
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Freelance Experience:</strong> Real-world projects with actual clients
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Professional Training:</strong> ITI MERN Stack (Jul 2025 – Dec 2025)
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <strong>Technical Excellence:</strong> Clean code & scalable architecture
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
