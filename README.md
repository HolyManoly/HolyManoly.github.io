# holymanoly.github.io

Portfolio site, built with [Astro](https://astro.build) and deployed to GitHub
Pages by `.github/workflows/deploy.yml` on every push to `master`.

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # static output in dist/
```

Add a project by dropping a Markdown file in `src/content/projects/` and its
thumbnail in `src/assets/projects/`. Fields are defined in
`src/content.config.ts`; the grid sorts by `start`, newest first.
