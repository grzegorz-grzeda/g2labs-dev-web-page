import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

export default defineConfig({
    site: 'https://g2labs.dev',
    output: 'static',
    integrations: [mdx()],
    adapter: netlify(),
    markdown: {
        shikiConfig: {
            theme: 'min-dark'
        }
    }
});
