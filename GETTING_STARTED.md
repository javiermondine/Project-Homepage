# Getting Started

Welcome to the Homepage project. This guide will help you get started.

## Quick Start

### Open in Browser

1. Open `index.html` in your web browser
2. You should see the homepage displayed

That's it! The site works locally.

### Using a Local Server (Optional)

For a more realistic experience that mimics how the site would work on the internet:

1. Open a terminal in this folder
2. Run this command:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser and visit: `http://localhost:8000`
4. You should see the homepage

## Exploring the Site

The homepage includes:

- **Header** - Navigation menu with logo
- **Hero Section** - Welcome message with call-to-action
- **About Section** - Information and statistics
- **Projects** - Gallery showing 6 example projects
- **Skills** - List of technical abilities
- **Contact** - Links to reach out
- **Footer** - Additional links and copyright

## Testing It Out

### On Mobile

Open your browser's developer tools:
1. Press **F12** on your keyboard
2. Look for the device toggle button (usually looks like a phone icon)
3. Try different phone sizes like iPhone or Samsung
4. The layout should adapt to each size

### With Your Keyboard

Try using your keyboard to navigate:
- Press **Tab** to move between buttons and links
- Press **Enter** or **Space** to click buttons
- Press **Escape** to close the mobile menu

## What You're Looking At

The Homepage is built with three simple files:

- **index.html** - The page content
- **styles.css** - How it looks
- **script.js** - How it works when you interact with it

Everything is written in plain HTML, CSS, and JavaScript. No frameworks or libraries needed.

## Making Changes

### Change the Text

Open `index.html` in any text editor:
1. Find the section you want to change
2. Edit the text
3. Save the file
4. Refresh your browser to see the changes

### Change the Colors

Open `styles.css` and look for `:root` near the top:
```css
:root {
  --color-primary: #2563eb;
  --color-text: #1f2937;
  /* ... other colors ... */
}
```

Change any color value and refresh your browser.

### Change the Fonts

In `styles.css`, find `--font-family` and change it to your favorite font.

## Need Help?

### Browser Issues

If something doesn't look right:
1. Try a different browser (Chrome, Firefox, Safari)
2. Clear your browser cache (Ctrl+Shift+Delete)
3. Open DevTools (F12) and check the Console tab for errors

### Layout Problems

If the layout breaks on a certain screen size:
1. Check that your browser is actually resizing
2. Try the mobile view in DevTools (F12)
3. Make sure you're testing at different widths

## Sharing Your Site

When you're ready to share online:

1. Push to GitHub
2. Enable GitHub Pages in your repository settings
3. Your site will be live at: `https://yourusername.github.io/Project-Homepage`

## Questions?

All the code is straightforward and well-organized:
- Start with `index.html` for the page structure
- Look at `styles.css` for how everything is styled
- Check `script.js` for interactive features

Enjoy building and customizing your homepage!
