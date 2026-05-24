'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      alert('Thank you for your message! I will get back to you soon.');
    }, 1000);
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'hefnyhazem531@gmail.com',
      href: 'mailto:hefnyhazem531@gmail.com',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+20 01060671828',
      href: 'https://wa.me/201060671828',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/hazem-hefny-762755204',
      href: 'https://linkedin.com/in/hazem-hefny-762755204',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Dev-HazemHefny',
      href: 'https://github.com/Dev-HazemHefny',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-dark-secondary/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={idx}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark border border-accent/20 hover:border-accent/50 rounded-2xl p-6 text-center transition-all duration-300 glow group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent group-hover:scale-110 transition-transform" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.label}</h3>
                <p className="text-gray-400 text-sm break-all">{method.value}</p>
              </motion.a>
            );
          })}
        </div>

   
      </div>
    </section>
  );
}
