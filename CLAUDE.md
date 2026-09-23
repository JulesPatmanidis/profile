# CLAUDE.md

Static personal site: `index.html`, `style.css`, `images/`, `favicon.ico`. No framework, no build step, no package.json. GitHub Pages serves the repo root from `main`.

- Keep it that way. Do not add a bundler, framework or JS unless asked.
- Projects are `<article class="project">` blocks in `index.html` (path label, title, summary, optional screenshot, stack line, links). Screenshots go in `images/`, resized to at most 1400px wide.
- Use relative asset paths (`images/x.jpg`), never root-absolute ones (the site is served under `/profile/`).
- Content comes from the owner's CV at `../cv/master.md`. Only use numbers and claims that appear there.
- The earlier React/Vite version lives on the `vite-experiment` branch.
