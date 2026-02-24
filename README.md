# Kenta Waibel Portfolio

Desktop-first, mobile-ready developer portfolio implemented with Next.js App Router and Tailwind CSS.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Zod (contact input validation)

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Notes

- The contact form posts to `app/api/contact/route.ts`.
- The API currently validates and logs requests server-side.
- Replace the API integration point with an email provider (Resend/SES/etc) for live delivery.
