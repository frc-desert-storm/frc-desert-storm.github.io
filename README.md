# Desert Storm FRC Team Website

This is the official website for the Desert Storm FIRST Robotics Competition team, deployed using **GitHub Pages**.

---

## About This Version

The original website was built using **Node.js** and a **Single Page Application (SPA)** framework. While the underlying work (HTML structure, CSS styling, JavaScript behavior, images, and content) was solid, the deployment environment created issues when hosting on GitHub Pages.

Specifically:
- The site was configured as an SPA but implemented **multiple distinct pages**
- GitHub Pages does not support server-side routing
- Navigating directly to non-home pages (e.g. via a bookmarked URL) resulted in a **404**
- Pages would only load correctly if users first visited the home page and navigated internally

These issues were **not caused by the website’s content or design**, but by a mismatch between the site architecture and GitHub Pages’ hosting model.

---

## What Changed (and What Didn’t)

### What stayed the same
- **All HTML, CSS, JavaScript, images, and content**
- Page layouts, styling, animations, and behavior
- Student-created code and assets

> The output and appearance of the website are **entirely the students' work**.

### What changed
- The compiled site assets were reorganized into a **pure static website**
- Client-side routing was removed in favor of standard page navigation
- The site now works reliably on GitHub Pages with:
  - Direct page links
  - Browser refreshes
  - External navigation

This change was made **solely for deployment compatibility**, not due to quality issues with the original work.

---

## Why a Static Site?

GitHub Pages is a static hosting platform. A static site:
- Requires no server or backend runtime
- Loads faster and more reliably
- Works correctly with direct URLs
- Is simpler to maintain during the build season

This makes it a great fit for the team’s current needs.

---

## Future Plans

This decision **does not prevent returning to a Node.js or SPA-based site in the future**.

If/when the team moves to:
- A different hosting platform
- A server-enabled environment
- A more advanced deployment pipeline

…the site can be migrated back to a Node-based architecture.

---

## Credits

This website was **designed and built by FRC Desert Storm students**.

The current structure reflects a deployment adjustment, not a redesign or rewrite of student work.

---

## Deployment

The site is deployed automatically using **GitHub Pages** via a GitHub Actions workflow.


