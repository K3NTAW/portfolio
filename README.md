# Kenta Waibel Portfolio

Desktop-first, mobile-ready portfolio implemented with Next.js App Router and Tailwind CSS, focused on credibility for Swiss corporate audiences.

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
- Cookie consent state is handled client-side in `components/cookie-banner.tsx`.
- Privacy policy is available at `/privacy`.
- SEO routes are generated in `app/sitemap.ts` and `app/robots.ts`.
