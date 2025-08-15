# Marine Environment Robotics @ UCF Website
This is the source code for the MERKnight's website. The website can be found at [merknights.github.io](merknights.github.io).

## Developing

Next.js 15 + Tailwind CSS 4.


### Quick start
To get started with working on the website, first you need to clone the repository.

```bash
git clone https://www.github.com/merknights/merknights.github.io
cd merknights.github.io/merknights
```

It is recommended that you use a dev container. If you open the folder in VScode, install the Dev Container extension, and open the folder in a dev container. Select to use the settings found in ```.devcontainer```. Make sure any npm calls are called from inside the merknights folder.

For the first time, use npm to install dependencies next.js, react, and tailwind:
```bash
npm install
```
Then, compile a dev build. With the dev build, any chagnes will be automaically recompiled for immediate viewing:
```bash
npm run dev
```

Open http://localhost:3000 to view testing.

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
- Heading font: Revive 80 Wide

### Deploy

Whenever it is pushed to origin/main, GitHub Actions will automatically compile and publish it to merknights.github.io. If you are working on the site, ensure you have tested the build before pushing to main or performing a pull request.


