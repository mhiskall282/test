# OpenMint - Project Index

## 📋 Project Overview
**OpenMint** is a modern React-based landing page for a productivity and time tracking application. Built with TypeScript, Vite, and Tailwind CSS, featuring a sleek dark theme with gradient accents and smooth animations.

## 🏗️ Project Structure

### Root Directory
```
ui project/
├── .bolt/                    # Bolt configuration
│   ├── config.json          # Template configuration
│   └── prompt               # Design guidelines
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML entry point
├── package.json             # Dependencies and scripts
├── package-lock.json        # Lock file for dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App-specific TypeScript config
├── tsconfig.node.json       # Node-specific TypeScript config
├── vite.config.ts           # Vite build configuration
└── src/                     # Source code directory
```

### Source Code Structure (`src/`)
```
src/
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
├── index.css                 # Global styles and Tailwind imports
├── vite-env.d.ts            # Vite environment types
└── components/              # React components
    ├── CTABanner.tsx         # Call-to-action banner
    ├── DashboardSection.tsx  # Dashboard showcase section
    ├── EffortlessSecuritySection.tsx # Security features section
    ├── FAQSection.tsx       # Frequently asked questions
    ├── Footer.tsx           # Site footer
    ├── InterviewBookingSection.tsx # Interview booking features
    ├── LogoCloud.tsx        # Partner logos carousel
    ├── RegistrationModal.tsx # User registration modal
    ├── SecuritySection.tsx  # Security features
    ├── StatisticsSection.tsx # Key statistics display
    ├── TestimonialsSection.tsx # Customer testimonials
    └── motion-primitives/   # Custom animation components
        ├── infinite-slider.tsx # Infinite scrolling slider
        └── progressive-blur.tsx # Progressive blur effect
```

## 🧩 Component Index

### Main Application
- **`App.tsx`** - Main application component with navigation, hero section, and all page sections
- **`main.tsx`** - React application entry point
- **`index.html`** - HTML template with meta tags and font imports

### Page Sections
1. **Hero Section** (in App.tsx)
   - Background image with overlay
   - Navigation bar with mobile menu
   - Main heading: "Climb Every Hour, Win Every Day"
   - Call-to-action button

2. **LogoCloud** - Partner/company logos with infinite scroll animation
3. **StatisticsSection** - Key metrics display (99.9% uptime, 5M+ searches, etc.)
4. **DashboardSection** - Dashboard interface showcase with video
5. **SecuritySection** - Security features with video demonstration
6. **InterviewBookingSection** - Interview scheduling features
7. **EffortlessSecuritySection** - Cross-platform security demonstration
8. **TestimonialsSection** - Customer testimonials carousel
9. **FAQSection** - Expandable FAQ accordion
10. **CTABanner** - Final call-to-action section
11. **Footer** - Site footer with links and social media

### Interactive Components
- **RegistrationModal** - User registration form with validation
- **Mobile Navigation** - Responsive mobile menu overlay

### Animation Components
- **InfiniteSlider** - Custom infinite scrolling component
- **ProgressiveBlur** - Progressive blur effect for edges

## 🎨 Design System

### Color Palette
- **Primary Background**: `#000000` (Pure black)
- **Secondary Background**: `#0A0A0A` (Dark gray)
- **Card Background**: `#1A1A1A` (Medium gray)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#BBBBBB` (Light gray)
- **Accent**: Gradient from white to gray

### Typography
- **Font Family**: Manrope (Google Fonts)
- **Weights**: 300 (light), 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Animations
- **Fade In**: `animate-fadeIn`
- **Fade In Up**: `animate-fadeInUp`
- **Fade In Delay**: `animate-fadeInDelay`
- **Fade In Up Delay**: `animate-fadeInUpDelay`
- **Float**: `animate-float`
- **Glow**: `animate-glow`
- **Scroll**: `animate-scroll`

## 🛠️ Technology Stack

### Core Technologies
- **React 18.3.1** - UI framework
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixes

### Icons & Assets
- **Lucide React 0.344.0** - Icon library
- **Cloudinary** - Image and video hosting

### Development Tools
- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting
- **React Hooks ESLint Plugin** - React hooks linting

## 📦 Dependencies

### Production Dependencies
```json
{
  "@supabase/supabase-js": "^2.57.4",
  "lucide-react": "^0.344.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

### Development Dependencies
```json
{
  "@eslint/js": "^9.9.1",
  "@types/react": "^18.3.5",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react": "^4.3.1",
  "autoprefixer": "^10.4.18",
  "eslint": "^9.9.1",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.11",
  "globals": "^15.9.0",
  "postcss": "^8.4.35",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.5.3",
  "typescript-eslint": "^8.3.0",
  "vite": "^5.4.2"
}
```

## 🚀 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checking
```

## 🎯 Key Features

### User Interface
- **Responsive Design** - Mobile-first approach with breakpoints
- **Dark Theme** - Modern dark color scheme
- **Smooth Animations** - CSS animations and transitions
- **Interactive Elements** - Hover effects and state changes

### Functionality
- **Mobile Navigation** - Collapsible mobile menu
- **Modal System** - Registration modal with form validation
- **Video Integration** - Cloudinary-hosted demonstration videos
- **Infinite Scrolling** - Logo carousel with smooth animation
- **Accordion FAQ** - Expandable question sections
- **Testimonial Carousel** - Rotating customer testimonials

### Performance
- **Optimized Assets** - Cloudinary CDN for images and videos
- **Code Splitting** - Vite's automatic code splitting
- **Tree Shaking** - Unused code elimination
- **TypeScript** - Compile-time error checking

## 🔗 External Integrations

### Social Media
- **Instagram**: `#`

### Asset Hosting
- **Cloudinary**: Image and video hosting
  - Background images
  - Product demonstration videos
  - Interface screenshots

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

## 🎨 Component Architecture

### State Management
- **Local State**: React hooks (useState, useEffect)
- **Modal State**: Registration modal open/close
- **Navigation State**: Mobile menu toggle
- **Testimonial State**: Active testimonial index

### Props Interface
```typescript
interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface Testimonial {
  quote: string;
  body: string;
  name: string;
  title: string;
}
```

## 📄 File Descriptions

### Configuration Files
- **`eslint.config.js`** - ESLint rules for code quality
- **`tailwind.config.js`** - Tailwind CSS customization
- **`vite.config.ts`** - Vite build configuration
- **`tsconfig.*.json`** - TypeScript compiler options

### Source Files
- **`App.tsx`** - Main application logic and layout
- **`main.tsx`** - React application bootstrap
- **`index.css`** - Global styles and Tailwind imports

### Component Files
Each component is self-contained with:
- TypeScript interfaces
- Tailwind CSS styling
- Responsive design
- Accessibility considerations

## 🔧 Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📊 Project Metrics

- **Total Files**: 20+ files
- **Components**: 12 main components
- **Animation Components**: 2 custom primitives
- **External Assets**: 5+ Cloudinary-hosted media files
- **Dependencies**: 15+ packages
- **Lines of Code**: 1000+ lines

---

*This index provides a comprehensive overview of the OpenMint project structure, components, and architecture.*
