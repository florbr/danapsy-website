# Dr. Dana Teresa Allam - Psychologist Website

A professional, static React website for a clinical psychologist to introduce herself and her services.

## Project Overview

This is a single-page React application built with Vite that showcases:
- Professional introduction and biography
- Areas of specialization
- Therapeutic approach
- Credentials and qualifications
- Contact information

## Technology Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **Static Data** - No backend required, all content is frontend-only

## Project Structure

```
DanaTeresaAllam/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section with CTA
│   │   ├── About.jsx        # About and credentials
│   │   ├── Services.jsx     # Specializations
│   │   ├── Approach.jsx     # Therapeutic approach
│   │   ├── Contact.jsx      # Contact information
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   └── psychologistData.js  # Static data
│   ├── styles/
│   │   └── index.css        # Global styles
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Setup Instructions

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (typically http://localhost:5173)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Customization

### Update Content

Edit the data in [src/data/psychologistData.js](src/data/psychologistData.js) to customize:
- Name, title, and tagline
- Biography and therapeutic approach
- Specializations and services
- Credentials
- Contact information

### Styling

The website uses CSS variables defined in [src/styles/index.css](src/styles/index.css). You can customize the color scheme by updating these variables:
- `--primary-color`: Main brand color
- `--secondary-color`: Secondary accent
- `--accent-color`: Highlights and buttons
- `--text-color`: Main text color
- `--bg-light`: Light background sections

### Add New Sections

Create new components in `src/components/` and import them in [src/App.jsx](src/App.jsx).

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Navigation**: Sticky header with scroll-to-section links
- **Professional Styling**: Healthcare-appropriate color scheme and design
- **Accessibility**: Semantic HTML and readable typography
- **Fast Loading**: Optimized with Vite for quick page loads

## Deployment

This static site can be deployed to any hosting service:
- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use gh-pages package
- **Traditional hosting**: Upload `dist/` contents to web server

## License

This project is created for Dr. Dana Teresa Allam.

---

**Note**: Before deploying, remember to update all placeholder contact information with real details.
