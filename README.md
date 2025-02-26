# GameOn Landing Page & Waitlist

A retro arcade-themed landing page for GameOn with an email waitlist system. This simple, single-page web experience is designed to generate excitement for GameOn's launch and capture user emails for a waitlist.

## Features

- Retro arcade aesthetic with pixelated design elements and neon colors
- Animated background with twinkling stars
- Glitch text effect for the main headline
- Simple email capture form with validation
- Confirmation message with arcade sound effect
- Responsive design for desktop browsers

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript if you want to customize

### Installation

1. Clone or download this repository to your local machine
2. Open the `index.html` file in your web browser to view the landing page locally

### Deployment

To deploy this landing page to a live server:

1. Upload all files (`index.html`, `styles.css`, `script.js`) to your web hosting service
2. Ensure all files are in the same directory
3. Access the page via your domain name

## Customization

### Changing Colors

The color scheme can be easily modified by editing the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #00ff00;    /* Main green color */
    --secondary-color: #ff00ff;  /* Magenta accent */
    --accent-color: #00ffff;     /* Cyan accent */
    --background-color: #0a0a2a; /* Dark blue background */
    --text-color: #ffffff;       /* White text */
}
```

### Modifying Content

To change the text content, edit the corresponding sections in the `index.html` file:

- Main headline: Look for the `<h1>` tag with class "glitch"
- Subheadline: Look for the `<p>` tag with class "subheadline"
- Feature items: Edit the text within the `<div class="feature-item">` elements
- Form labels and buttons: Modify the text within the waitlist form section

### Email Storage

Currently, the form stores emails in the browser's localStorage for demonstration purposes. For a production environment, you should:

1. Set up a server-side script to handle form submissions
2. Modify the `saveEmail()` function in `script.js` to send data to your server
3. Implement proper email storage in a database

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) from Google Fonts
- Sound effects: [SoundJay](https://www.soundjay.com/)
- Star background textures: Public domain 