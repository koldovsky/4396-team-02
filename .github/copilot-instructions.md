# GitHub Copilot / AI Agent Instructions for this repository

Purpose: concise, actionable notes so an AI coding agent can be productive immediately in this HTML + htmx template project.

## Big picture
- Static HTML site assembled from server-served partials using htmx. Top-level pages (e.g. `index.html`, `about.html`) are the canonical pages CI validates.
- Core folders:
  - `components/` — HTML partials. Naming: `page.section.partial.html` (page-scoped) or `global.name.partial.html` (shared components).
  - `css/` — page-level CSS (e.g. `index.css`, `about.css`) — **you must import** partial CSS from here using `@import url(...);`.
  - `assets/` and `components/assets/` — shared and component-scoped images/UI assets.
  - `scripts/` — JS modules (e.g. `global.burger-menu.partial.js`) and `scripts/index.js` which initializes modules after partials are loaded.

## How pages are composed (practical points)
- Root pages include htmx placeholders that load partials at page-load:

  ```html
  <section data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="components/index.hero.partial.html"></section>
  ```

- Checklist when adding a new section:
  1. Add `components/page.section.partial.html`.
  2. Add CSS file `css/page.section.partial.css` and **add** `@import url(page.section.partial.css);` into the parent page's CSS (e.g. `css/index.css`).
  3. Add the placeholder in the parent HTML with `data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="components/page.section.partial.html"`.
  4. If JS is needed, add `scripts/page.section.partial.js` (or `global.*.partial.js`) and import it from `scripts/index.js` (see init pattern below).

## Naming / style conventions (discoverable rules)
- Partials: `pageName.sectionName.partial.html` or `global.name.partial.html`
- CSS imports are explicit in page CSS files: add `@import url(your.partial.css);` to the corresponding page file.
- JavaScript: component modules are `*.partial.js` and are dynamically imported by `scripts/index.js` after htmx loads all partials.

## CI / Validation
- The repository uses GitHub Actions to run HTMLProofer on all top-level `.html` files (see `.github/workflows/validate.yml`).
- Action command used:

  ```sh
  for file in $(find . -maxdepth 1 -iname "*.html"); do
    htmlproofer $file --disable-external --ignore-urls "/#/"
  done
  ```

- To reproduce locally:
  1. Install Ruby and the gem: `gem install html-proofer`.
  2. Run the same command from project root.
- Notes: CI disables external checks (`--disable-external`) and ignores hash-only links (`--ignore-urls "/#/"`). Use `data-proofer-ignore` attribute to silence HTMLProofer for specific tags.

## Local development / testing tips
- htmx loads partials over HTTP — use a simple local server when developing so partials load correctly:

  ```sh
  # from repo root
  python3 -m http.server 8000
  # then open http://localhost:8000/index.html in browser
  ```

- To test a single page's proofer run: `htmlproofer index.html --disable-external --ignore-urls "/#/"`.

## What to watch out for
- Don’t forget to add the partial's CSS import to the page's CSS file (this is manual and required for styles to be included).
- If you add routes or change markup that creates external links, consider CI flags and how HTMLProofer should treat them.
- Use `data-proofer-ignore` when an external or dynamic link must be excluded from checks.

## Files to inspect for context
- `index.html`, `about.html` — show how pages assemble partials
- `components/` — all component partials and nested component assets
- `css/` — page-level CSS files and partial CSS imports
- `scripts/index.js` — partial-loading and dynamic module import pattern
- `.github/workflows/validate.yml` — CI validation steps
- `README.md` — project overview (HTML Proofer and htmx usage)

---
If anything here is unclear or you want more examples (e.g., a full checklist to add a component), say so and I will iterate. Keep instructions concise and always reference the partial naming, CSS-import, and htmx placeholder steps when changing UI.