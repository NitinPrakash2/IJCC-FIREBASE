# IJCC Website — Developer Handoff Guide

Official web application for the **India-Japan Chamber of Commerce (IJCC)**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, `src/` directory) |
| Styling | Tailwind CSS + shadcn/ui component library |
| CMS | Sanity v3 (Studio embedded at `/studio`) |
| AI Assistant | Firebase Genkit + Google Gemini API |
| Payments | Razorpay (membership fees) |
| Contact Form | SMTP via Nodemailer + Google Sheets logging |
| Deployment | Firebase App Hosting (auto-deploy on push to `main`) |

---

## Quick Start

### 1. Prerequisites
- **Node.js 20+** → [nodejs.org](https://nodejs.org)
- Access to the **Sanity project** (you should already have an invite — check email)

### 2. Clone / Extract & Install
```bash
# If cloning from GitHub
git clone <repo-url>
cd IJCC-FIREBASE

# If using the ZIP
cd IJCC-FIREBASE

npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local` and fill in all values:
```bash
cp .env.example .env.local
```
Then open `.env.local` and paste the values. See the **Credentials Handoff** section below.

### 4. Run Locally
```bash
npm run dev
```
| URL | What it is |
|---|---|
| `http://localhost:9002` | The main website |
| `http://localhost:9002/studio` | Sanity CMS Studio |

---

## Project Structure

```
IJCC-FIREBASE/
├── src/
│   ├── ai/                        # AI Chatbot (Genkit + Gemini)
│   │   ├── flows/
│   │   │   └── site-assistant-flow.ts   # Main chatbot logic
│   │   ├── dev.ts                 # Genkit dev server entry
│   │   └── genkit.ts              # Genkit + Google AI initialization
│   │
│   ├── app/                       # Next.js App Router pages
│   │   ├── about/                 # About Us page
│   │   ├── contact/               # Contact page + FAQ
│   │   ├── events/                # Events listing + detail pages
│   │   ├── gallery/               # Photo gallery
│   │   ├── members/               # Members directory
│   │   ├── news/                  # News articles
│   │   ├── resources/             # Resources + magazines
│   │   ├── services/              # Services listing + detail pages
│   │   ├── studio/[[...index]]/   # Sanity Studio (embedded)
│   │   ├── layout.tsx             # Root layout (navbar, footer, chatbot)
│   │   └── page.tsx               # Home page
│   │
│   ├── components/                # Reusable UI components
│   │   ├── ui/                    # shadcn/ui primitives
│   │   ├── chatbot.tsx            # AI chatbot widget
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── ...
│   │
│   ├── hooks/
│   │   └── use-translation.ts     # i18n hook (reads from locales/)
│   │
│   ├── lib/
│   │   └── firebase.ts            # Firebase client initialization
│   │
│   ├── locales/                   # Translation strings
│   │   ├── en.json                # English
│   │   └── ja.json                # Japanese
│   │
│   └── sanity/
│       ├── lib/
│       │   ├── client.ts          # Sanity client setup
│       │   └── queries.ts         # All GROQ queries — edit here to change fetched data
│       ├── schemaTypes/           # CMS content schemas (one file per content type)
│       │   ├── index.ts           # Registers all schemas
│       │   ├── homePage.ts
│       │   ├── aboutPage.ts
│       │   ├── contactPage.ts
│       │   ├── serviceItem.ts
│       │   ├── newsArticle.ts
│       │   ├── resourceItem.ts
│       │   └── ...
│       └── structure.ts           # Sanity Studio sidebar layout
│
├── .env.example                   # Template for environment variables
├── .env.local                     # ← You must create this (not in git)
├── sanity.config.ts               # Sanity project config
├── next.config.ts                 # Next.js config
├── tailwind.config.ts             # Tailwind config
└── apphosting.yaml                # Firebase App Hosting deploy config
```

---

## CMS — Sanity Studio

All website content is managed via the Sanity Studio at `/studio`.

### What's Editable via CMS

| Section | CMS Document Type |
|---|---|
| Home page hero, welcome text | `Home Page` (Static Pages) |
| About Us intro, mission, vision | `About Page` (Static Pages) |
| Contact page, offices, FAQs | `Contact Page` (Static Pages) |
| Global settings (email, phone, logo, socials) | `Site Settings` |
| Services list | `Service Items` |
| News articles | `News Articles` |
| Resources & magazines | `Resources` |
| Member profiles | `Members` |

### How CMS + Frontend Works
- Each page fetches its CMS content on load via GROQ queries in `src/sanity/lib/queries.ts`
- **If a CMS field is empty**, the page automatically falls back to the static translation string from `src/locales/`
- This means the site works even if the CMS is empty — you populate fields at your own pace

---

## Localization (i18n)

The site supports **English 🇬🇧** and **Japanese 🇯🇵**.

- Translation strings: `src/locales/en.json` and `src/locales/ja.json`
- The `useTranslation()` hook (in `src/hooks/use-translation.ts`) handles language switching
- CMS content always overrides translation fallbacks

To add a new translation key:
1. Add the key + English value to `src/locales/en.json`
2. Add the key + Japanese value to `src/locales/ja.json`
3. Use `const { t } = useTranslation(); t('your_key')` in the component

---

## AI Chatbot

The chatbot in the bottom-right corner is powered by **Google Gemini** via Firebase Genkit.

- Flow logic: `src/ai/flows/site-assistant-flow.ts`
- Genkit config: `src/ai/genkit.ts`
- UI component: `src/components/chatbot.tsx`
- Requires `GOOGLE_GENAI_API_KEY` in `.env.local`

---

## Deployment

The site deploys automatically to **Firebase App Hosting** on every push to `main`.

- Config: `apphosting.yaml`
- No manual build step needed — just push to `main`
- To deploy manually: `firebase deploy`

---

## Credentials Handoff

> **You should receive these values separately from the previous owner.**
> Copy them into your `.env.local` file.

### What you need and where to get it if lost

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | [sanity.io/manage](https://sanity.io/manage) → your project → Settings |
| `NEXT_PUBLIC_SANITY_DATASET` | Same as above (usually `production`) |
| `GEMINI_API_KEY` / `GOOGLE_GENAI_API_KEY` | [aistudio.google.com](https://aistudio.google.com) → Get API Key |
| `NEXT_PUBLIC_FIREBASE_*` | [console.firebase.google.com](https://console.firebase.google.com) → Project Settings → Your Apps |
| `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` | [dashboard.razorpay.com](https://dashboard.razorpay.com) → Settings → API Keys |
| `SMTP_*` | Your email provider settings (or create a Gmail App Password) |
| `GOOGLE_SHEET_WEB_APP_URL` | Google Apps Script → Deploy → Web App URL |

---

## Common Tasks

### Add a new page
1. Create `src/app/your-page/page.tsx`
2. Add the route to the navbar in `src/components/navbar.tsx`

### Add a new CMS-managed field
1. Add the field to the relevant schema in `src/sanity/schemaTypes/`
2. Add it to the GROQ query in `src/sanity/lib/queries.ts`
3. Use it in the frontend component with a fallback: `cms?.field || t('fallback_key')`

### Add a new translation string
1. Add to `src/locales/en.json`
2. Add to `src/locales/ja.json`
3. Use `t('key')` in your component

### Change site-wide colors/fonts
- `tailwind.config.ts` → `theme.extend.colors`

---

## Sanity Studio Access

You should already have been invited to the Sanity project. If not:
- Go to [sanity.io/manage](https://sanity.io/manage)
- Ask the previous owner to invite your email with **Editor** or **Administrator** role


---

## Git Workflow — Developing Without Breaking the Live Site

The live site auto-deploys every time someone pushes to the `main` branch via Firebase App Hosting.
**Never push directly to `main`.** Always use feature branches.

### Step-by-step

```bash
# 1. Clone the repo
git clone https://github.com/xynet7/IJCC-FIREBASE
cd IJCC-FIREBASE

# 2. Create a new branch for your work
git checkout -b feature/your-feature-name

# 3. Make your changes, then commit
git add .
git commit -m "feat: describe what you did"

# 4. Push your branch to GitHub
git push origin feature/your-feature-name

# 5. Open a Pull Request on GitHub → merge to main when ready
```

### Branch structure

```
main                  ← live production site (auto-deploys on push)
 └── feature/xyz      ← new dev works here, site is unaffected
 └── fix/bug-name     ← bug fixes go here too
```

### Rules
- ✅ Work freely on any `feature/` or `fix/` branch
- ✅ Open a Pull Request on GitHub when ready to go live
- ❌ Never push directly to `main`

### Getting repo access
Ask the owner to add you as a collaborator:
`GitHub repo → Settings → Collaborators → Add people` → enter your GitHub username
