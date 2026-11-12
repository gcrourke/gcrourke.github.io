# gabrielrourke.com

Source for my academic website. It's plain HTML and CSS with no build step, so what's in this repository is exactly what GitHub Pages serves.

## What's where

| File | What it is |
|---|---|
| `index.html` | Home page: banner, photo, bio, contact |
| `research.html` | Papers. Click a title to open its abstract |
| `teaching.html` | Office hours and teaching experience |
| `courses.html` | Courses page with syllabi. It's linked from the Teaching page and isn't in the menu. The syllabus PDF is in `files/econ390/` |
| `cv.html` | Full CV as a web page, with Download/Open PDF buttons |
| `files/Gabriel_Rourke_CV.pdf` | The CV PDF the buttons point to |
| `images/` | Banner photos (`banner-home.jpg`, `banner-research.jpg`, …) and `profile.jpg` |
| `assets/css/style.css` | All styling. Colors and fonts are at the top |
| `CNAME` | Created automatically when you enter www.gabrielrourke.com under Settings → Pages → Custom domain. Once it exists, don't delete it |
| `home.html`, `404.html` | Redirect for the old `/home` link, and the "page not found" page |

## Common updates (all doable on github.com)

To edit a file on github.com, open it, click the pencil icon, make the change, then click **Commit changes**. The live site updates about a minute later.

- **Office hours:** in `teaching.html`, edit the lines under "Office hours". Each course has its own box, and the Zoom link appears in each.
- **Add a paper:** in `research.html`, copy one `<details class="paper"> … </details>` block and edit it.
- **Add a course or a CV line:** copy one `<li> … </li>` line in `teaching.html` or `cv.html` and edit it.
- **Change a banner photo:** upload a new photo to `images/` with the same name, such as `banner-research.jpg`. Wide photos work best, at least 2000 px across. Each banner also has a smaller `-1200` copy for phones, so either replace that one too or delete its `srcset` line in the page.
- **New headshot:** upload a square photo to `images/` named `profile.jpg`. The outdoor photo is saved as `images/profile-outdoor.jpg`. To use it instead, change `profile.jpg` to `profile-outdoor.jpg` in `index.html`.
- **New CV PDF:** upload it to `files/` named exactly `Gabriel_Rourke_CV.pdf`. That replaces the old file and the buttons keep working. The web version in `cv.html` is separate text, so update it too.
- **Add a course or syllabus:** in `courses.html`, copy one `<article class="course-card">` block. Upload the syllabus PDF to `files/` and link to it.
- **Change the menu:** the menu is copied at the top of every page, so change it in all of them.

## Previewing on your own computer (optional)

Links between pages use clean addresses like `/research` without `.html`. GitHub Pages handles these, but double-clicking a file on your computer won't follow them. To preview locally, run `npx serve` in this folder and open the address it prints.

## Hosting

The site is on GitHub Pages, deployed from the `main` branch's root folder. The domain is registered at Squarespace, and its DNS points to GitHub Pages:

- `@`: four A records pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153
- `www`: a CNAME record pointing to `gcrourke.github.io`

The fonts (EB Garamond, Gentium Basic and Lato) are self-hosted under the SIL Open Font License. See `assets/fonts/`.
