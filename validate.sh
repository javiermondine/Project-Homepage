#!/bin/bash

echo "=========================================="
echo "VALIDATION REPORT - Professional Portfolio"
echo "=========================================="
echo ""

# Check file sizes
echo "1. PROJECT SIZE METRICS"
echo "├─ Total files:"
find . -type f -not -path "./.git/*" | wc -l
echo "├─ Lines of code: $(find . -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" \) -exec wc -l {} + 2>/dev/null | tail -1 | awk '{print $1}')"
echo "├─ HTML: $(wc -l < index.html) lines"
echo "├─ CSS: $(wc -l < styles.css) lines"
echo "├─ JS: $(wc -l < script.js) lines"
echo ""

# HTML validation checks
echo "2. HTML STRUCTURE CHECKS"
echo "├─ Doctype declaration: $(grep -q '<!DOCTYPE html>' index.html && echo '✓ Present' || echo '✗ Missing')"
echo "├─ html lang attribute: $(grep -q 'lang=' index.html && echo '✓ Present' || echo '✗ Missing')"
echo "├─ Meta charset: $(grep -q 'charset' index.html && echo '✓ Present' || echo '✗ Missing')"
echo "├─ Viewport meta: $(grep -q 'viewport' index.html && echo '✓ Present' || echo '✗ Missing')"
echo "├─ Title tag: $(grep -q '<title>' index.html && echo '✓ Present' || echo '✗ Missing')"
echo "├─ Meta description: $(grep -q 'description' index.html && echo '✓ Present' || echo '✗ Missing')"
echo ""

# Semantic HTML checks
echo "3. SEMANTIC HTML ELEMENTS"
echo "├─ <header>: $(grep -c '<header' index.html) found"
echo "├─ <nav>: $(grep -c '<nav' index.html) found"
echo "├─ <main>: $(grep -c '<main' index.html) found"
echo "├─ <section>: $(grep -c '<section' index.html) found"
echo "├─ <article>: $(grep -c '<article' index.html) found"
echo "├─ <footer>: $(grep -c '<footer' index.html) found"
echo ""

# Heading hierarchy
echo "4. HEADING HIERARCHY"
echo "├─ <h1>: $(grep -c '<h1' index.html) found (should be 1)"
echo "├─ <h2>: $(grep -c '<h2' index.html) found"
echo "├─ <h3>: $(grep -c '<h3' index.html) found"
echo "├─ No h4+ (best practice): $(grep -q '<h[456]' index.html && echo '✗ Found' || echo '✓ None')"
echo ""

# Accessibility checks
echo "5. ACCESSIBILITY (A11Y)"
echo "├─ Images with alt text: $(grep -c 'alt=' index.html) found"
echo "├─ ARIA labels: $(grep -c 'aria-label' index.html) found"
echo "├─ ARIA roles: $(grep -c 'role=' index.html) found"
echo "├─ ARIA expanded: $(grep -c 'aria-expanded' index.html) found"
echo "├─ ARIA live regions: $(grep -c 'aria-live' index.html) found"
echo ""

# CSS checks
echo "6. CSS FEATURES"
echo "├─ CSS custom properties: $(grep -c '--' styles.css) defined"
echo "├─ Media queries: $(grep -c '@media' styles.css) found"
echo "├─ Focus styles: $(grep -c ':focus' styles.css) found"
echo "├─ Transitions: $(grep -c 'transition' styles.css) found"
echo "├─ Transforms: $(grep -c 'transform' styles.css) found"
echo ""

# JavaScript checks
echo "7. JAVASCRIPT FEATURES"
echo "├─ Event listeners: $(grep -c 'addEventListener' script.js) found"
echo "├─ Functions: $(grep -c 'function\|^\s*[a-zA-Z_][a-zA-Z0-9_]*.*=' script.js) found"
echo "├─ Comments: $(grep -c '//' script.js) found"
echo ""

# File checks
echo "8. PROJECT FILES"
ls -lh . | grep -E '\.(html|css|js|md)$' | awk '{print "├─ " $9 " (" $5 ")"}'
echo ""

echo "=========================================="
echo "END OF REPORT"
echo "=========================================="
