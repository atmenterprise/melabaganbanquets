# Melabagan Banquets Website (React + Vite)

This is the React-based single-page application (SPA) conversion of the Melabagan Banquets website, migrated from the original Jekyll static website.

## Features & Modernization
- **React + Vite**: Fast load times and Hot Module Replacement (HMR).
- **React Router**: Seamless client-side routing for subpages.
- **Testimonials Slider**: Clean integration using Swiper.js.
- **Dynamic SEO**: Meta tags, titles, and descriptions configured in `index.html`.
- **Pure React Overlay Modal**: Click-to-view image popup in the Photo Gallery page.
- **Tagembed Widget**: Dynamically loaded to display Instagram feed reliably.

## Local Development
To start the local development server:
```bash
npm install
npm run dev
```

To build the project for production:
```bash
npm run build
```

## Project Structure
- `src/components/`: Modular UI sections (Navbar, Header, Features, Testimonial, Contact, Footer, ScrollToHash).
- `src/pages/`: Specific pages (Home, PhotoGallery, VideoGallery, Disclaimer, Privacy, FAQ).
- `src/config.js`: Site metadata config (email, phones, links, etc.) migrated from `_config.yml`.
- `src/data/reviews.js`: Reviews list data migrated from `reviews.yml`.
- `public/img/`: Preserved image gallery, icons, logo assets.
- `public/css/`: Pre-compiled main theme stylesheets.
- `public/font-awesome/`: Fonts and icons files.
- `public/CNAME`: preserves the domain configuration for deployment.
- `archive/`: Contains the original Jekyll codebase for backup/reference.
