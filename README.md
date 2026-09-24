# Flipkart First Mile Operations Shelf - Pure HTML, CSS & JavaScript Static Site

This directory contains the **100% standalone, zero-build pure static version** of the Flipkart First Mile Operations Shelf. It has **no npm, no node_modules, and no build steps**.

## Files
- `index.html` — Pure HTML structure, Flipkart branding, Google Sign-In auth gate, navigation, and modals.
- `style.css` — Custom animations, scrollbars, and Flipkart theme styling.
- `app.js` — Pure JavaScript (ES6) handling all operations data, `@flipkart.com` Google login, search, filters, pins, and modals.
- `.nojekyll` — Instructs GitHub Pages to serve static files directly without Jekyll processing.

---

## How to Host on GitHub Pages (2 Super Simple Methods)

### Method 1: Deploy Directly from `/docs` (Easiest)
1. Push this repository to GitHub.
2. In your GitHub repository, click **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**.
   - **Branch**: Select `main` (or `master`) and set the folder dropdown to `/docs`.
4. Click **Save**.
5. Your static website is live at `https://<your-username>.github.io/<repo-name>/` in ~60 seconds!

---

### Method 2: Use in a Fresh Repository (Root Deployment)
1. Copy the 4 files (`index.html`, `style.css`, `app.js`, `.nojekyll`) from `/docs/`.
2. Paste them directly into the root folder of your GitHub repository.
3. In GitHub repository **Settings** → **Pages**:
   - **Source**: Deploy from a branch.
   - **Branch**: `main` and folder `/ (root)`.
4. Click **Save**!
