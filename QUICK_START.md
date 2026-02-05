# 🚀 Quick Start Guide

## Welcome to Your Portfolio Website!

This is a professional portfolio website built specifically for **Muhammad Salman Ahmed** using modern web technologies.

---

## 📋 What's Included

Your portfolio includes:
- ✅ Professional hero section
- ✅ About me with background
- ✅ Work experience timeline
- ✅ Skills showcase
- ✅ Projects portfolio
- ✅ **Certificates section** (with downloadable PDFs)
- ✅ Contact form
- ✅ Fully responsive design

---

## 🎯 Getting Started (3 Easy Steps)

### Step 1: Install Dependencies

**Option A - Using the batch file (Easiest):**
- Double-click `setup.bat`
- Wait for installation to complete

**Option B - Using Command Prompt:**
```bash
npm install
```

### Step 2: Start the Development Server

**Option A - Using the batch file:**
- Double-click `start-dev.bat`

**Option B - Using Command Prompt:**
```bash
npm run dev
```

### Step 3: View Your Website

- Open your browser
- Go to: **http://localhost:3000**
- 🎉 Your portfolio is live!

---

## 📁 Your Certificates

Your certificates are now accessible at:
- `/Internship Certificate M Salman Ahmed BYS ML.pdf`
- `/Muhammad Salman Ahmed M Labs Certifiacte.pdf`
- `/Resume - Muhammed Salman Ahmed.pdf`

They're displayed in the Certificates section with:
- Download buttons
- View in browser option
- Professional styling

---

## 🎨 Customization Tips

### Update Your Information

1. **Contact Details**: Edit `components/Hero.tsx`, `components/Contact.tsx`, and `components/Footer.tsx`
2. **Experience**: Edit `components/Experience.tsx`
3. **Projects**: Edit `components/Projects.tsx`
4. **Skills**: Edit `components/Skills.tsx`

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#2563eb',    // Main color (blue)
  secondary: '#1e293b',  // Dark color
  accent: '#f59e0b',     // Accent color (orange)
}
```

---

## 🌐 Deploying Your Portfolio

### Option 1: Vercel (Recommended - FREE)

1. Create account at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Click "Deploy"
4. Done! You get a free `.vercel.app` domain

### Option 2: Netlify (FREE)

1. Build your site: `npm run build`
2. Drag the `out` folder to [netlify.com/drop](https://netlify.com/drop)
3. Done!

### Option 3: GitHub Pages (FREE)

1. Build: `npm run build`
2. Push the `out` folder to gh-pages branch
3. Enable GitHub Pages in repository settings

---

## 📱 Responsive Design

Your portfolio automatically adjusts for:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

---

## 🔧 Troubleshooting

### Problem: Dependencies won't install
**Solution**: 
- Make sure Node.js is installed: [nodejs.org](https://nodejs.org)
- Use Command Prompt instead of PowerShell
- Run as Administrator

### Problem: Port 3000 is already in use
**Solution**:
- Stop other applications using port 3000
- Or use: `npm run dev -- -p 3001` (different port)

### Problem: PDF files not showing
**Solution**:
- Make sure PDFs are in the `public` folder
- Restart the development server

---

## 📞 Support

- **Email**: salmanahmedktk@hotmail.com
- Check the main README.md for detailed documentation

---

## ✅ Checklist Before Deploying

- [ ] Tested on mobile view
- [ ] All links work correctly
- [ ] Contact form tested
- [ ] Certificates download properly
- [ ] Updated all personal information
- [ ] Checked spelling and grammar
- [ ] Ran `npm run build` successfully

---

**Made with ❤️ for Muhammad Salman Ahmed**

*Built with Next.js, TypeScript, and Tailwind CSS*
