// Builds /llms.txt (short index) and /llms-full.txt (full plain-text profile)
// following the llms.txt convention (https://llmstxt.org). Generated from
// src/data/company.ts and the blog collection so it never drifts from the site.

import { getCollection } from 'astro:content';

import {
    business,
    caseStudies,
    clients,
    company,
    experience,
    links,
    packages,
    products,
    services,
    techStack
} from '../data/company';
import { absoluteUrl, knowsAbout, postPath } from './seo';

const summary =
    'G2Labs is the independent embedded engineering practice (sole proprietorship, B2B) of Grzegorz Grzęda in Poland. ' +
    'Since 2010 he has built firmware and connected-device software; the core stack is Nordic nRF54 / nRF52 with Zephyr RTOS, ' +
    'Thread and Bluetooth Low Energy, CoAP and DTLS, MCUboot field updates, and device security. Works remotely with teams across Europe.';

const getPosts = async () =>
    (await getCollection('blog', ({ data }) => !data.draft)).sort(
        (left, right) =>
            right.data.publishDate.getTime() - left.data.publishDate.getTime()
    );

const contactLines = () => [
    `- Email: ${company.email}`,
    `- Contact page: ${absoluteUrl('/contact/')}`,
    ...links
        .filter((link) => ['LinkedIn', 'GitHub'].includes(link.label))
        .map((link) => `- ${link.label}: ${link.href}`),
    `- Company: ${business.companyName}, NIP ${business.nip}, REGON ${business.regon} (${business.registryLabel}: ${business.registryUrl})`
];

export const buildLlmsTxt = async () => {
    const posts = await getPosts();

    return [
        `# ${company.name}`,
        '',
        `> ${summary}`,
        '',
        'Key facts:',
        '',
        `- Person: Grzegorz Grzęda, embedded software engineer (C, C++), working professionally since 2010`,
        `- Business: ${business.companyName}, registered in Poland since ${business.started}, B2B contracts`,
        `- Location: Poland; remote-first, working with teams across Europe`,
        `- Expertise: ${knowsAbout.slice(0, 16).join(', ')}`,
        `- Companies worked with: ${clients.join(', ')}`,
        `- Email: ${company.email}`,
        '',
        '## Main pages',
        '',
        `- [Home](${absoluteUrl('/')}): overview, services, selected case studies, contact`,
        `- [Work](${absoluteUrl('/work/')}): services, fixed-scope packages, case studies, full experience timeline, education`,
        `- [Tech stack](${absoluteUrl('/tech-stack/')}): platforms, protocols, and tools with examples`,
        `- [Contact](${absoluteUrl('/contact/')}): email, inquiry form, business registry details`,
        `- [Full profile for LLMs](${absoluteUrl('/llms-full.txt')}): everything above in one plain-text file`,
        '',
        '## Services',
        '',
        ...services.map((service) => `- ${service.title}: ${service.description}`),
        ...packages.map(
            (item) => `- ${item.title} (${item.format}, ${item.price}): ${item.description}`
        ),
        '',
        '## Open source and products',
        '',
        ...products.map(
            (product) =>
                `- [${product.name}](${absoluteUrl(`/products/${product.slug}/`)}): ${product.summary}`
        ),
        '',
        '## Blog',
        '',
        ...posts.map(
            (post) =>
                `- [${post.data.title}](${absoluteUrl(postPath(post.id))}) (${post.data.publishDate
                    .toISOString()
                    .slice(0, 10)}): ${post.data.excerpt}`
        ),
        '',
        '## Optional',
        '',
        `- [RSS feed](${absoluteUrl('/rss.xml')})`,
        `- [Sitemap](${absoluteUrl('/sitemap.xml')})`,
        `- [Privacy notice](${absoluteUrl('/privacy/')})`,
        ''
    ].join('\n');
};

export const buildLlmsFullTxt = async () => {
    const posts = await getPosts();

    return [
        `# ${company.name}: full profile`,
        '',
        `> ${summary}`,
        '',
        '## About',
        '',
        company.longBio,
        '',
        '## Contact',
        '',
        ...contactLines(),
        '',
        '## Services',
        '',
        ...services.flatMap((service) => [
            `### ${service.title}`,
            '',
            service.description,
            '',
            service.outcome,
            '',
            ...service.deliverables.map((item) => `- ${item}`),
            ''
        ]),
        '## Fixed-scope packages',
        '',
        ...packages.flatMap((item) => [
            `### ${item.title}`,
            '',
            `${item.format}. ${item.price}.`,
            '',
            item.description,
            '',
            ...item.checks.map((check) => `- ${check}`),
            '',
            item.deliverable,
            ''
        ]),
        '## Case studies',
        '',
        ...caseStudies.flatMap((study) => [
            `### ${study.title} (${study.client}, ${study.period})`,
            '',
            study.context,
            '',
            study.ownership,
            '',
            ...study.work.map((item) => `- ${item}`),
            '',
            `Stack: ${study.stack.join(', ')}`,
            '',
            study.outcome,
            ''
        ]),
        '## Experience',
        '',
        ...experience.flatMap((entry) => [
            `### ${entry.role}, ${entry.company} (${entry.period})`,
            '',
            entry.summary,
            '',
            ...entry.highlights.map((item) => `- ${item}`),
            ''
        ]),
        '## Tech stack',
        '',
        ...techStack.flatMap((group) => [
            `### ${group.area}`,
            '',
            group.items.join(', '),
            ''
        ]),
        '## Open source and products',
        '',
        ...products.flatMap((product) => [
            `### ${product.name}`,
            '',
            `${product.summary} ${product.story}`,
            '',
            `- Page: ${absoluteUrl(`/products/${product.slug}/`)}`,
            `- Live: ${product.href}`,
            ...('repo' in product && product.repo ? [`- Repository: ${product.repo}`] : []),
            ''
        ]),
        '## Blog posts',
        '',
        ...posts.flatMap((post) => [
            `### ${post.data.title}`,
            '',
            `Published ${post.data.publishDate.toISOString().slice(0, 10)}. ${absoluteUrl(postPath(post.id))}`,
            '',
            (post.body ?? post.data.excerpt).trim(),
            ''
        ])
    ].join('\n');
};
