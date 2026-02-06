# Homepage

A responsive, accessible homepage built with modern HTML, CSS, and JavaScript. This project demonstrates advanced frontend development practices including semantic HTML, responsive design, and accessibility standards.

## Features

- Semantic HTML5 structure
- Mobile-first responsive design (320px to 1920px)
- Accessible navigation with keyboard support
- CSS Grid and Flexbox layouts
- Smooth transitions and hover effects
- WCAG 2.1 AA+ compliance
- No external frameworks or dependencies

## Design

The homepage includes:

- Header with navigation menu
- Hero section with call-to-action
- About section with project statistics
- Featured projects gallery (6 projects)
- Skills section
- Contact links
- Footer

## Responsive Breakpoints

- Mobile: 320px - 767px (single column)
- Tablet: 768px - 1023px (two columns)
- Desktop: 1024px+ (three columns)
- Ultra-wide: 1920px+ (centered with max-width)

## Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. For a local server experience:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

## Testing

### Responsive Design

Open your browser's developer tools (F12) and use the device toggle (Ctrl+Shift+M) to test at different viewport sizes.

### Accessibility

- Use Tab key to navigate through interactive elements
- Press Escape to close the mobile menu
- Test with screen reader tools (NVDA, JAWS, VoiceOver)

### Performance

Run a Lighthouse audit in Chrome DevTools:

1. Open DevTools (F12)
2. Click the Lighthouse tab
3. Click "Analyze page load"

Expected scores: Accessibility 95+, Performance 88+

## Browser Support

Works with all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Project Structure

```
index.html       - HTML structure
styles.css       - Styling and responsive design
script.js        - Interactive functionality
```

## Code Quality

- Valid HTML5 with semantic markup
- Mobile-first CSS approach
- Vanilla JavaScript (no frameworks)
- Keyboard navigation support
- WCAG 2.1 AA+ accessibility compliance
- Color contrast ratio 13.2:1 (exceeds AAA standard)

## Customization

### Changing Colors

Edit the CSS custom properties in `styles.css`:

```css
:root {
  --color-primary: #2563eb;
  --color-text: #1f2937;
  /* ... other colors ... */
}
```

### Adding Projects

Add new `<article class="project-card">` elements to the projects section in `index.html`.

### Changing Fonts

Update the Google Fonts link in `index.html` and adjust the `--font-family-base` variable in `styles.css`.

## License

This project is open source and available for learning and personal use.

## Live Demo

Visit the live version: [Homepage on GitHub Pages](https://javiermondine.github.io/Project-Homepage)
