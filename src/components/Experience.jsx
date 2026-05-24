'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

export default function Experience() {
  const timeline = [
    {
      type: 'education',
      title: 'ITI MERN Stack Training Program',
      company: 'Information Technology Institute',
      period: 'Jul 2025 – Dec 2025',
      achievements: [
        'Built full-stack applications using MERN (MongoDB, Express, React, Node.js,Next.js)',
        'REST API development, testing, and database design',
        'Git version control & Agile/Scrum methodologies',
        'Project-based learning with real-world scenarios',
      ],
      icon: FaGraduationCap,
    },
    {
      type: 'experience',
      title: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      period: 'Ongoing',
      achievements: [
        'Sillage - Perfume e-commerce platform with dashboard and inventory management',
        'SunFlowers - Dynamic web application with responsive UI/UX design and multilingual support',
        'Portfolio for Interior Designer - Professional showcase website with project gallery and client testimonials',
        'Client collaboration, requirement gathering, and multilingual support (English & Russian)',
      ],
      icon: FaBriefcase,
    },
    {
      type: 'experience',
      title: 'Backend Developer Trainee',
      company: 'Rowad-IT Company',
      period: 'Jun 2023 – Sep 2023',
      achievements: [
        'Laravel & MySQL backend development',
        'Database design and optimization',
        'RESTful API development',
        'Backend performance optimization',
      ],
      icon: FaBriefcase,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="experience" className="py-20 px-4 bg-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-gray-400 text-lg">My professional journey and development</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-primary opacity-30"></div>

          {timeline.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} gap-4 md:gap-8 items-stretch`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 md:w-12 h-10 md:h-12 bg-dark border-2 border-accent rounded-full flex items-center justify-center z-10 flex-shrink-0">
                  <Icon className="text-accent" size={20} />
                </div>

                {/* Content */}
                <div className="sm:w-1/4  md:w-1/2  bg-dark-secondary/50 border border-accent/20 hover:border-accent/50 rounded-lg md:rounded-2xl p-3 md:p-6 ml-12 md:ml-0 transition-all duration-300 glow overflow-hidden">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white flex-1 leading-snug break-words">{item.title}</h3>
                    {item.type === 'education' && (
                      <span className="text-xs bg-accent/20 text-accent px-2 sm:px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                        Education
                      </span>
                    )}
                  </div>

                  <p className="text-accent font-semibold mb-1 text-xs sm:text-sm md:text-base break-words">{item.company}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2 md:mb-3">{item.period}</p>

                  <div className="space-y-1 md:space-y-2">
                    {item.achievements.map((achievement, aidx) => (
                      <div key={aidx} className="flex gap-1.5 md:gap-3 items-start">
                        <FaCheckCircle className="text-accent mt-0.5 flex-shrink-0" size={10} />
                        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-tight break-words w-full">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
