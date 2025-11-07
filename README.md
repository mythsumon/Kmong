# Kmong Landing Page

A responsive landing page UI for an international freelancer service platform inspired by Kmong.com.

## Features

- 🎨 Clean Korean web design aesthetic
- 📱 Fully responsive (Desktop, Tablet, Mobile)
- ✨ Smooth animations with Framer Motion
- 🌍 Multi-language ready (EN / KR / JP / MM)
- 🎯 Complete landing page sections:
  - Sticky Navbar with scroll effects
  - Hero section with animated background
  - Search & Category quick access
  - Featured Freelancers carousel
  - Recommended Services grid
  - How It Works section
  - Banner Ads section
  - Live Jobs feed
  - Testimonials slider
  - CTA section
  - Footer with language selector

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Color System

- Primary: `#3ca41d`
- Accent: `#7ff442`
- Background: `#ffffff`
- Text: `#111111`
- Gray line: `rgba(0,0,0,0.08)`
- Hover highlight: `rgba(127, 244, 66, 0.12)`

## Responsive Breakpoints

- Desktop: `≥1280px` (4-column layout)
- Tablet: `≥768px` (2-column grid)
- Mobile: `<768px` (1-column stack)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SearchAndCategories.jsx
│   ├── FeaturedFreelancers.jsx
│   ├── RecommendedServices.jsx
│   ├── HowItWorks.jsx
│   ├── BannerAds.jsx
│   ├── LiveJobs.jsx
│   ├── Testimonials.jsx
│   ├── CTASection.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

All components are modular and can be easily customized. Update colors in `tailwind.config.js` and modify components in `src/components/` as needed.

## License

MIT







