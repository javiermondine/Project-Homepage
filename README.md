# Homepage

A responsive, accessible homepage built with semantic HTML, CSS, and JavaScript. This project showcases web development best practices including accessible design, mobile-first layout, and modern CSS techniques.

## What's Included

- Clean semantic HTML structure
- Fully responsive layout (works on all screen sizes)
- Keyboard navigation support
- High contrast colors for readability
- No external libraries or frameworks
- Simple, maintainable code

## How It Works

The site uses:

- **HTML** for page structure with semantic elements
- **CSS** for styling with a mobile-first approach
- **JavaScript** for interactive features like the mobile menu

## Responsive on All Devices

- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1920px and up)

No content gets cut off horizontally on any screen size.

## Accessible to Everyone

- Works with keyboard navigation
- Colors have good contrast for visibility
- Compatible with screen readers
- Focus indicators visible when using Tab key
- Images have descriptive alt text

## Getting Started

### Opening Locally

1. Clone or download this repository
2. Open `index.html` in your web browser

### Using a Local Server

For a more realistic experience:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Files

- `index.html` - The webpage
- `styles.css` - All styling
- `script.js` - Interactive features
- `README.md` - This guide

## Testing

### On Your Computer

Resize your browser window to test different screen sizes:
- Small phone: 320px wide
- Tablet: 768px wide
- Desktop: 1024px+ wide

### With Your Keyboard

- Use **Tab** to move between buttons and links
- Use **Enter** or **Space** to click buttons
- Use **Escape** to close the menu on mobile

### Colors and Text

Text is large and easy to read. Dark text on a light background makes it accessible to everyone.

## Customization

### Change Colors

Open `styles.css` and look for the `:root` section at the top. Change these values:

```css
:root {
  --color-primary: #2563eb;
  --color-text: #1f2937;
}
```

### Change Fonts

In `styles.css`, update the `--font-family` variable.

### Add More Projects

Open `index.html` and duplicate a project card in the projects section. Update the title, description, and link.

## Browser Compatibility

Works on:
- Chrome and Edge (all recent versions)
- Firefox (all recent versions)
- Safari (all recent versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

To share your site with others:

1. Push to GitHub
2. Go to Settings > Pages
3. Select "main branch" as the source
4. Your site will be live at `https://yourusername.github.io/Project-Homepage`

## Questions?

Check the code:
- Simple HTML structure in `index.html`
- All styling organized in `styles.css`
- Interactive code in `script.js`

Everything is well-commented and easy to understand.

## License

This project is open source and available under the MIT License.

---

**Last Updated:** February 2024
**Status:** Production Ready
**Accessibility Level:** WCAG 2.1 Level AA
