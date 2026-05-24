# Portfolio Setup Guide

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit `http://localhost:3000`

---

## ✏️ Personalization Checklist

### 1. **Update Contact Information**
   - [ ] Edit email in `Contact.jsx` and `Hero.jsx`
   - [ ] Update phone number
   - [ ] Update LinkedIn profile URL
   - [ ] Update GitHub profile URL

### 2. **Add Your Photo**
   - [ ] Place your professional headshot in `public/` folder
   - [ ] Update the image path in `src/components/About.jsx`

### 3. **Update Projects**
   - [ ] Add project screenshots to `public/` folder
   - [ ] Update project details in `src/components/Projects.jsx`:
     - Project title
     - Description
     - Technologies used
     - GitHub repository link
     - Live demo link
   - [ ] Add at least 1 real project

### 4. **Customize Skills**
   - [ ] Edit skill list in `src/components/Skills.jsx`
   - [ ] Adjust proficiency levels (1-5 stars)
   - [ ] Add/remove skill categories

### 5. **Update Experience Timeline**
   - [ ] Update dates and companies in `src/components/Experience.jsx`
   - [ ] Add your specific achievements
   - [ ] Reorder timeline items if needed

### 6. **Meta Information**
   - [ ] Update title in `src/app/layout.js`
   - [ ] Update meta description
   - [ ] Add favicon to `public/` folder (as favicon.ico)

### 7. **Email Integration (Optional)**
   - [ ] Choose email service (Nodemailer, SendGrid, Formspree)
   - [ ] Configure backend endpoint in `src/components/Contact.jsx`

### 8. **Colors & Branding**
   - [ ] Customize color scheme in `tailwind.config.js`
   - [ ] Update logo/initials "HH" to your initials

---

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Deploy to Other Platforms
- GitHub Pages
- AWS Amplify
- Firebase Hosting
- Self-hosted server

---

## 📝 Content Tips

### Hero Section
- Keep headline concise and compelling
- Highlight your unique value proposition
- Make CTA buttons clear

### Projects Section
- Show real projects (at least 3-4)
- Include before/after or workflow images
- Always link to GitHub and live demo
- Write 2-3 sentences about each project

### Skills Section
- Be honest about proficiency levels
- Organize by categories for clarity
- Include both technical and soft skills

### Experience Timeline
- Use bullet points for achievements
- Quantify results where possible
- Show progression and growth

---

## 🎨 Customization Tips

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  dark: '#0f172a',
  'dark-secondary': '#1e293b',
  accent: '#00d9ff',
  'accent-light': '#06b6d4',
  primary: '#1e3a8a',
}
```

### Change Animations
Edit animation configs in `framer-motion` in components:
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

### Add New Sections
1. Create new component in `src/components/`
2. Import in `src/app/page.js`
3. Add to navigation in `src/components/Navigation.jsx`

---

## 🔧 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Node Modules Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run lint
npm run build
```

---

## 📱 Testing

### Responsive Design
- Test on mobile (320px), tablet (768px), desktop (1200px+)
- Use Chrome DevTools device emulation
- Test all interactive elements

### Performance
- Check Lighthouse score
- Optimize images before uploading
- Monitor bundle size

### Cross-browser Testing
- Chrome
- Firefox
- Safari
- Edge

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Icons Library](https://react-icons.github.io/react-icons/)

---

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. ✅ Personalize all content
4. ✅ Add your projects and images
5. ✅ Test responsiveness
6. ✅ Test form functionality
7. ✅ Deploy to production
8. ✅ Share portfolio link

---

## 💡 Pro Tips

- **SEO**: Update meta tags and add sitemap
- **Analytics**: Add Google Analytics or Hotjar
- **Performance**: Use Next.js Image optimization
- **Accessibility**: Test with keyboard navigation
- **Backup**: Keep your portfolio in Git

---

Happy building! 🚀
