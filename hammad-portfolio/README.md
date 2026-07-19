# Hammad Ameer — Portfolio

A responsive 3D personal portfolio built with Next.js, TypeScript, Tailwind CSS,
React Three Fiber, Three.js and Framer Motion. Portfolio content is based on the
provided CV; no fake jobs, GitHub links, or project URLs are included.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- React Three Fiber / drei / three.js — hero "Engineering Core" scene
- Framer Motion — reveals, transitions and micro-interactions
- lucide-react — UI icons

## Run locally (Windows / VS Code)
1. Install the current Node.js LTS release from nodejs.org.
2. Extract this project ZIP.
3. Open the folder that directly contains `package.json` in VS Code.
4. Open **Terminal > New Terminal** and run:

```bash
npm ci
npm run dev
```

5. Open `http://localhost:3000`.

## Required checks before deployment
Run both commands and only deploy if both succeed:

```bash
npm run lint
npm run build
```

This fixed package has been verified with a clean install, lint, and a production build.

## Important files
- `lib/data.ts` — name, contact details, skills, projects, education, certification and achievement
- `public/images/profile.jpg` — profile photo
- `public/resume/Hammad_Ameer_CV.pdf` — downloadable CV
- `components/3d/EngineeringCore.tsx` — hero 3D scene
- `components/sections/Contact.tsx` — contact UI

## Replace profile photo
Replace `public/images/profile.jpg` with your final photo and keep the same filename.
A portrait image around 4:5 works best. The UI uses `object-cover object-top`, so the
photo stays proportional and is cropped responsively instead of being stretched.

## Replace CV
Replace `public/resume/Hammad_Ameer_CV.pdf` with the final CV and keep the same filename.

## Project links and screenshots
`lib/data.ts` supports optional `githubUrl` and `liveUrl` fields. Only add real URLs.
The current portfolio intentionally does not invent missing repository/demo links.
For a stronger portfolio, add real project screenshots and wire them into project cards.

## Contact form behavior
The current form opens a pre-filled email draft using `mailto:`. It does **not** pretend
that a server submitted the message. This works without API keys or environment secrets.
For direct in-site submissions later, connect Formspree/Web3Forms or a Next.js API route
with an email provider such as Resend.

## Deploy to Vercel using GitHub (recommended)

### 1. Create a GitHub repository
Create an empty repository, for example `hammad-portfolio`.

From the project folder in VS Code terminal:

```bash
git init
git add .
git commit -m "Deploy Hammad portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

### 2. Import into Vercel
1. Sign in to Vercel with GitHub.
2. Click **Add New > Project**.
3. Import the `hammad-portfolio` repository.
4. Vercel should auto-detect **Next.js**.
5. Keep the default build command (`next build`) and output settings.
6. Click **Deploy**.

No environment variable is required for the current website. Vercel can infer its
production URL for metadata/sitemap generation.

### 3. Optional custom domain / canonical URL
After you attach a custom domain, add this Vercel environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

Then redeploy. Do not use a domain you do not own.

## Deploy from Vercel CLI (alternative)

```bash
npx vercel
npx vercel --prod
```

Follow the login/project prompts.

## After deployment
Test these on the live URL:
- desktop and mobile navigation
- profile image
- 3D hero scene
- all section anchor links
- project case-study modals
- Resume download
- LinkedIn and email links
- contact form mail-draft behavior
- `/robots.txt`
- `/sitemap.xml`

## Notes
- The build is static for the main page and does not require a database.
- `node_modules` and `.next` must not be uploaded to GitHub; `.gitignore` already excludes them.
- The mobile experience reduces 3D complexity and custom cursor behavior for performance.
