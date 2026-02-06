# Professional Portfolio - Advanced HTML & CSS

A production-ready, fully responsive portfolio website built with semantic HTML5, advanced CSS3, and vanilla JavaScript. This project demonstrates mastery of modern web development best practices including accessibility compliance, mobile-first design, and performance optimization.

## Features

### HTML & Semantics
- Semantic HTML5 markup with proper document structure
- WAI-ARIA labels and roles for enhanced accessibility
- Proper heading hierarchy and landmark elements
- Keyboard-navigable interface with visible focus indicators
- Screen reader optimized with descriptive alt text

### Responsive Design
- Mobile-first approach with progressive enhancement
- Three-tier responsive layout: mobile (320px), tablet (768px), desktop (1024px)
- No horizontal scroll at any viewport
- Fluid typography and spacing using CSS variables
- Touch-friendly interface elements

### Advanced CSS
- CSS Custom Properties (variables) for consistent design system
- CSS Grid for complex project gallery layouts
- Flexbox for flexible component layouts
- CSS transitions and transforms for smooth interactions
- Responsive images with proper aspect ratio handling
- Print styles for optimal PDF output

### Accessibility (WCAG 2.1 AA)
- Color contrast ratios meet WCAG AA standards
- Focus visible on all interactive elements
- Form labels properly associated with inputs
- ARIA attributes for dynamic content
- Keyboard-only navigation fully supported
- Reduced motion preferences respected

### Performance
- No external dependencies (vanilla JavaScript)
- Optimized CSS with minimal specificity
- Efficient event delegation and listeners
- Lazy-loaded images with loading="lazy"
- Minimal repaints and reflows
- Lighthouse score target: ≥ 90

## Project Structure

```
professional-portfolio/
├── index.html          # Main HTML document
├── styles.css          # All styling (no SASS/LESS required)
├── script.js           # Vanilla JavaScript
├── README.md           # This file
└── CHECKLIST.md        # Validation checklist
```

## Responsive Breakpoints

```css
Mobile:   < 768px
Tablet:   768px - 1024px
Desktop:  > 1024px
Ultra HD: > 1920px
```

## CSS Variables (Design Tokens)

All colors, spacing, typography, and effects are defined as CSS variables in `:root` for easy customization:

```css
--color-primary: #2563eb
--color-text: #1f2937
--spacing-base: 1rem
--font-family: 'Inter', system fonts
```

Edit `:root` in `styles.css` to rebrand the entire site.

## Accessibility Features

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to activate buttons
- Escape to close mobile menu
- Arrow keys work in custom controls

### Screen Reader Support
- Semantic landmarks (header, nav, main, footer)
- ARIA live regions for dynamic updates
- Alt text on all images
- Form labels properly associated
- Skip to main content capability

### Visual Accessibility
- 4.5:1 minimum contrast ratio
- Focus indicators on all focusable elements
- High-resolution icon scalability
- Support for prefers-reduced-motion

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari 12+
- Chrome Android

## Testing

### Manual Testing Checklist
- [ ] Resize window from 320px to 1920px - no layout breaks
- [ ] Test with keyboard only - all features accessible
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify focus indicators visible on all interactive elements
- [ ] Check color contrast with WebAIM Contrast Checker
- [ ] Test on actual mobile devices (not just dev tools)

### Automated Testing
```bash
# Lighthouse audit
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Run audit (target: Accessibility ≥ 90, Performance ≥ 85)

# W3C HTML Validation
# https://validator.w3.org/
```

## Performance Optimization

### Current Optimizations
- Minified CSS (production ready)
- Minimal JavaScript (no frameworks)
- SVG placeholders instead of image files
- CSS Grid instead of media queries for layout
- Hardware-accelerated transforms

### Future Optimization
- Image optimization pipeline (WebP conversion)
- Critical CSS extraction
- Code splitting for JavaScript
- Service worker for offline support

## Customization Guide

### Change Brand Colors
Edit `:root` in `styles.css`:
```css
:root {
  --color-primary: #your-color;
  --color-primary-dark: #darker-shade;
  --color-primary-light: #lighter-shade;
}
```

### Change Typography
```css
:root {
  --font-family: 'Your Font', fallbacks;
  --font-size-base: 1rem;
}
```

### Adjust Spacing
```css
:root {
  --spacing-base: 1rem;
  --spacing-lg: 1.5rem;
}
```

### Add New Section
1. Create semantic HTML structure
2. Add new CSS section with mobile-first approach
3. Include media queries for tablet/desktop
4. Test for accessibility and responsiveness

## Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/professional-portfolio.git
git push -u origin main
```

Enable GitHub Pages in repository settings (main branch, / root).

### Performance Checklist Before Deploy
- [ ] Run Lighthouse audit (target: ≥ 90 all categories)
- [ ] W3C HTML validation passes
- [ ] W3C CSS validation passes
- [ ] No console errors or warnings
- [ ] Responsive test on real devices
- [ ] Accessibility audit with WAVE or Axe
- [ ] Page load time < 3 seconds

## Code Quality

### HTML Standards
- Valid HTML5 (W3C validated)
- Semantic elements used correctly
- No div soup or unnecessary wrappers
- Proper nesting and hierarchy

### CSS Standards
- DRY principles (no repeated code)
- BEM-inspired naming convention
- Mobile-first media queries
- No layout shifts or reflows

### JavaScript Standards
- Vanilla JavaScript (no frameworks)
- Event delegation where appropriate
- Progressive enhancement
- No global variables

## Browser DevTools Tips

### Lighthouse Audit
1. Open DevTools (F12)
2. Click "Lighthouse" tab
3. Run audit
4. Review accessibility, performance, and best practices

### Responsive Design Mode
1. DevTools → Toggle device toolbar (Ctrl+Shift+M)
2. Test at 320px, 768px, 1024px, 1920px
3. Verify no horizontal scrollbar

### Accessibility Inspector
1. DevTools → Inspector
2. Right-click element → Inspect Accessibility Tree
3. Verify ARIA roles and labels

## Common Issues & Solutions

### Issue: Menu doesn't close on mobile
**Solution:** Check that `script.js` is loaded and `menuToggle` ID exists on button

### Issue: Images distorted at certain widths
**Solution:** Ensure images use `aspect-ratio` or intrinsic aspect ratio in HTML

### Issue: Keyboard navigation skips elements
**Solution:** Check that all interactive elements are properly focused (no `outline: none`)

### Issue: Lighthouse accessibility score low
**Solution:** Run axe DevTools extension, check contrast ratios and ARIA labels

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Animation preferences
- [ ] Internationalization (i18n)
- [ ] Cookie consent banner
- [ ] Contact form with validation
- [ ] Blog section with filtering
- [ ] Social media feed integration
- [ ] Service worker for offline support

## Credits

Built as a demonstration of advanced HTML and CSS concepts including semantic markup, accessibility compliance, responsive design, and modern CSS techniques.

## License

This project is open source and available under the MIT License.

---

**Last Updated:** February 2024
**Status:** Production Ready
**Accessibility Level:** WCAG 2.1 Level AA
