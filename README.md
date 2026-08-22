# e-estate

A front-end real estate web prototype (branded in-app as **Archstone**) with Firebase Authentication and a modern, single-page style property browsing experience.

## Overview

`e-estate` is a browser-based project for showcasing property listings and user flows for:
- account sign-up and login
- Google sign-in and password reset
- a post-login property discovery dashboard
- an admin-facing property input form concept

The project is implemented as static HTML/CSS/JavaScript files (no framework or bundler).

## Features

- **Authentication UI**: login + signup card flow (`/page/index.html`)
- **Firebase Auth integration**:
  - email/password signup and login
  - Google sign-in popup
  - password reset email trigger
- **Session-gated dashboard**: redirects unauthenticated users to login
- **Property browsing interface**:
  - searchable listing grid
  - details view and about/feedback sections
  - user modal with profile + logout action
- **Admin form mockup** for creating property listings (`/admin-profile.html` and `/page/3admin-profile.html`)

## Tech Stack

- **HTML5** for page structure
- **CSS3** for responsive, theme-driven UI styling
- **Vanilla JavaScript (ES Modules)** for interactivity and app flow
- **Firebase Web SDK (CDN imports, v12.16.0)** for authentication and analytics
- **Font Awesome + Google Fonts** for icons and typography

## Project Structure

```text
.
├── README.md
├── home.html                 # Legacy/alternative auth page markup
├── signup page.html          # Loading/splash-style prototype page
├── admin-profile.html        # Admin property form (root version)
└── page/
    ├── index.html            # Main login/signup entry page
    ├── login.js              # Firebase login, Google auth, password reset
    ├── register.js           # Firebase email/password signup
    ├── loading.html          # Auth success loading/redirect page
    ├── 2main.html            # Main property browsing/dashboard view
    ├── 2main.js              # Auth state + logout/profile handling
    ├── 3admin-profile.html   # Admin property form (page version)
    ├── style.css             # Shared auth page styles
    ├── loading.css
    ├── loading.js
    ├── test.html
    ├── test.js
    ├── logo.png
    └── logo1.png
```

## Development / Build Process

This repository currently uses a **static-site workflow**:

1. Pages are authored directly in HTML.
2. Styling is handled with standalone CSS files and page-level `<style>` blocks.
3. Behavior is added with plain JavaScript modules loaded in-browser.
4. Firebase services are consumed directly from CDN module URLs.

There is no package manager, bundler, or CI build pipeline configured in this repository at the moment.

## Installation / Setup

### Prerequisites

- A modern browser (Chrome, Edge, Firefox, Safari)
- Internet access (required for Firebase CDN modules, fonts, and icon CDNs)

### Local run

Because ES modules are used, run with a local HTTP server (instead of opening files directly with `file://`):

```bash
python3 -m http.server 8080
```

Then open:

- `http://localhost:8080/page/index.html` (recommended entry)

### Firebase configuration

Firebase config is currently embedded in:

- `page/login.js`
- `page/register.js`
- `page/2main.js`

If you want to use your own Firebase project, replace those config objects with your project settings.

## Usage

1. Start local server and open `/page/index.html`.
2. Create an account or sign in.
3. After successful auth, you are redirected to `/page/loading.html` and then `/page/2main.html`.
4. Browse/search properties and open the account modal.
5. Use the logout button to end the session.

For admin form exploration, open:
- `/admin-profile.html` or `/page/3admin-profile.html`

## Screenshots / Demo

Current repository assets include:
- `page/logo.png`
- `page/logo1.png`

You can add UI screenshots in a future update (for example, `/assets/screenshots`) and link them here.

## License

No license file is currently included in this repository.
If this project is intended for public reuse, add a `LICENSE` file (for example MIT, Apache-2.0, or GPL) and update this section.
