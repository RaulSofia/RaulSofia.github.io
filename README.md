# Raul Sofia personal site

This is a Jekyll site published to GitHub Pages through GitHub Actions.

## Local development

Install dependencies once:

```powershell
bundle install
npm install
```

Start the local site with Tailwind watch mode, Jekyll live reload, and network access:

```powershell
npm run dev
```

Open `http://localhost:4000/`. Stop the server with `Ctrl+C`.

The production workflow runs the same CSS and Jekyll build commands automatically when changes are pushed to `main`.

## Content workflows

- Add a blog post as a dated Markdown file under `_posts/`.
- Add a link-tree poster as a Markdown file under `_posters/` and use `layout: poster`.
- Add a research entry as a Markdown file under `_research/` with `type: article`, `thesis`, `poster`, or `software`.
- Add poster-specific downloadable files and media under `posters/<slug>/`.

## Asset organization

- `assets/images/`: site, post, profile, and research images.
- `assets/documents/`: downloadable PDFs and documents.
- `assets/css/site.css`: Tailwind CSS source.
- `assets/css/site.generated.css`: generated locally or by CI; ignored by Git.

Do not edit `_site/`; it is generated output.
