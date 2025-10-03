# Component Dependencies & Relationships

## 🔗 Component Dependency Graph

### Main Application Flow
```
App.tsx (Main Container)
├── Navigation (Mobile + Desktop)
├── Hero Section
├── LogoCloud
├── StatisticsSection
├── DashboardSection
├── SecuritySection
├── InterviewBookingSection
├── EffortlessSecuritySection
├── TestimonialsSection
├── FAQSection
├── CTABanner
├── Footer
└── RegistrationModal (Conditional)
```

## 📦 Component Dependencies

### App.tsx
**Imports:**
- `React` - Core React library
- `useState` - State management hook
- `ChevronDown, Menu, X` - Lucide React icons
- All section components
- `RegistrationModal` - Modal component

**State Management:**
- `isRegistrationModalOpen` - Controls modal visibility
- `isMobileMenuOpen` - Controls mobile menu visibility

**Exports:**
- Default `App` component

### LogoCloud Component
**Imports:**
- `InfiniteSlider` - Custom animation component
- `ProgressiveBlur` - Custom blur effect component

**Dependencies:**
- External logo images from Tailus.io
- Custom motion primitives

### StatisticsSection Component
**Features:**
- Static statistics display
- No external dependencies
- Pure presentational component

### DashboardSection Component
**Features:**
- Video demonstration
- Cloudinary-hosted video
- No external dependencies

### SecuritySection Component
**Imports:**
- `Lock, Hexagon` - Lucide React icons
- Video demonstration
- Cloudinary-hosted video

### InterviewBookingSection Component
**Imports:**
- `Check` - Lucide React icon
- Static image from Cloudinary

### EffortlessSecuritySection Component
**Features:**
- Video demonstration
- Cloudinary-hosted video
- No external dependencies

### TestimonialsSection Component
**Imports:**
- `User` - Lucide React icon
- `useState, useEffect` - React hooks

**State Management:**
- `activeIndex` - Controls active testimonial
- Auto-rotation with useEffect

### FAQSection Component
**Imports:**
- `ChevronDown, ChevronUp` - Lucide React icons
- `useState` - State management

**State Management:**
- `expandedIndex` - Controls which FAQ is open

### CTABanner Component
**Features:**
- Static call-to-action
- No external dependencies

### Footer Component
**Imports:**
- `Instagram, Youtube` - Lucide React icons
- Custom Twitter SVG

### RegistrationModal Component
**Imports:**
- `X, User, Mail, Lock, Phone` - Lucide React icons
- `useState` - State management

**Props Interface:**
```typescript
interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**State Management:**
- `isSubmitted` - Form submission state
- `formData` - Form input data

## 🎨 Motion Primitives

### InfiniteSlider Component
**Props Interface:**
```typescript
interface InfiniteSliderProps {
  children: ReactNode;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
}
```

**Features:**
- Seamless infinite scrolling
- Hover speed control
- Customizable gap and speed

### ProgressiveBlur Component
**Props Interface:**
```typescript
interface ProgressiveBlurProps {
  className?: string;
  direction: 'left' | 'right';
  blurIntensity?: number;
}
```

**Features:**
- Directional blur effect
- Customizable intensity
- CSS backdrop-filter implementation

## 🔄 Data Flow

### State Management Pattern
```
App.tsx (Global State)
├── Modal State → RegistrationModal
├── Navigation State → Mobile Menu
└── Section State → Individual Components
```

### Component Communication
- **Parent → Child**: Props passing
- **Child → Parent**: Callback functions
- **Sibling Components**: Independent state

## 📱 Responsive Dependencies

### Breakpoint Dependencies
- **Mobile**: `< 768px` - Stack layout, mobile menu
- **Tablet**: `768px+` - Grid layouts, larger text
- **Desktop**: `1024px+` - Full grid layouts, hover effects

### Component Responsive Behavior
- **Navigation**: Desktop menu vs mobile overlay
- **Grid Layouts**: 1 column → 2 columns → 4 columns
- **Typography**: Responsive font sizes
- **Spacing**: Responsive padding and margins

## 🎯 External Dependencies

### Cloudinary Assets
- **Background Image**: Hero section background
- **Dashboard Video**: Product demonstration
- **Security Video**: Security features demo
- **Interview Image**: Booking interface screenshot
- **Security Video**: Cross-platform demo

### Lucide React Icons
- **Navigation**: Menu, X, ChevronDown
- **Forms**: User, Mail, Lock, Phone
- **Social**: Instagram, Youtube
- **UI**: Check, ChevronUp, ChevronDown

### Google Fonts
- **Manrope**: Primary font family
- **Weights**: 300, 400, 500, 600, 700

## 🔧 Build Dependencies

### Vite Configuration
- **React Plugin**: JSX transformation
- **Optimized Dependencies**: Exclude lucide-react from pre-bundling

### TypeScript Configuration
- **Strict Mode**: Enabled for type safety
- **JSX**: React JSX transform
- **Target**: ES2020

### Tailwind Configuration
- **Custom Animations**: fadeIn, fadeInUp, scroll, etc.
- **Custom Colors**: Gold accent colors
- **Font Family**: Manrope integration

## 📊 Dependency Metrics

### Component Count
- **Main Components**: 12
- **Motion Primitives**: 2
- **Total Components**: 14

### External Dependencies
- **NPM Packages**: 15+
- **External Assets**: 5+
- **Icon Library**: 1 (Lucide React)

### Internal Dependencies
- **Component Imports**: 20+
- **State Hooks**: 5+
- **Custom Hooks**: 0 (using built-in React hooks)

---

*This document outlines the complete dependency structure and relationships between all components in the OpenMint project.*
