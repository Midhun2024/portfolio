# Personal Portfolio Website

A modern, clean, professional personal portfolio built with React 18, Vite, TypeScript, and Tailwind CSS using a strict MVC architecture.

## 🏗️ Architecture Map (MVC)

This project strictly adheres to the Model-View-Controller pattern to ensure separation of concerns.

```
src/
├─ app/           # React entry point, App root, and Router configuration
├─ config/        # Centralized configuration (routes, colors, site metadata)
├─ models/        # (M) TypeScript types and mock data objects (No JSX)
├─ controllers/   # (C) Custom React hooks providing data and state (No JSX)
├─ views/         # (V) Pure presentational components and pages
│  ├─ layouts/    # Global layout components (Navbar, Footer, MainLayout)
│  ├─ sections/   # Individual page sections (Hero, About, etc.)
│  ├─ components/ # Reusable UI pieces (Button, Card, Reveal)
│  └─ pages/      # Page aggregators (HomePage, NotFoundPage)
├─ styles/        # Tailwind configuration and CSS variables
└─ utils/         # Pure helper functions
```

## 📝 How to Edit Content
All textual content and data reside in the `src/models/` folder.
To update your skills, projects, or experience, simply edit the corresponding `.model.ts` file. 
- Example: To add a project, edit `src/models/projects.model.ts`.

## 🎨 How to Change Theme
The theme is strictly controlled by CSS variables and design tokens.
To change the colors, you only need to edit two files:
1. `src/styles/globals.css` - Update the CSS variable values (`--primary`, `--background`, etc.)
2. `src/config/colors.ts` - Contains the typed token mapping for use in JavaScript if ever needed.

## 🧩 How to Add or Remove a Section
Sections are registered in a single central configuration file.
To manage sections:
1. Open `src/config/routes.ts`
2. Add or remove keys from `sectionIds` and `navItems`
3. Update `src/views/pages/HomePage.tsx` to include or remove the corresponding Section component.

## 🚀 Deployment

### Build for Production
To generate static files for hosting:
```bash
npm install
npm run build
```
The compiled static assets will be generated in the `dist/` directory.

### NGINX Hosting Configuration
If you are hosting this application on an NGINX server, you can use the following configuration to handle React Router client-side routing properly:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/yourdomain/dist;
    index index.html;

    # Gzip compression for performance
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg|pdf)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public";
    }
}
```
