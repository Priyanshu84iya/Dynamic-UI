# Dynamic UI Design Switcher

Production-ready React application that demonstrates dynamic UI/UX design switching across 20 design systems. The app uses CSS variables for design tokens, Tailwind CSS for utilities, Context API for global theme state, and Framer Motion for motion polish.

## Highlights

- 20 fully-defined design styles with tokenized palettes, typography, spacing, radii, borders, and shadows
- Global theme switching without page reloads
- Glassmorphism + Minimalism as the default theme on load
- Left control panel with live theme switcher and right-side preview panel
- Responsive layout with smooth transitions and enhanced scrollbars
- Framer Motion entrance and interaction animations

## Technology Stack

- React (functional components only)
- Vite
- Tailwind CSS
- CSS Variables for design tokens
- Context API for theme state
- Framer Motion for animations

## Project Structure

- [index.html](index.html)
- [package.json](package.json)
- [tailwind.config.js](tailwind.config.js)
- [postcss.config.js](postcss.config.js)
- [src/main.jsx](src/main.jsx)
- [src/App.jsx](src/App.jsx)
- [src/index.css](src/index.css)
- [src/context/ThemeContext.jsx](src/context/ThemeContext.jsx)
- [src/themes/themes.js](src/themes/themes.js)
- [src/components/Header.jsx](src/components/Header.jsx)
- [src/components/Navbar.jsx](src/components/Navbar.jsx)
- [src/components/Hero.jsx](src/components/Hero.jsx)
- [src/components/Card.jsx](src/components/Card.jsx)
- [src/components/Button.jsx](src/components/Button.jsx)
- [src/components/Form.jsx](src/components/Form.jsx)
- [src/components/Footer.jsx](src/components/Footer.jsx)
- [src/components/StyleSwitcher.jsx](src/components/StyleSwitcher.jsx)

## Design Styles Included (20)

1. Skeuomorphism
2. Flat Design
3. Flat 2.0
4. Material Design
5. Neumorphism
6. Glassmorphism
7. Claymorphism
8. Aurora UI
9. Brutalism
10. Neo-Brutalism
11. Anti-Design
12. Minimalism
13. Maximalism
14. Human-Centered Design
15. Accessibility-First Design
16. Mobile-First Design
17. Responsive / Adaptive Design
18. Dark UI / Light UI
19. 3D UI / Spatial UI
20. AI-Driven / Generative UI

## How Theme Switching Works

- Themes are defined as token sets in [src/themes/themes.js](src/themes/themes.js)
- Theme selection is handled in [src/context/ThemeContext.jsx](src/context/ThemeContext.jsx)
- Theme tokens are applied to `:root` as CSS variables to update the entire UI instantly
- Tailwind utilities in components reference CSS variables for colors, spacing, radius, and shadows
- Smooth transitions are enabled for background, border, and shadow changes

## Layout Overview

- Left control panel: app header and theme switcher buttons
- Right preview panel: hero, typography, cards, and form sections
- Scrollbars are customized with theme-aware colors

## Getting Started

Install dependencies:

1. Run `npm install`

Start the development server:

1. Run `npm run dev`

Build for production:

1. Run `npm run build`

Preview production build:

1. Run `npm run preview`

## Customization Guide

### Add or adjust themes

- Update or extend tokens in [src/themes/themes.js](src/themes/themes.js)
- Each theme object defines colors, typography, spacing, radius, borders, shadows, and effects

### Modify global tokens or transitions

- Edit CSS variables and component classes in [src/index.css](src/index.css)

### Add animations

- Framer Motion is used in Header, Hero, Card, and StyleSwitcher components
- Extend animations in [src/components](src/components) as needed

## Accessibility Notes

- The Accessibility-First theme increases font sizes and contrast
- All interactive elements are keyboard-focusable

## Credits

- Developer: Pry Uchiha
- GitHub: https://github.com/Priyanshu84iya
- Instagram: https://www.instagram.com/pry_uchiha/

## Copyright

© 2026 Pry Uchiha. All rights reserved.
© 2026 Pry Uchiha. Design system implementation.
