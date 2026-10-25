# Kunwar Abhishek Singh, PhD — Academic website

A modern, responsive research portfolio built using **Astro 5 + plain CSS + Pages CMS** and configured for **GitHub Pages**.

## Website sections

- Home (portrait, research introduction, selected papers, updates)
- About (biography, qualifications)
- Research (three connected PhD research directions)
- Publications (full linked publication list, searchable by title and filterable by type)
- Experience (teaching and academic service)
- Awards
- Contact (Google Scholar, LinkedIn, ORCID, ResearchGate, GitHub)

## 1. Publish the website on GitHub (recommended)

1. Log in to GitHub using the account `Kunwar-crypto`.
2. Create a new **public** repository with this exact name: `Kunwar-crypto.github.io`. You don't need to add a README on GitHub because one is included.
3. Unzip this project on your computer. Upload all files and folders from **inside** the `abhishek-portfolio` folder into the root of that GitHub repository. Ensure the hidden `.pages.yml` and `.github/` folder are included. GitHub's web uploader supports folder contents, but make sure you are not accidentally putting everything under a nested project folder.
4. Commit to the repository's `main` branch. If the GitHub default branch is different, change it to `main` (Settings → Branches) or change `branches: [main]` in `.github/workflows/deploy.yml`.
5. Open **Settings → Pages**, then set **Build and deployment → Source = GitHub Actions**.
6. Open **Actions** to see the first build. When successful, your site appears at `https://kunwar-crypto.github.io/`.

This site is not yet published just because the ZIP exists. Publishing requires steps above with your own GitHub account.

## 2. Edit the website visually (no HTML editing)

1. Go to https://app.pagescms.org/ and sign in with GitHub.
2. Authorize Pages CMS for the repository, following the interface instructions.
3. Select `Kunwar-crypto.github.io` and the `main` branch.
4. Pages CMS reads the project's `.pages.yml`. You'll see **Homepage, profile & links**, **Publications**, **Research projects**, **Teaching & experience**, **Awards & recognition**, **News & updates** and **Education timeline**.
5. Edit any record, press Save. Pages CMS will save to GitHub; the GitHub Actions deployment builds an updated public site shortly afterwards.
6. The portrait and CV can be replaced through the respective fields under **Homepage, profile & links**. The new files are committed under `public/assets`.

**Homepage headline:** Use the three `Headline` fields in the visual editor to adjust the main sentence and which words are highlighted in mint.

## 3. Work on the site locally (optional)

Install Node.js 20.19+ or Node.js 22.12+, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

Build production HTML:

```bash
npm run build
npm run preview
```

## 4. If you use a different GitHub repository

If you don't use `Kunwar-crypto.github.io`, GitHub Pages usually serves the site under `/repository-name/`. Set `site` and `base` in `astro.config.mjs`, for example:

```js
export default defineConfig({
  site: 'https://kunwar-crypto.github.io',
  base: '/your-repository-name/'
});
```

The `src/styles/global.css` references a remote illustrative NASA image. Its URL is domain-root independent. With a subpath base, internal links and images use `import.meta.env.BASE_URL`. If using a custom domain, update `site` and set `base: '/'`.

## 5. Editorial notes — please check before going public

- **CV privacy:** The included PDF contains your mobile number and public email. If you don't want your number available publicly, use a contact-redacted CV instead of the current PDF.
- **Publication author lists:** The journal titles, years, journal details and DOI links came from your supplied CV. The full co-author lists were not available in the parsed CV; the `authors` text is provisional. Check exact author order and spelling before publishing.
- **Teaching details:** The teaching roles were drafted from details supplied in earlier discussions, not from this specific three-page CV; verify descriptions and dates.
- **News timing:** Items without a known exact date show only their year, not a fabricated day/month.
- **Satellite hero:** The background is illustrative NASA Earth Observatory imagery of the Mississippi River Delta, not the Lower Ganges / Hooghly study site. Its credit is shown in the footer. This image is loaded from NASA's website, not packaged locally; if NASA blocks the request, the gradient background remains visually intact. For entirely offline imagery, replace the CSS image URL with an image you have permission to use and store it in `public/assets`.
- **Analytics:** No tracking scripts or contact form service are included.

## Technical notes

- The project is a static site; it requires no server or database.
- CMS edits become ordinary Git commits, preserving content history.
- The responsive layout includes mobile navigation and publication search/filter.
- The pages include basic SEO, social sharing metadata, and a Person schema.
- The Astro project requires `npm install` before a production build; use the included GitHub Actions workflow to build in GitHub's environment.

## Earth imagery attribution

The "From orbit to river insight" feature displays NASA Blue Marble imagery, reprojected to an orthographic view centered on Asia and the Indian Ocean using Basemap. The overlay satellite illustration is a design element, not an actual image of a satellite or a live observation. NASA image guidelines: https://www.nasa.gov/nasa-brand-center/images-and-media/.
