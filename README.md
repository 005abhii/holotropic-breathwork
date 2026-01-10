# Holotropic Breathwork Website

A modern, responsive Next.js website for a Holotropic Breathwork practice, inspired by holotropic.com. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Mobile-first approach, works on all devices
- **SEO Optimized**: Meta tags and semantic HTML for better search rankings
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Type-Safe**: Full TypeScript implementation
- **Accessible**: WCAG compliant with keyboard navigation support

## Pages Included

### Core Pages
- ✅ **Home** - Hero section, features, upcoming events, testimonials
- ✅ **About Father KC Thomas** - Biography and credentials
- ✅ **What is Holotropic Breathwork** - Detailed explanation
- ✅ **Sessions & Retreats** - Available offerings
- ✅ **Facilitator Training** - Training program details
- ✅ **Events Calendar** - Upcoming events listing
- ✅ **Testimonials** - Client testimonials
- ✅ **Resources** - Articles and guides
- ✅ **FAQ & Safety** - Common questions
- ✅ **Contact & Registration** - Contact form and registration

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory**
   ```bash
   cd holotropic-breathwork-site
   ```

2. **Install dependencies** (Already done)
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

## Project Structure

```
holotropic-breathwork-site/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── about/             # About pages
│   │   ├── contact/           # Contact page
│   │   ├── events/            # Events listing
│   │   ├── faq/              # FAQ page
│   │   ├── resources/        # Resources page
│   │   ├── sessions/         # Sessions page
│   │   ├── testimonials/     # Testimonials page
│   │   ├── training/         # Training page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   ├── components/           # Reusable components
│   │   ├── Header.tsx        # Navigation header
│   │   └── Footer.tsx        # Footer component
│   ├── data/                 # Static data
│   │   ├── events.ts         # Events data
│   │   ├── faqs.ts           # FAQ data
│   │   ├── resources.ts      # Articles/resources
│   │   └── testimonials.ts   # Testimonial data
│   └── types/                # TypeScript types
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

### Colors
Edit the color scheme in [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  primary: { ... },
  earth: { ... }
}
```

### Content
1. **Events**: Edit [src/data/events.ts](src/data/events.ts)
2. **Testimonials**: Edit [src/data/testimonials.ts](src/data/testimonials.ts)
3. **FAQs**: Edit [src/data/faqs.ts](src/data/faqs.ts)
4. **Resources**: Edit [src/data/resources.ts](src/data/resources.ts)

### Images
Replace placeholder images with actual photos:
- Add images to `/public/images/`
- Update image paths in components

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Deploy to Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Contact Form Integration

To make the contact form functional, integrate with:
- **FormSpree**: Easy form backend
- **SendGrid**: Email service
- **Resend**: Modern email API

## License

This project is proprietary. All rights reserved.

## Support

For questions or support:
- Email: info@holotropicbreathwork.in
- Phone: +91 98765 43210

---

**Built with ❤️ for Father KC Thomas Holotropic Breathwork Practice**
