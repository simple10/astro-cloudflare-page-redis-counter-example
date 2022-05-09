// https://docs.astro.build/en/reference/configuration-reference/

import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
// import turbolinks from '@astrojs/turbolinks'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  // Set site to the final deploy URL for sitemaps to work properly

  // site: 'https://www.my-site.dev'
  integrations: [
    svelte(),
    tailwind(),
    // turbolinks(),
    partytown(),
    sitemap()
  ]
})