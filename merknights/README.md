## Marine Environment Club @ UCF — Website Scaffold

Next.js 15 + Tailwind CSS 4 scaffold for the MEC site with core pages and navigation.

### Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Routes

- `/` Home
- `/about` About
- `/competitions` Overview
	- `/competitions/mate`
	- `/competitions/robosub`
	- `/competitions/roboboat`
- `/sponsors` Sponsors

### Where to edit

- Layout/nav/footer: `src/components/*` and `src/app/layout.js`
- Styles: `src/app/globals.css` (Tailwind v4)
- Pages: `src/app/**/page.js`

### Branding and theme

- Dark-first design using UCF colors:
	- Metallic Gold: #BA9B36
	- Bright Gold: #FFCA06
	- Logo Gray: #828282
- Body font: Noto Sans (loaded via next/font)
- Heading font: Revive 80 Wide (add `public/fonts/revive-80-wide.ttf`)
	- The CSS expects the file at `/public/fonts/revive-80-wide.ttf`. After adding it, headings will automatically use it.

### Deploy

Build a production bundle:

```bash
npm run build && npm start
```

You can deploy to any static/Node host. Vercel is recommended for Next.js.
