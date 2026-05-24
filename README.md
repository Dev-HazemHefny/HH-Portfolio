# Hazem Hefny - Portfolio Website

A modern, responsive portfolio website showcasing a Full-Stack Developer specialized in MERN Stack (MongoDB, Express, React, Node.js).

## Features

✨ **Modern Design**
- Dark mode with cyan accent colors
- Smooth animations and transitions
- Fully responsive (Mobile, Tablet, Desktop)
- Professional UI/UX with TailwindCSS

🎯 **Key Sections**
- **Hero Section**: Compelling headline with quick stats and CTA buttons
- **About Me**: Professional summary and key strengths
- **Featured Projects**: 4 project showcases with technologies and links
- **Skills**: Organized by category with proficiency ratings
- **Experience Timeline**: Professional journey and education
- **Contact Form**: Email integration with form validation
- **Footer**: Social links and quick navigation

🚀 **Performance**
- Next.js for fast performance and SEO
- Optimized images and lazy loading
- Smooth scrolling and animations with Framer Motion
- Mobile-first responsive design

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Scrolling**: React Scroll

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or Download the Repository**
   ```bash
   cd port
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development

### Project Structure
```
port/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout
│   │   ├── page.js            # Home page
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Navigation.jsx     # Top navigation
│       ├── Hero.jsx           # Hero section
│       ├── About.jsx          # About section
│       ├── Projects.jsx       # Projects showcase
│       ├── Skills.jsx         # Skills section
│       ├── Experience.jsx     # Experience timeline
│       ├── Contact.jsx        # Contact form
│       └── Footer.jsx         # Footer
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

### Customization

#### Update Personal Information
Edit the following files to add your information:
- **Contact Info**: `src/components/Contact.jsx`
- **Social Links**: `src/components/Hero.jsx` and `src/components/Footer.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Projects**: `src/components/Projects.jsx`

#### Add Project Images
1. Place images in the `public/` folder
2. Update project image paths in `src/components/Projects.jsx`

#### Modify Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  dark: '#0f172a',
  'dark-secondary': '#1e293b',
  accent: '#00d9ff',
  'accent-light': '#06b6d4',
  primary: '#1e3a8a',
}
```

## Deployment

### Deploy to Vercel (Recommended for Next.js)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Deploy to Other Platforms
- **Netlify**: `npm run build` then deploy the `.next` folder
- **Docker**: Create a Dockerfile for containerized deployment
- **Self-hosted**: Build and run on your own server

### Build for Production
```bash
npm run build
npm start
```

## Contact Information

- **Email**: hefnyhazem531@gmail.com
- **Phone**: +20 01060671828
- **LinkedIn**: [linkedin.com/in/hazem-hefny-762755204](https://linkedin.com/in/hazem-hefny-762755204)
- **GitHub**: [github.com/Dev-HazemHefny](https://github.com/Dev-HazemHefny)

## Performance Tips

- **Images**: Compress and optimize all project screenshots
- **Bundle Size**: Monitor bundle size with `next/bundle-analyzer`
- **SEO**: Update meta tags in `src/app/layout.js`
- **Analytics**: Consider adding Google Analytics or similar

## Future Enhancements

- [ ] Blog section for technical articles
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Email backend integration (Nodemailer/SendGrid)
- [ ] CMS integration (Sanity/Contentful)
- [ ] Testimonials section
- [ ] Newsletter signup

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, feel free to reach out via email or through any of the social links.

---

**Made with ❤️ using Next.js, TailwindCSS, and Framer Motion**
