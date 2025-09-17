Tech Stack (Portfolio Project)

#Languages

JavaScript / TypeScript → TypeScript preferred for type safety

Frontend

React.js (modern, component-based UI)

TailwindCSS (utility-first styling for responsive design)

Framer Motion (smooth animations & transitions for a polished look)

React Router (for navigation between sections/pages)

Backend (Optional, if needed)

Node.js + Express (for a contact form API or project showcase API)

Supabase or Firebase (for database + authentication if I want to store data like blog posts, visitor messages, or analytics)

Deployment

Vercel (for frontend hosting, continuous deployment from GitHub)

GitHub (version control + portfolio as open-source code)

Other Tools

React Icons (for icons)

Formik + Yup (form handling & validation)

EmailJS (contact form without a backend, optional)

AI Integration Plan
  Code or Feature Generation

AI will be used to scaffold reusable components like:

Navbar, Hero Section, Project Cards, Contact Form

Responsive layout structures (grids, flexbox, dark/light mode support)

📌 Example Prompt:

“Generate a responsive React component for a portfolio ProjectCard that displays a project title, description, tech stack icons, and a link to GitHub + Live Demo. Style with TailwindCSS.”

🧪 Testing Support

Use AI to generate unit tests (with Jest + React Testing Library):

Snapshot tests for components (Navbar, Footer)

Form validation tests (Contact form)

Use AI to write edge case tests (invalid email in contact form, missing links in project card).

📌 Example Prompt:

“Write Jest tests for a React ContactForm component that validates email, name, and message fields.”

📡 Schema-Aware or API-Aware Generation

If using a backend (Supabase/Firebase), AI will:

Generate CRUD functions for managing projects/blog posts.

Scaffold API client functions to fetch projects.

📌 Example Prompt:

“Based on this Supabase table schema for projects (id, title, description, github_url, live_url, tech_stack), generate TypeScript functions to fetch, add, and delete projects.”

🔍 In-Editor / PR Review Tooling
Tool Choice

Cursor (AI-first editor for scaffolding, refactoring, and PR reviews)

GitHub Copilot Chat (inline suggestions while coding)

Support Provided

AI will suggest better commit messages

Review PRs for code cleanliness and unused imports

Suggest optimizations for performance and accessibility

📌 Example Prompts:

“Review this PR for my portfolio and suggest improvements for accessibility and semantic HTML.”
“Generate a concise commit message for adding the animated project showcase section.”

