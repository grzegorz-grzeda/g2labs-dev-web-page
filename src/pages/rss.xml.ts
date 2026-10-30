import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { company } from '../data/company';
import { absoluteUrl, escapeXml, postPath, siteUrl } from '../lib/seo';

export const GET: APIRoute = async () => {
    const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
        (left, right) =>
            right.data.publishDate.getTime() - left.data.publishDate.getTime()
    );

    const items = posts.map((post) => {
        const url = absoluteUrl(postPath(post.id));
        return [
            '    <item>',
            `      <title>${escapeXml(post.data.title)}</title>`,
            `      <link>${escapeXml(url)}</link>`,
            `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
            `      <description>${escapeXml(post.data.excerpt)}</description>`,
            `      <pubDate>${post.data.publishDate.toUTCString()}</pubDate>`,
            `      <author>${escapeXml(`${company.email} (Grzegorz Grzęda)`)}</author>`,
            ...post.data.tags.map(
                (tag) => `      <category>${escapeXml(tag)}</category>`
            ),
            '    </item>'
        ].join('\n');
    });

    const body = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
        '  <channel>',
        `    <title>${escapeXml(`${company.name} blog`)}</title>`,
        `    <link>${siteUrl}/blog/</link>`,
        `    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />`,
        '    <description>Notes on embedded systems, Zephyr, connected devices, tooling, and engineering workflow by Grzegorz Grzęda.</description>',
        '    <language>en</language>',
        posts.length > 0
            ? `    <lastBuildDate>${posts[0].data.publishDate.toUTCString()}</lastBuildDate>`
            : '',
        ...items,
        '  </channel>',
        '</rss>',
        ''
    ]
        .filter(Boolean)
        .join('\n');

    return new Response(body, {
        headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
    });
};
