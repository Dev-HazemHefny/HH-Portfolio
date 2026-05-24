'use client';

import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundMusic from '@/components/BackgroundMusic';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hazem Hefny | Full-Stack Developer | MERN Stack</title>
        <meta
          name="description"
          content="Full-Stack Developer specialized in MERN Stack. Building scalable web applications with React, Node.js, and MongoDB."
        />
      </head>
      <body className="bg-dark text-gray-100 overflow-x-hidden">
        <Navigation />
        <BackgroundMusic />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
