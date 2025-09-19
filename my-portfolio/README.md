# Stephen Ekwueme - Portfolio Website

A modern, responsive portfolio website built with React, TailwindCSS, and Framer Motion. This portfolio showcases my work as a Frontend Software Engineer with a focus on agricultural technology, e-commerce solutions, and strategic problem-solving.

## 🌟 Features

- **Modern Design**: Clean, minimal interface with subtle chess-themed elements
- **Responsive**: Fully responsive design for all device sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Performance Optimized**: Built with Vite for fast loading and optimal performance
- **SEO Friendly**: Optimized meta tags and structured data
- **Contact Form**: Working contact form with EmailJS integration
- **Accessibility**: Built with accessibility best practices in mind

## 🎨 Design Philosophy

The design incorporates a chess theme throughout, representing:
- **Strategic thinking** in problem-solving approach
- **Patience** in development process
- **Pattern recognition** in code architecture
- **Forward planning** in project execution

Color palette focuses on:
- **Green tones**: Representing growth and agriculture
- **Earth tones**: Connecting to nature and farming
- **Modern neutrals**: Ensuring professional appearance

## 🚀 Technologies Used

- **React 19.1.1** - Component-based UI library
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful SVG icons
- **EmailJS** - Email service for contact form
- **ESLint** - Code linting and formatting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.0 or higher)
- npm or yarn package manager
- Git

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio/my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure EmailJS (Optional)**
   
   To enable the contact form functionality:
   
   a. Create an account at [EmailJS](https://www.emailjs.com/)
   
   b. Set up a service and template
   
   c. Update the EmailJS configuration in `src/components/sections/Contact.jsx`:
   ```javascript
   const serviceId = 'your_service_id';
   const templateId = 'your_template_id';
   const publicKey = 'your_public_key';
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the portfolio in action.

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx          # Hero section with introduction
│   │   │   ├── About.jsx         # About me section
│   │   │   ├── Skills.jsx        # Technical skills and values
│   │   │   ├── Projects.jsx      # Featured projects showcase
│   │   │   └── Contact.jsx       # Contact form and information
│   │   └── ui/
│   │       ├── Navigation.jsx    # Responsive navigation bar
│   │       ├── Footer.jsx        # Footer with links and info
│   │       └── LoadingSpinner.jsx # Loading component
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles and utilities
├── public/                       # Static assets
├── index.html                    # HTML template
└── README.md                     # Project documentation
```

## 🎯 Sections Overview

### 🏠 Hero Section
- Professional introduction with chess-themed animations
- Clear value proposition and mission statement
- Call-to-action buttons and social links

### 👤 About Section
- Personal story and development philosophy
- Core values: Humility, Collaboration, Research, Self-Learning
- Chess philosophy integration
- Professional stats and current focus areas

### 🛠️ Skills Section
- Technical expertise with animated progress bars
- Categorized skill sets (Frontend, State Management, UI/UX, Tools)
- Core values representation
- Strategic thinking philosophy quote

### 💼 Projects Section
- Featured projects with detailed descriptions
- Technology tags and key features
- Live demo and GitHub repository links
- Focus on agriculture, e-commerce, and impact-driven solutions

### 📬 Contact Section
- Working contact form with EmailJS integration
- Professional contact information
- Social media links
- Chess-themed inspirational quotes

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.js`:
- **Primary**: Green tones for growth and agriculture
- **Earth**: Brown tones for nature connection
- **Neutral**: Gray tones for professional balance

### Animations
Custom animations are defined in CSS and enhanced with Framer Motion:
- Chess piece floating animations
- Smooth page transitions
- Hover effects and micro-interactions

### Content
To customize the content:
1. Update personal information in each component
2. Replace project data in `Projects.jsx`
3. Modify skills and experience in `Skills.jsx` and `About.jsx`
4. Update contact information and social links

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Configure custom domain if desired

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deployment script to `package.json`
3. Deploy: `npm run deploy`

## 🔧 Configuration

### EmailJS Setup
1. Create EmailJS account
2. Add email service (Gmail, Outlook, etc.)
3. Create email template
4. Update service configuration in Contact component

### SEO Optimization
- Update meta tags in `index.html`
- Modify structured data for better search visibility
- Add Open Graph and Twitter Card tags

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About the Developer

Stephen Ekwueme is a Frontend Software Engineer passionate about creating digital solutions that empower farmers and improve lives through technology. With expertise in React, TypeScript, and modern web technologies, he combines strategic thinking with innovative development approaches.

### Connect with me:
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Stephen Ekwueme](https://linkedin.com/in/yourprofile)
- Email: stephen.ekwueme@example.com

## 🙏 Acknowledgments

- Chess icons and inspiration for strategic thinking theme
- Agricultural technology community for project inspiration
- Open source community for amazing tools and libraries
- Design inspiration from modern portfolio trends

---

**"In chess, as in code, every move should have a purpose."** ♚