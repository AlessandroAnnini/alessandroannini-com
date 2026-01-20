# Alessandro Annini - Personal Portfolio

A modern, brutalist portfolio website built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## ✨ Features

- 🎨 **Unique Brutalist Design** - Bold, striking aesthetic with strong typography and colors
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ♿ **Accessible** - WCAG compliant with ARIA labels, keyboard navigation, and screen reader support
- ⚡ **Performance Optimized** - Lazy loading, code splitting, and optimized rendering
- 🎭 **Custom Glitch Effect** - Eye-catching animated text effect on the homepage
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and Twitter Card support
- 🛡️ **Error Handling** - Error boundary for graceful error recovery
- 🎯 **Type Safe** - Built with TypeScript for reliability and maintainability

## 🚀 Performance & Best Practices

### Code Quality
- ✅ Zero ESLint errors/warnings
- ✅ TypeScript strict mode enabled
- ✅ React 19 with latest best practices
- ✅ Proper error boundaries
- ✅ Memory leak prevention in custom hooks

### Accessibility
- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support (Tab navigation with role="tab")
- ✅ Skip to content link
- ✅ Reduced motion support for users with motion sensitivity
- ✅ Focus management and visible focus indicators
- ✅ Screen reader friendly

### Performance
- ✅ Lazy loading of route components
- ✅ Code splitting for optimal bundle size
- ✅ Optimized re-renders with proper React patterns
- ✅ Preconnect hints for external resources
- ✅ Dynamic page titles for better UX

### SEO
- ✅ Comprehensive meta tags (title, description, keywords)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card support
- ✅ robots.txt for search engine crawling
- ✅ Semantic HTML with proper heading hierarchy

## 🛠️ Development

This project uses Vite for fast development and builds.

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
/src
  /components
    /pages          # Page-level components (Home, Skills, Career, Projects, Articles)
    /ui             # shadcn/ui components (Badge, Alert)
    BrutalistCard.tsx
    NavButton.tsx
    ErrorBoundary.tsx
  /hooks
    useGlitchText.ts  # Custom hook for text glitch effect
  /lib
    utils.ts        # Utility functions
  App.tsx           # Main app component with routing logic
  main.tsx          # App entry point with error boundary
  index.css         # Global styles and Tailwind configuration
  data.json         # Portfolio content data
```

## 🎨 Technologies

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Next generation frontend tooling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon library
- **Umami Analytics** - Privacy-focused analytics

## 🔧 Architecture Decisions

### State Management
- Simple useState for section navigation (no need for complex state management)
- Data stored in JSON for easy content updates

### Component Design
- Functional components with hooks
- Props interfaces for type safety
- Reusable BrutalistCard component with variants
- Lazy loading for non-critical routes

### Performance Strategy
- Route-based code splitting with React.lazy()
- Suspense boundaries with loading states
- Optimized glitch effect hook with proper cleanup
- Minimal dependencies for smaller bundle size

## 📈 Recent Improvements (2026)

1. **Fixed ESLint Warning** - Properly suppressed warning in Badge component
2. **Enhanced SEO** - Added comprehensive meta tags and Open Graph support
3. **Performance Optimization** - Implemented lazy loading for all non-critical pages
4. **Memory Leak Fix** - Improved useGlitchText hook with proper timeout cleanup
5. **Accessibility Boost** - Added ARIA labels, keyboard navigation, and skip link
6. **Dynamic Titles** - Page titles update based on active section
7. **Error Boundary** - Graceful error handling with user-friendly error page
8. **Reduced Motion Support** - Respects user's motion preferences
9. **Better Icon Mapping** - Optimized icon component rendering in Career section
10. **DNS Prefetch** - Added preconnect for external resources

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

© 2025 Alessandro Annini. All rights reserved.
