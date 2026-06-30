# Ahlulbayt Centrum Pro Website

Premium Next.js website for Ahlulbayt Centrum in Brno.

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000

## Build

```powershell
npm run build
npm run start
```

## Deploy on Vercel

Push to GitHub, then import the repository on https://vercel.com/new.

## Features

- Premium modern Islamic center design
- Mobile responsive navigation
- English, Arabic, Czech and German language switcher
- Brno-only prayer times with next prayer display
- Hijri date
- Weekly Thursday program
- Muharram, Ramadan and yearly announcements
- Announcements section
- Gallery section
- Live broadcast placeholder
- Daily Qur'an and Hadith inspiration section
- Google Maps and contact buttons
- Simple local admin panel for announcements/gallery
- Favicon and PWA manifest
- Clean `.gitignore` for GitHub/Vercel

## Notes

The simple admin panel saves data only in the browser using localStorage. For a real committee dashboard, connect Sanity, Supabase, Firebase or a custom backend later.

WhatsApp number is a placeholder. Replace it in `app/page.tsx`.
