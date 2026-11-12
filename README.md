# gabrielrourke.com

Source for my academic website. It's plain HTML and CSS with no build step: what's in this folder is exactly what GitHub Pages serves.

## What's where

| File | What it is |
|---|---|
| `index.html` | Home page: photo, bio, contact |
| `research.html` | Papers and abstracts |
| `teaching.html` | Courses taught |
| `cv.html` | CV page (shows the PDF below) |
| `files/Gabriel_Rourke_CV.pdf` | **The CV.** Every CV link on the site points here |
| `images/profile.jpg` | Profile photo |
| `assets/css/style.css` | All styling (colors and fonts are at the top) |
| `CNAME` | Tells GitHub Pages to serve the site at www.gabrielrourke.com. Don't delete it |
| `home.html`, `404.html` | Redirect for the old `/home` link, and the "page not found" page |

## Common updates (all doable on github.com)

To edit any file on github.com: open it, click the pencil icon, make the change, then click **Commit changes**. The live site updates about a minute later.

- **New CV:** open the `files` folder, then **Add file → Upload files**, and upload your PDF named exactly `Gabriel_Rourke_CV.pdf`. It replaces the old file.
- **New photo:** upload to `images/` as `profile.jpg`. A portrait crop (4:5) looks best.
- **Add a paper:** in `research.html`, copy one `<article class="paper"> … </article>` block and edit it. Upload any PDF drafts to `files/` and link them as `files/name.pdf`. The file has comments showing where.
- **Add a course:** in `teaching.html`, copy one `<li> … </li>` block and edit it.
- **Add Google Scholar, SSRN, LinkedIn or GitHub:** in `index.html`, find the commented-out links under "Download CV", remove the `<!--` and `-->` markers, and paste in your URLs.
- **Change the navigation:** the menu is copied at the top of each page (`index`, `research`, `teaching`, `cv`, `404`). Change it in all of them.

## Previewing changes on your own computer (optional)

Double-click `index.html` to open it in a browser. Everything works except the embedded CV viewer, which needs a web server. For that, run `python3 -m http.server` in this folder and go to http://localhost:8000.

## Hosting

GitHub Pages, deployed from the `main` branch, root folder. The domain is registered at Squarespace, with DNS records pointing to GitHub Pages:

- `@`: four A records pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153
- `www`: a CNAME record pointing to `<github-username>.github.io`

Fonts: Literata and Public Sans, self-hosted under the SIL Open Font License (see `assets/fonts/`).
