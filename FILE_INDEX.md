# Complete File Index

## 📁 Root Directory Files

### Configuration Files
| File | Purpose | Type | Size |
|------|---------|------|------|
| `eslint.config.js` | ESLint configuration | JavaScript | ~1KB |
| `package.json` | Dependencies and scripts | JSON | ~2KB |
| `package-lock.json` | Dependency lock file | JSON | ~50KB |
| `postcss.config.js` | PostCSS configuration | JavaScript | ~200B |
| `tailwind.config.js` | Tailwind CSS configuration | JavaScript | ~2KB |
| `tsconfig.json` | TypeScript configuration | JSON | ~200B |
| `tsconfig.app.json` | App-specific TypeScript config | JSON | ~800B |
| `tsconfig.node.json` | Node-specific TypeScript config | JSON | ~600B |
| `vite.config.ts` | Vite build configuration | TypeScript | ~300B |

### Project Files
| File | Purpose | Type | Size |
|------|---------|------|------|
| `index.html` | Main HTML template | HTML | ~500B |
| `.gitignore` | Git ignore rules | Text | ~800B |
| `README.md` | Project documentation | Markdown | ~5KB |
| `PROJECT_INDEX.md` | Comprehensive project index | Markdown | ~8KB |
| `COMPONENT_DEPENDENCIES.md` | Component relationships | Markdown | ~6KB |
| `FILE_INDEX.md` | This file index | Markdown | ~4KB |

### Bolt Configuration
| File | Purpose | Type | Size |
|------|---------|------|------|
| `.bolt/config.json` | Bolt template configuration | JSON | ~100B |
| `.bolt/prompt` | Design guidelines | Text | ~200B |

## 📁 Source Directory (`src/`)

### Main Application Files
| File | Purpose | Type | Lines | Size |
|------|---------|------|-------|------|
| `App.tsx` | Main application component | TypeScript | 219 | ~8KB |
| `main.tsx` | React application entry point | TypeScript | 10 | ~300B |
| `index.css` | Global styles and Tailwind imports | CSS | 8 | ~200B |
| `vite-env.d.ts` | Vite environment types | TypeScript | 2 | ~50B |

## 📁 Components Directory (`src/components/`)

### Main Components
| File | Purpose | Type | Lines | Size |
|------|---------|------|-------|------|
| `CTABanner.tsx` | Call-to-action banner | TypeScript | 60 | ~2KB |
| `DashboardSection.tsx` | Dashboard showcase | TypeScript | 49 | ~1.5KB |
| `EffortlessSecuritySection.tsx` | Security features | TypeScript | 32 | ~1KB |
| `FAQSection.tsx` | FAQ accordion | TypeScript | 92 | ~3KB |
| `Footer.tsx` | Site footer | TypeScript | 93 | ~3KB |
| `InterviewBookingSection.tsx` | Interview booking | TypeScript | 62 | ~2KB |
| `LogoCloud.tsx` | Partner logos carousel | TypeScript | 110 | ~3KB |
| `RegistrationModal.tsx` | User registration modal | TypeScript | 219 | ~8KB |
| `SecuritySection.tsx` | Security features | TypeScript | 49 | ~1.5KB |
| `StatisticsSection.tsx` | Key statistics | TypeScript | 75 | ~2KB |
| `TestimonialsSection.tsx` | Customer testimonials | TypeScript | 136 | ~4KB |

### Motion Primitives (`src/components/motion-primitives/`)
| File | Purpose | Type | Lines | Size |
|------|---------|------|-------|------|
| `infinite-slider.tsx` | Infinite scrolling component | TypeScript | 45 | ~1.5KB |
| `progressive-blur.tsx` | Progressive blur effect | TypeScript | 31 | ~1KB |

## 📊 File Statistics

### Total Files
- **Root Directory**: 12 files
- **Source Directory**: 4 files
- **Components**: 11 files
- **Motion Primitives**: 2 files
- **Total**: 29 files

### File Types
- **TypeScript**: 15 files
- **JavaScript**: 3 files
- **JSON**: 6 files
- **Markdown**: 4 files
- **HTML**: 1 file
- **CSS**: 1 file

### Lines of Code
- **App.tsx**: 219 lines
- **RegistrationModal.tsx**: 219 lines
- **TestimonialsSection.tsx**: 136 lines
- **LogoCloud.tsx**: 110 lines
- **FAQSection.tsx**: 92 lines
- **Footer.tsx**: 93 lines
- **Total**: ~1,500+ lines

## 🔍 File Dependencies

### Import Relationships
```
App.tsx
├── All section components
├── RegistrationModal
├── Lucide React icons
└── React hooks

LogoCloud.tsx
├── InfiniteSlider
├── ProgressiveBlur
└── External logo images

TestimonialsSection.tsx
├── User icon
├── React hooks
└── Testimonial data

RegistrationModal.tsx
├── Form icons
├── React hooks
└── Form validation
```

### External Dependencies
- **Cloudinary**: Image and video hosting
- **Lucide React**: Icon library
- **Google Fonts**: Manrope font family
- **Tailus.io**: Logo images

## 📁 Directory Structure Summary

```
ui project/
├── 📁 .bolt/ (2 files)
├── 📁 src/
│   ├── 📁 components/ (11 files)
│   │   └── 📁 motion-primitives/ (2 files)
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── 📄 Configuration files (9 files)
├── 📄 Documentation files (4 files)
└── 📄 index.html
```

## 🎯 Key Files by Purpose

### Entry Points
- `index.html` - HTML entry point
- `src/main.tsx` - React entry point
- `src/App.tsx` - Main application

### Configuration
- `package.json` - Dependencies
- `vite.config.ts` - Build configuration
- `tailwind.config.js` - Styling configuration
- `tsconfig.*.json` - TypeScript configuration

### Components
- **Layout**: `App.tsx`, `Footer.tsx`
- **Sections**: All section components
- **Interactive**: `RegistrationModal.tsx`, `FAQSection.tsx`
- **Animations**: Motion primitives

### Styling
- `src/index.css` - Global styles
- `tailwind.config.js` - Tailwind configuration
- Component-specific Tailwind classes

## 📈 File Size Analysis

### Largest Files
1. `App.tsx` - 8KB (Main application)
2. `RegistrationModal.tsx` - 8KB (Complex modal)
3. `package-lock.json` - 50KB (Dependency lock)
4. `TestimonialsSection.tsx` - 4KB (Testimonial carousel)

### Smallest Files
1. `vite-env.d.ts` - 50B (Type definitions)
2. `postcss.config.js` - 200B (PostCSS config)
3. `tsconfig.json` - 200B (TypeScript config)
4. `index.css` - 200B (Global styles)

## 🔧 Build Output

### Production Files
- `dist/index.html` - Main HTML file
- `dist/assets/` - Bundled JavaScript and CSS
- `dist/vite.svg` - Vite logo

### Development Files
- Source maps for debugging
- Hot module replacement
- TypeScript compilation

---

*This index provides a complete overview of all files in the OpenMint project, their purposes, sizes, and relationships.*
