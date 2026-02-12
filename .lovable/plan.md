

# Valentine's Day Butterfly Letter Website - Implementation Plan

## Overview
Build a two-page romantic website with an animated butterfly, floating hearts, and four interactive love letters -- all with easy-to-edit placeholder content.

## Files to Create/Modify

### 1. Update Theme & Animations
**tailwind.config.ts** and **src/index.css**
- Add romantic color palette (soft pinks, blush, rose, cream)
- Add custom keyframes: butterfly flight path, wing flutter, floating hearts, fade-in text, envelope open, glow pulse
- Import a handwriting-style Google Font (e.g., "Dancing Script") alongside a clean serif

### 2. Butterfly Component
**src/components/Butterfly.tsx**
- SVG butterfly with CSS wing-fluttering animation
- Accepts position props so it can be animated to different locations
- Smooth CSS transition for flying between positions

### 3. Floating Hearts Background
**src/components/FloatingHearts.tsx**
- Floating heart particles using CSS animations
- Soft, subtle, and romantic ambiance layer

### 4. Landing Page
**src/pages/LandingPage.tsx**
- Pastel pink/rose gradient background with FloatingHearts overlay
- "Something for you <3" text that fades in
- Butterfly flies in and lands on the heart character
- After butterfly lands, a glowing "Next" button appears in the bottom-right
- Clicking "Next" triggers butterfly fly-away transition, then navigates to /letters

### 5. Letters Page
**src/pages/LettersPage.tsx**
- Butterfly rests in center, gently fluttering
- 4 envelope components in each corner with unique colors and labels
- Clicking an envelope: butterfly flies toward it, envelope opens, content is revealed in a modal/overlay
- Close button returns to the 4-letter view

### 6. Four Letter Content Components
Each is a separate component with clearly marked placeholder content:

- **src/components/letters/WhyILoveYou.tsx** -- Scrollable list of love reasons with placeholder items
- **src/components/letters/OurMoments.tsx** -- Photo gallery/slideshow with placeholder image slots
- **src/components/letters/HeartMessage.tsx** -- Styled love letter with placeholder paragraphs
- **src/components/letters/LittleSurprise.tsx** -- Click-to-reveal surprise cards with placeholder promises

### 7. Envelope Component
**src/components/Envelope.tsx**
- Sealed envelope SVG/CSS with color variants
- Open animation when activated
- Label text displayed below

### 8. Routing
**src/App.tsx**
- Add routes: `/` for LandingPage, `/letters` for LettersPage

### 9. Cleanup
- Remove default App.css styles that conflict
- Update Index page redirect or replace with LandingPage

## Technical Details

- All animations use pure CSS (keyframes + Tailwind classes) for performance
- Butterfly position changes use CSS `transition` on `top`/`left` properties
- Page transitions use React state + CSS fade/slide animations
- Google Font loaded via index.html link tag
- All placeholder content marked with `{/* EDIT HERE */}` comments
- Fully responsive with mobile-friendly layout (letters stack on small screens)
- No external animation libraries needed

## Build Order
1. Theme, fonts, and animation utilities
2. Butterfly and FloatingHearts components
3. Landing page with butterfly animation sequence
4. Envelope component
5. Four letter content components
6. Letters page assembling everything
7. Routing and final polish

