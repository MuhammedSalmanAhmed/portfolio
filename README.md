# Muhammad Salman Ahmed - Portfolio Website

A modern, elegant, and fully responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

✨ **Modern Design**: Clean and professional UI with smooth animations
📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
🎨 **Tailwind CSS**: Beautiful styling with custom color scheme
⚡ **Fast Performance**: Built with Next.js for optimal performance
🎯 **Sections Include**:
- Hero Section with introduction
- About Me with professional background
- Professional Experience showcase
- Skills & Expertise grid
- Featured Projects portfolio
- Certifications & Achievements (with PDF downloads)
- Contact Form with social links
- Professional Footer

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment Ready**: Static export configuration

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Install Dependencies**

```bash
npm install
```

2. **Run Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Building for Production

```bash
npm run build
npm start
```

### Static Export (for hosting on static platforms)

The project is already configured for static export. Build with:

```bash
npm run build
```

The static files will be generated in the `out` folder, ready to be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Project Structure

```
salman_portfolio/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Responsive navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Professional experience
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Projects portfolio
│   ├── Certificates.tsx   # Certificates with PDF links
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer section
├── public/
│   ├── Internship Certificate M Salman Ahmed BYS ML.pdf
│   └── Muhammad Salman Ahmed M Labs Certifiacte.pdf
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Project dependencies

```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#2563eb',    // Blue
  secondary: '#1e293b',  // Dark gray
  accent: '#f59e0b',     // Orange
}
```

### Content

- Update personal information in respective component files
- Modify experience, skills, and projects in their component files
- Add or update certificates in the `Certificates.tsx` component

### Contact Information

Update email and social links in:
- `components/Hero.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

## PDF Certificates

The certificate PDFs are accessible via:
- Direct download buttons
- View in new tab functionality
- Located in the public folder for easy access

## Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Performance Features

- Optimized images and assets
- Smooth scroll behavior
- Lazy loading where applicable
- Minimal bundle size
- Fast page transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `out` folder to Netlify

### GitHub Pages

1. Build: `npm run build`
2. Push the `out` folder to gh-pages branch

## License

© 2026 Muhammad Salman Ahmed. All rights reserved.

## Contact

- **Email**: salmanahmedktk@hotmail.com
- **Location**: Karachi, Pakistan
- **Education**: NED University of Engineering and Technology

---

Built with ❤️ using Next.js and Tailwind CSS
