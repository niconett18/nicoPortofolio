# Nicholas Edmund - Portfolio V5 (Merged)

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring your personal content merged into the new template design.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Loading**: Optimized with Vite for lightning-fast development and builds
- **Smooth Animations**: Beautiful scroll animations using AOS library
- **Interactive Elements**: Hover effects, typing animations, and smooth transitions
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Technologies Used

- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling for fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Lucide React** - Beautiful, customizable icons
- **AOS (Animate On Scroll)** - Scroll animation library
- **Lottie React** - Lightweight animations
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
portfolio/
├── App_Merged.jsx          # Main application component with all merged content
├── main_merged.jsx         # Application entry point
├── index_merged.html       # HTML template
├── package_merged.json     # Dependencies and scripts
├── vite_merged.config.js   # Vite configuration
├── tailwind_merged.config.js # Tailwind configuration
├── src/
│   └── index.css          # Global styles (use existing file)
└── public/                # Static assets (use existing assets)
```

## 🎯 Personal Content Integrated

### Personal Information
- **Name**: Nicholas Edmund
- **Title**: Frontend Developer
- **Subtitle**: Entry-level Video Editor and Frontend Developer
- **Location**: Jakarta, Indonesia
- **Email**: nicholasedmund18@gmail.com

### Projects
1. **SumoPower** - Marketing site for a battery brand
   - Technologies: HTML, Tailwind CSS, JavaScript
   - Live Demo: https://sumopower.id/

2. **Kantin Teknik UI** - Campus canteen listing
   - Technologies: HTML, Tailwind CSS
   - Live Demo: https://kantekftui.vercel.app/

3. **Short-form Video Edits** - Video editing portfolio
   - Technologies: Premiere Pro, Filmora, Storytelling
   - Live Demo: YouTube Channel

### Skills
- JavaScript
- Tailwind CSS
- HTML & CSS
- React
- Node.js
- Git
- Figma
- Video Editing

### Social Links
- GitHub: https://github.com/nicholas-edmund
- LinkedIn: https://www.linkedin.com/in/nicholas-edmund/
- Instagram: https://www.instagram.com/nichola_edmund/
- YouTube: https://www.youtube.com/@nicholasedmund

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Create a new React project**:
   ```bash
   npm create vite@latest nicholas-portfolio -- --template react
   cd nicholas-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install @lottiefiles/dotlottie-react aos lucide-react
   npm install -D tailwindcss postcss autoprefixer
   ```

3. **Replace project files**:
   - Replace `src/App.jsx` with `App_Merged.jsx`
   - Replace `src/main.jsx` with `main_merged.jsx`
   - Replace `index.html` with `index_merged.html`
   - Replace `package.json` with `package_merged.json`
   - Replace `vite.config.js` with `vite_merged.config.js`
   - Replace `tailwind.config.js` with `tailwind_merged.config.js`
   - Use the existing `src/index.css` file (it's already properly configured)

4. **Update imports in main.jsx**:
   ```jsx
   import App from './App.jsx' // Make sure this points to your App file
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

6. **Build for production**:
   ```bash
   npm run build
   ```

## 📱 Sections

### 1. Home Section
- Animated introduction with typing effect
- Call-to-action buttons
- Social media links
- Interactive Lottie animation

### 2. About Section
- Personal information and bio
- Professional statistics
- Skills showcase
- Download CV functionality

### 3. Portfolio Section
- Tabbed interface for Projects, Certificates, and Tech Stack
- Project cards with live demo links
- Certificate gallery with modal view
- Tech stack icons with hover effects

### 4. Contact Section
- Contact form with validation
- Social media integration
- Location and email information
- Interactive animations

## 🎨 Customization

### Colors
The design uses a purple-blue gradient theme. You can modify colors in `tailwind.config.js`:
- Primary: Blue (`#6366f1`)
- Secondary: Purple (`#a855f7`)
- Background: Dark (`#030014`)

### Content
All personal content is stored in constants at the top of `App_Merged.jsx`:
- `PERSONAL_INFO` - Personal details
- `PROJECTS` - Project information
- `TECH_STACK` - Skills and technologies
- `SOCIAL_LINKS` - Social media links

### Images
Replace placeholder images with your actual images:
- Profile photo: Update the `src` in the About section
- Project images: Update `Img` URLs in `PROJECTS` array
- Tech stack icons: Place actual icons in `/public/` folder

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📧 Contact

For any questions or customizations:
- Email: nicholasedmund18@gmail.com
- GitHub: @nicholas-edmund

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This merged portfolio combines your personal content with the modern template design. All personal information, projects, and contact details have been integrated and are ready for production use.
