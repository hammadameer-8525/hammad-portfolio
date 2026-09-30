# Hammad Ameer — Cyber V3 Clean Red Portfolio

A responsive personal portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. The visual system blends a premium developer portfolio with restrained cybersecurity-inspired details.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content and assets

- `lib/data.ts` is the single source for profile details, navigation, skills, projects, education, certification, and achievement content.
- `public/images/profile.jpg` is the profile portrait.
- `public/resume/Hammad_Ameer_CV.pdf` is the resume linked from the hero.
- Project `liveUrl`, `githubUrl`, `image`, and `featured` fields are optional. Buttons should only be shown for verified URLs.

## Contact behavior

The contact form validates name, email, and message, then opens a pre-filled email draft using `mailto:`. It does not claim to submit to a server. A future mail provider should keep credentials in server-only environment variables.

## Deployment

Vercel detects the Next.js application without custom build configuration. When a production domain is available, set `NEXT_PUBLIC_SITE_URL` to its full HTTPS origin so canonical, sitemap, and social metadata use that domain. Vercel can otherwise use `VERCEL_PROJECT_PRODUCTION_URL` automatically.

The supplied workspace does not include Git metadata or a `.vercel` project link. Connect the correct existing repository/project before the first production deployment; do not create a duplicate without confirming ownership.
