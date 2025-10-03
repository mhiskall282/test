# OpenMint - Productivity & Time Tracking Platform

A modern, responsive landing page for OpenMint, a productivity and time tracking application. Built with React, TypeScript, and Tailwind CSS, featuring a sleek dark theme with smooth animations and interactive components.

## 🚀 Live Demo

Visit the live application to experience the full interactive features.

## ✨ Features

### 🎨 Modern Design
- **Dark Theme**: Sleek black and gray color scheme
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Animations**: CSS animations and transitions
- **Gradient Accents**: Beautiful gradient text effects

### 📱 Interactive Components
- **Mobile Navigation**: Collapsible mobile menu
- **Registration Modal**: User registration with form validation
- **FAQ Accordion**: Expandable question sections
- **Testimonial Carousel**: Rotating customer testimonials
- **Logo Carousel**: Infinite scrolling partner logos

### 🎯 Key Sections
- **Hero Section**: Compelling headline with call-to-action
- **Statistics**: Key metrics and performance indicators
- **Dashboard Showcase**: Product demonstration videos
- **Security Features**: Enterprise-grade security highlights
- **Customer Testimonials**: Social proof and reviews
- **FAQ Section**: Common questions and answers

## 🛠️ Technology Stack

### Core Technologies
- **React 18.3.1** - Modern UI framework
- **TypeScript 5.5.3** - Type safety and developer experience
- **Vite 5.4.2** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.344.0** - Beautiful icon library
- **Custom Animations** - Smooth transitions and effects

### Development Tools
- **ESLint** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing and optimization

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ui-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checking
```

## 📁 Project Structure

```
src/
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
├── index.css                 # Global styles
└── components/              # React components
    ├── CTABanner.tsx         # Call-to-action banner
    ├── DashboardSection.tsx  # Dashboard showcase
    ├── FAQSection.tsx       # FAQ accordion
    ├── Footer.tsx           # Site footer
    ├── LogoCloud.tsx        # Partner logos
    ├── RegistrationModal.tsx # User registration
    ├── SecuritySection.tsx  # Security features
    ├── StatisticsSection.tsx # Key metrics
    ├── TestimonialsSection.tsx # Customer reviews
    └── motion-primitives/   # Custom animations
        ├── infinite-slider.tsx
        └── progressive-blur.tsx
```

## 🎨 Design System

### Color Palette
- **Primary**: `#000000` (Pure black)
- **Secondary**: `#0A0A0A` (Dark gray)
- **Cards**: `#1A1A1A` (Medium gray)
- **Text**: `#FFFFFF` (White)
- **Muted Text**: `#BBBBBB` (Light gray)

### Typography
- **Font**: Manrope (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Animations
- Fade in effects
- Smooth transitions
- Hover animations
- Infinite scrolling

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `1024px+`

### Mobile Features
- Collapsible navigation menu
- Touch-friendly interactions
- Optimized typography
- Responsive images and videos

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/`
2. Import in `App.tsx`
3. Add to the main layout
4. Style with Tailwind CSS

### Modifying Styles
- Edit `tailwind.config.js` for global changes
- Use Tailwind classes for component styling
- Add custom CSS in `src/index.css`

### Adding Animations
- Use existing animation classes
- Create custom animations in `tailwind.config.js`
- Implement with CSS transitions

## 📦 Dependencies

### Production
- React & React DOM
- Lucide React (icons)
- Supabase (backend)

### Development
- Vite (build tool)
- TypeScript (type safety)
- ESLint (code quality)
- Tailwind CSS (styling)
- PostCSS (CSS processing)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel/Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team

---

**OpenMint** - Climb Every Hour, Win Every Day 🚀
