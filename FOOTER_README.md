# Reusable Footer Component

This project now includes a reusable footer component that can be easily included in any HTML page.

## Files Created

### 1. `footer.html`
Contains the complete footer HTML structure with:
- Brand & Contact information
- Navigation links (Pages, Case Studies, Utility, Changelog)
- Newsletter subscription form
- Footer bottom with copyright and legal links

### 2. `footer.css`
Contains all the CSS styles for the footer including:
- Grid layout for responsive design
- Typography and color schemes
- Hover effects and transitions
- Mobile responsive breakpoints

## How to Use

### Method 1: JavaScript Include (Recommended)
Add this to any HTML page where you want the footer:

```html
<!-- Include the CSS -->
<link href="footer.css" rel="stylesheet" type="text/css"/>

<!-- Add the footer container -->
<div id="footer-container"></div>

<!-- Add the JavaScript to load the footer -->
<script>
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Fallback footer if loading fails
            document.getElementById('footer-container').innerHTML = '<footer class="footer-section"><div class="container"><p style="text-align: center; color: white; padding: 2rem;">© 2024 Copora. All rights reserved.</p></div></footer>';
        });
</script>
```

### Method 2: Server-Side Include
If you're using a server-side language (PHP, Node.js, etc.), you can include the footer directly:

```php
<?php include 'footer.html'; ?>
```

### Method 3: Copy & Paste
Simply copy the content from `footer.html` and paste it into your HTML file where you want the footer to appear.

## Customization

### Updating Footer Content
1. Edit `footer.html` to change the content
2. All pages using the footer will automatically reflect the changes

### Styling Changes
1. Edit `footer.css` to modify the appearance
2. Changes will apply to all pages using the footer

### Adding New Links
1. Open `footer.html`
2. Add new links to the appropriate navigation section
3. The changes will appear on all pages

## Example Usage

See `about.html` for a complete example of how to use the reusable footer in a new page.

## Benefits

✅ **DRY Principle** - Don't Repeat Yourself
✅ **Easy Maintenance** - Update once, changes everywhere
✅ **Consistent Design** - Same footer across all pages
✅ **Modular Structure** - Clean separation of concerns
✅ **Responsive Design** - Works on all devices
✅ **Error Handling** - Fallback if loading fails

## Browser Support

The JavaScript method works in all modern browsers. For older browsers, use the copy & paste method.
