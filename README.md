# Overview

This example shows how to deploy a simple astro site to Cloudflare Pages with a view page counter implmented in redis.

Since Cloudflare workers are stateless, normal redis database connections do not work. Upstash provides a REST API to redis with a special library for Cloudflare workers.

Astro fetches an compiles data at build time by default. The `src/components/Counter.astro` file shows an example of a component that fetches and statically compiles counter data at build time.

For dyanmic display of the page view count, the `src/components/DnymaicCounter.svelt` file is used.

The counter component / API stores counter data in a sorted set. This could be useful for storing counts per page and then showing which pages receive the most hits.


# Deploying to Cloudflare Pages

1. Create a new Cloudflare Pages project
2. Connect the github repo
3. Set environment vars in Cloudflare using wrangler or the web GUI
4. Push code to github to trigger a build

[View deployed site](https://astro-cloudflare-page-redis-counter-example.pages.dev/)


# Local Development

Cloudflare Pages Functions are in beta and do not inherit environment vars in local development the way wrangler workers do as of 5/8/22. There are open issues in github to fix this.

As a workaround, the `npm run dev` script in package.json reads the vars from .env file and passes them along in the command arguments. It works but isn't pretty.

Both wrangler and astro are started by `npm run dev` and should work as expected without additional setup once a .env file has been created. See .env.local.

```bash
npm run dev

# Start miniflare on its own
npx wrangler pages dev ./functions --binding KEY1=1

# Start astro on its own
npm astro dev

# Start them together with miniflare proxying requests to astro
npm wrangler pages dev -- astro dev
```

---

# IMPORTANT NOTES

Cloudflare Workers do not support many built-in Node modules like crypto and streams. This means most database connectors will not work on workers since they expect a persistent connection.

For cyrpto functions like MD5, SHA-256, etc. use `crypto.subtle` Web Crypto library.

See https://developers.cloudflare.com/workers/runtime-apis/web-crypto/



## Debugging

```bash
npx --node-options="--inspect" wrangler pages dev ./functions
```

# TODO

!!! port redis to upstash rest api to work with cloudflare workers

1. Update counter API to connect to redis and get/update counter
2. Use astro fetch to get counter data and display it via svelte component
3. Add code to increment counter
4. Add recaptcha to only allow counter update for real person

For extended exmple:
1. Rework counter example to submit a form instead (email address signup)
2. Increment referral counter on signup
3. Make sure recaptcha is protecting the signup form
4. Make sure double referral counting protection is in place
  - lookup email address hash to see if it exists before updating counter
  - i.e. make sure it's a new signup before incrementing
5. Implement multi level referral counting
  - 1st degree direct referrals
  - 2nd degree referrals
  - 3rd degree referrals


# Local Dev

Use wrangler to take over API routes for local dev. Wrangler creates a proxy, intercepts
requests to /api and forwards other requests to astro.

```bash
npx wrangler pages dev -- astro dev
```


# Setup

```bash
npm create astro@latest
# > Just the basics
# > Svelte
# > Tailwind, Partytown, Turbolinks, Sitemap

# Install wrangler beta to serve miniflare pages for local dev
npm install --save-dev wrangler@beta
```

# Related Docs

### Cloudflare
- https://developers.cloudflare.com/pages/platform/functions/
- https://developers.cloudflare.com/pages/framework-guides/astro/
- https://developers.cloudflare.com/pages/platform/functions/
- https://blog.cloudflare.com/building-full-stack-with-pages/
- https://github.com/vercel/next.js/tree/canary/examples/with-redis
- https://docs.upstash.com/redis/howto/getstartedcloudflareworkers
- https://upstash.com/blog/redis-cloudflare-workers
- https://developers.cloudflare.com/workers/runtime-apis/web-crypto/
- https://docs.upstash.com/redis/howto/getstartedcloudflareworkers

The full stack with pages doc above has info about handling authentication via middleware.

### Astro

- Docs: https://docs.astro.build/en/getting-started/
- Integrations: https://astro.build/integrations/
- Themes: https://astro.build/themes/
- Debugging: https://docs.astro.build/en/guides/debugging/
- Data Fetching: https://docs.astro.build/en/guides/data-fetching/



---

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
