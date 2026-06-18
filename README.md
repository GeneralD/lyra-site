# lyra-site

![banner](./assets/banner.png)

![type](https://img.shields.io/badge/type-landing%20page-blue) ![built with](https://img.shields.io/badge/Astro-6-FF5D01?logo=astro&logoColor=white) ![styling](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white) ![deploy](https://img.shields.io/badge/Cloudflare%20Workers-edge-F38020?logo=cloudflare&logoColor=white) ![package manager](https://img.shields.io/badge/bun-1.x-000000?logo=bun&logoColor=white)

The official marketing site for **[Lyra](https://github.com/GeneralD/lyra)** — a desktop lyrics overlay and video wallpaper for macOS.

A static, zero-JS landing page built with Astro + Tailwind v4, served from the edge on Cloudflare Workers.

## Stack

- **[Astro](https://astro.build)** 6 — static output, no client JS by default
- **[Tailwind CSS](https://tailwindcss.com)** v4 — via the `@tailwindcss/vite` plugin, CSS-first `@theme` tokens
- **[Cloudflare Workers](https://developers.cloudflare.com/workers/)** — static-assets-only Worker, deployed via wrangler + Workers Builds
- **[Bun](https://bun.sh)** — package manager & task runner

## Develop

```bash
bun install
bun run dev          # local dev server at http://localhost:4321
bun run build        # build to ./dist
bun run preview      # preview the production build
```

## Deploy

The first deploy is run locally; subsequent deploys are automatic via
**Cloudflare Workers Builds** (Git integration) on every push to `main`.

```bash
bun run build
bunx wrangler deploy   # wrangler OAuth handles auth
```

The Cloudflare account ID is passed via the `CLOUDFLARE_ACCOUNT_ID`
environment variable / repo secret — it is intentionally **not** hardcoded in
`wrangler.jsonc` so the config stays safe to commit publicly.

## License

See the [Lyra](https://github.com/GeneralD/lyra) project for license details.
