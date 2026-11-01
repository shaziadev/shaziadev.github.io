# shaziadev.github.io

Personal portfolio of **Shazia Abbas**, Full-Stack Developer (Django, React, Node.js, Python, DevOps).

**Live site:** https://shaziadev.github.io

## About

A single-page portfolio built with plain HTML, CSS and JavaScript. No framework and no build step, so GitHub Pages serves it as-is.

## Features

- Responsive layout that works from 375px phones up to wide desktops
- Light and dark themes: follows the system setting, with a toggle that remembers your choice
- Accessible: semantic sections, skip link, keyboard-friendly mobile menu, visible focus states
- Subtle scroll-reveal animation that turns off when the visitor prefers reduced motion
- Inline SVG icons and favicon, so there are no image files to load

## Project structure

```
index.html   # page content and sections
styles.css   # theme tokens, layout and components
script.js    # theme toggle, mobile menu, reveal-on-scroll
```

## Run locally

```bash
git clone https://github.com/shaziadev/shaziadev.github.io.git
cd shaziadev.github.io
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Pushing to `main` publishes the site through GitHub Pages
(Settings → Pages → Source: Deploy from a branch → `main` / root).

## License

[MIT](LICENSE)
