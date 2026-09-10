# IJCC Website — Developer Handoff

This is the official web application for the **India-Japan Chamber of Commerce (IJCC)**, built with **Next.js 15**, **Sanity CMS**, and **Firebase**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS + shadcn/ui |
| CMS | Sanity v3 |
| Database / Auth | Firebase (Firestore + Auth) |
| AI Assistant | Firebase Genkit + Google Gemini |
| Deployment | Firebase App Hosting |

---

## Getting Started

### 1. Prerequisites
- Node.js 20+
- A Sanity project (or ask for access to the existing one)
- A Firebase project

### 2. Clone & Install
```bash
git clone <repo-url>
cd IJCC-FIREBASE
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root with the following keys (ask the previous owner for actual values):

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=

# Google AI (for the chatbot)
GOOGLE_GENAI_API_KEY=
```

### 4. Run Locally
```bash
npm run dev
```

The site runs at `http://localhost:9002` and the Sanity Studio at `http://localhost:9002/studio`.

---

## Project Structure

```
src/
├── ai/                     # AI Chatbot (Firebase Genkit + Gemini)
│   ├── flows/              # Genkit flows (site-assistant-flow.ts)
│   └── genkit.ts           # Genkit initialization
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── events/
│   ├── gallery/
│   ├── members/
│   ├── news/
│   ├── resources/
│   ├── services/
│   └── studio/[[...index]] # Sanity Studio embedded
├── components/             # Reusable UI components
├── hooks/                  # Custom React hooks (incl. translations)
├── lib/                    # Firebase client and utilities
├── locales/                # Translation JSON files (en, ja)
└── sanity/
    ├── lib/
    │   ├── client.ts       # Sanity client
    │   └── queries.ts      # All GROQ queries (central place to edit)
    ├── schemaTypes/        # All Sanity content schemas
    └── structure.ts        # Sanity Studio sidebar layout
```

---

## CMS (Sanity Studio)

All content is managed via Sanity Studio at `/studio`. The following pages are fully editable:

- **Static Pages**: Home, About Us, Contact
- **Collections**: Services, News Articles, Resources, Members, Events
- **Global Settings**: Site title, logo, contact email, phone, social links

To add content or change text on any page, log into the Sanity Studio.

---

## Localization

The site supports **English** and **Japanese**. Translation strings are in:
- `src/locales/en.json`
- `src/locales/ja.json`

The `useTranslation()` hook resolves these at runtime. CMS content always takes priority over translation strings.

---

## Deployment

The project is hosted on **Firebase App Hosting**. Deployment is configured via `apphosting.yaml`. Push to the `main` branch triggers an automatic redeploy.
