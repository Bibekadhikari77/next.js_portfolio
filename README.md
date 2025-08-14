# Next Portfolio

Modern, animated, responsive personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **next-themes**. It showcases a developer profile with performant UI patterns, dark/light theming, animated cosmic backgrounds, and easily extensible sections.

## ✨ Highlights
- App Router architecture (server + client components where appropriate)
- Animated cosmic background (twinkling stars, meteors, spark collisions) reusable across sections
- Sections: Hero, About, Skills (categorized), Projects (filterable), Contact (API-backed form)
- Accessible keyboard‑navigable sticky navbar with icon links + dark mode toggle
- Filterable Projects grid with smooth animated transitions
- Contact form wired to `/api/contact` (stub – ready for email service integration)
- Framer Motion entrance + continuous background animations
- Dark / light theme with persistence using `next-themes`
- SEO friendly: metadata export, semantic HTML, responsive images (`next/image`)
- Custom `not-found` page
- Clean TypeScript typings & modular component architecture
- Utility-first styling via Tailwind with custom color palette (`primary`) & gradients

## 🧱 Tech Stack
| Layer | Tools |
|-------|-------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript / JSX |
| Styling | Tailwind CSS, custom gradients, dark mode classes |
| Animation | Framer Motion (section reveals + background) |
| Theming | next-themes |
| Icons | react-icons |
| Forms | @tailwindcss/forms + custom validation UX (basic) |
| Misc | clsx, tailwind-merge (utility composition), next-seo (optional) |

## 📁 Project Structure (key files)
```
app/
	layout.tsx          # Root layout, ThemeProvider, Navbar, Footer
	page.tsx            # Single‑page sections composition
	api/contact/route.ts# Contact form API handler (POST)
components/
	layout/Navbar.tsx   # Sticky nav with anchors + theme toggle
	layout/Footer.tsx   # Footer
	sections/Hero.tsx   # Intro + avatar + cosmic background
	sections/About.tsx  # About content (with background)
	sections/Skills.tsx # Categorized skills, animated cards
	sections/Projects.tsx# Filterable projects grid
	sections/Contact.tsx# Contact form (client)
	ui/CosmicBackground.tsx # Reusable starfield / meteors / sparks
public/
	resume.pdf
	favicon.svg
	avatar-image.jpg (renamed locally)
```

## 🚀 Getting Started
Install and run locally:
```bash
npm install
npm run dev
```
Visit: http://localhost:3000

Type checking & linting:
```bash
npm run lint
npx tsc --noEmit
```

Build & production preview:
```bash
npm run build
npm start
```

## 🔧 Configuration & Customization
| Area | How to Customize |
|------|------------------|
| Primary color palette | `tailwind.config.js` (theme.extend.colors.primary) |
| Cosmic background density | Pass `stars`, `meteors`, `enableMeteors` props to `CosmicBackground` in each section |
| Collision frequency | `collisionIntervalMs` prop |
| Section order | Edit `app/page.tsx` composition |
| Projects data | Edit `components/sections/Projects.tsx` `allProjects` array |
| Skills categories | Edit `categories` array in `Skills.tsx` |
| Contact handler | Extend logic in `app/api/contact/route.ts` (e.g. send email via Resend, SendGrid, AWS SES) |
| Meta / SEO | Provide `export const metadata` in `app/layout.tsx` or individual routes |

### Adding Reduced Motion Support (optional)
You can detect `prefers-reduced-motion` and disable meteor animations inside `CosmicBackground` by adding a media query check and conditionally setting `enableMeteors` or replacing animations with static stars.

### Re‑adding Removed Sections
Previously removed: Blog, Experience, Testimonials. Reintroduce by adding section components (e.g. `components/sections/Blog.tsx`) and inserting them into `app/page.tsx` & Navbar.

<img width="1600" height="690" alt="image" src="https://github.com/user-attachments/assets/6f9bc461-be47-459d-8132-33d3183ee95e" />
<img width="1600" height="677" alt="image" src="https://github.com/user-attachments/assets/8738c66e-125a-4782-9237-2c9ff3131103" />
<img width="1600" height="674" alt="image" src="https://github.com/user-attachments/assets/063a6ec6-665b-457d-a8f5-dc375cfcc61b" />
<img width="1600" height="709" alt="image" src="https://github.com/user-attachments/assets/cf9dea4f-3f39-4758-af26-ccec6d27d1e7" />
<img width="1600" height="709" alt="image" src="https://github.com/user-attachments/assets/cac704a8-e6c4-4d57-882c-f59aacd93516" />


