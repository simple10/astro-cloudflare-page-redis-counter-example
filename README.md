# Overview

This example shows how to deploy a simple astro site to Cloudflare Pages
with a view page counter implmented in redis.

See
- https://developers.cloudflare.com/pages/framework-guides/astro/


# Setup

```bash
npm create astro@latest
# > Just the basics
# > Svelte
# > Tailwind, Partytown, Turbolinks, Sitemap
```

# Resources

Additional integrations: https://astro.build/integrations/
Themes: https://astro.build/themes/
Docs: https://docs.astro.build/en/getting-started/
- Debugging: https://docs.astro.build/en/guides/debugging/
- Data Fetching: https://docs.astro.build/en/guides/data-fetching/


# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/starter)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/withastro/astro) or jump into our [Discord server](https://astro.build/chat).
