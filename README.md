# Robust Data Systems

Website for [Robust Data Systems](https://www.robustdata.systems), an independent consultancy focused on data systems, storage engines, performance, indexing, privacy, observability, and adaptive systems.

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm test
```

## Deployment

Pushes to `main` are built as a static site and deployed to GitHub Pages by `.github/workflows/deploy-pages.yml`.
