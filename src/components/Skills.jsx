'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaGitAlt, FaAngular, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiFirebase, SiPostman, SiGraphql, SiTypescript } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      category: '🎨 Frontend',
      skills: [
        { name: 'React.js', level: 5, icon: FaReact },
        { name: 'Next.js', level: 4, icon: null },
        { name: 'Angular', level: 3, icon: FaAngular },
        { name: 'HTML5 & CSS3', level: 5, icon: null },
        { name: 'TailwindCSS', level: 5, icon: null },
        { name: 'Material UI', level: 4, icon: null },
        { name: 'Bootstrap', level: 4, icon: null },
      ],
    },
    {
      category: '⚙️ Backend',
      skills: [
        { name: 'Node.js/Express', level: 5, icon: FaNode },
        { name: 'PHP/Laravel', level: 4, icon: FaPhp },
        { name: 'GraphQL', level: 4, icon: SiGraphql },
        { name: 'Database Design', level: 5, icon: FaDatabase },
        { name: 'REST APIs', level: 5, icon: null },
        { name: 'MVC Architecture', level: 4, icon: null },
      ],
    },
    {
      category: '💾 Databases & Tools',
      skills: [
        { name: 'MongoDB', level: 5, icon: SiMongodb },
        { name: 'MySQL', level: 5, icon: SiMysql },
        { name: 'Firebase', level: 3, icon: SiFirebase },
        { name: 'Git/GitHub', level: 5, icon: FaGitAlt },
        { name: 'Postman', level: 4, icon: SiPostman },
        { name: 'TypeScript', level: 4, icon: SiTypescript },
      ],
    },
    {
      category: '🛠️ Additional',
      skills: [
        { name: 'VS Code', level: 5, icon: null },
        { name: 'Agile/Scrum', level: 4, icon: null },
        { name: 'Responsive Design', level: 5, icon: null },
        { name: 'State Management (Redux)', level: 4, icon: null },
        { name: 'Testing', level: 3, icon: null },
        { name: 'Performance Optimization', level: 4, icon: null },
      ],
    },
  ];

  const StarRating = ({ level }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i < level ? 'bg-accent' : 'bg-gray-600'}`}
        ></div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 bg-dark-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIdx * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark border border-accent/20 hover:border-accent/50 rounded-2xl p-6 transition-all duration-300 glow"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">{category.category}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIdx * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <skill.icon className="text-accent" size={18} />}
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <StarRating level={skill.level} />
                    </div>
                    <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 20}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
