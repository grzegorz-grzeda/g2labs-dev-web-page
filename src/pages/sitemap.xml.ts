import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { products } from '../data/company';
import { absoluteUrl, escapeXml, postPath } from '../lib/seo';

const staticPaths = [
    '/',
    '/work/',
    '/products/',
    '/tech-stack/',
    '/blog/',
    '/contact/',
    '/privacy/',
    '/terms/'
];

export const GET: APIRoute = async () => {
    const posts = await getCollection('blog', ({ data }) => !data.draft);

    const entries: { loc: string; lastmod?: string }[] = [
        ...staticPaths.map((path) => ({ loc: absoluteUrl(path) })),
        ...products.map((product) => ({
            loc: absoluteUrl(`/products/${product.slug}/`)
        })),
        ...posts.map((post) => ({
            loc: absoluteUrl(postPath(post.id)),
            lastmod: post.data.publishDate.toISOString().slice(0, 10)
        }))
    ];

    const body = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...entries.map(
            (entry) =>
                `  <url><loc>${escapeXml(entry.loc)}</loc>${
                    entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''
                }</url>`
        ),
        '</urlset>',
        ''
    ].join('\n');

    return new Response(body, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' }
    });
};
