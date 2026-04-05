import bunAdapter from 'svelte-adapter-bun';
import autoAdapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Netlify automatically sets this environment variable to "true" during builds
const isNetlify = process.env.NETLIFY === 'true';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    // Choose the adapter dynamically
    adapter: isNetlify ? autoAdapter() : bunAdapter(),
  },
};

export default config;
