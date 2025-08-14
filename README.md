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

## 🔐 Environment Variables (if adding email service)
Create a `.env.local`:
```
EMAIL_API_KEY=...
EMAIL_TO=you@example.com
EMAIL_FROM=portfolio@example.com
```
Then consume inside the `/api/contact/route.ts`.

## 🧪 Testing Ideas (Not included by default)
You can add unit tests with Vitest / Jest for utility functions or integration tests with Playwright for form & navigation behavior.

## 📦 Deployment
- Recommended: **Vercel** (zero config for Next.js)
- Ensure any required environment variables are added in Vercel dashboard
- After deploy, verify: dark mode toggle, contact POST (network tab), layout shifts (CLS ~0), Lighthouse scores.

## 🛠 Performance Notes
- Star / meteor counts tuned for low layout thrash; elements kept minimal
- Animations use opacity/transform (GPU friendly)
- Images served via `next/image` for responsive optimization

## ❓ FAQ
**Why App Router single page?** Simplifies anchor navigation & scroll performance while still leveraging server components where static.

**How to add a new section?** Create a file in `components/sections`, export component, import and insert into `app/page.tsx`, add anchor link in `Navbar`.

**Can I switch to multi-page?** Yes: move each section to its own `app/<route>/page.tsx`, update Navbar links, and optionally lazy-load heavy sections.

## 📝 License
MIT

---
Feel free to fork, adapt, and share. Contributions or suggestions welcome.
