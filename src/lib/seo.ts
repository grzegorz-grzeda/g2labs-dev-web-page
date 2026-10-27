// Structured data (schema.org JSON-LD) and shared helpers for machine-readable
// output: sitemap, RSS, llms.txt. Everything is derived from src/data/company.ts
// so it stays in sync with the visible site.

import { business, company, links, packages, services } from '../data/company';

export const siteUrl = company.site.replace(/\/$/, '');
export const personId = `${siteUrl}/#person`;
export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

export const absoluteUrl = (path: string) =>
    new URL(path, `${siteUrl}/`).toString();

export const knowsAbout = [
    'Embedded software',
    'Firmware development',
    'C',
    'C++',
    'Zephyr RTOS',
    'Nordic Semiconductor nRF54',
    'Nordic Semiconductor nRF52',
    'nRF Connect SDK',
    'Thread',
    'OpenThread',
    'Bluetooth Low Energy',
    'CoAP',
    'DTLS',
    'MCUboot',
    'Firmware over-the-air updates',
    'IoT device security',
    'ESP32',
    'STM32',
    'FPGA',
    'Agentic AI-assisted software development'
];

const sameAs = links
    .filter((link) => ['LinkedIn', 'GitHub', 'Facebook'].includes(link.label))
    .map((link) => link.href)
    .concat(business.registryUrl);

// "From €1,900 net" -> 1900
const parseMinPrice = (price: string) => {
    const digits = price.replace(/[^\d]/g, '');
    return digits ? Number(digits) : undefined;
};

export const siteGraph = () => [
    {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${siteUrl}/`,
        name: company.name,
        description: company.description,
        inLanguage: 'en',
        publisher: { '@id': organizationId }
    },
    {
        '@type': 'Person',
        '@id': personId,
        name: business.proprietor,
        givenName: 'Grzegorz',
        familyName: 'Grzęda',
        jobTitle: 'Embedded software engineer',
        description: company.longBio,
        url: `${siteUrl}/`,
        email: `mailto:${company.email}`,
        image: absoluteUrl('/me-2.jpeg'),
        nationality: { '@type': 'Country', name: 'Poland' },
        worksFor: { '@id': organizationId },
        knowsAbout,
        knowsLanguage: ['pl', 'en'],
        sameAs
    },
    {
        '@type': 'ProfessionalService',
        '@id': organizationId,
        name: business.companyName,
        alternateName: company.name,
        description: company.description,
        url: `${siteUrl}/`,
        logo: absoluteUrl('/logo.png'),
        image: absoluteUrl('/logo.png'),
        email: company.email,
        founder: { '@id': personId },
        foundingDate: business.started,
        taxID: business.nip,
        identifier: [
            { '@type': 'PropertyValue', propertyID: 'NIP', value: business.nip },
            { '@type': 'PropertyValue', propertyID: 'REGON', value: business.regon }
        ],
        address: { '@type': 'PostalAddress', addressCountry: 'PL' },
        areaServed: 'Europe',
        knowsAbout,
        sameAs,
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Embedded engineering services',
            itemListElement: [
                ...services.map((service) => ({
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: service.title,
                        description: service.description,
                        provider: { '@id': organizationId }
                    }
                })),
                ...packages.map((item) => {
                    const minPrice = parseMinPrice(item.price);
                    return {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: item.title,
                            description: `${item.description} ${item.deliverable}`,
                            provider: { '@id': organizationId }
                        },
                        ...(minPrice
                            ? {
                                  priceSpecification: {
                                      '@type': 'PriceSpecification',
                                      minPrice,
                                      priceCurrency: 'EUR',
                                      valueAddedTaxIncluded: false
                                  }
                              }
                            : {})
                    };
                })
            ]
        }
    }
];

export const toJsonLd = (graph: object[]) =>
    JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
        /</g,
        '\\u003c'
    );

export const escapeXml = (value: string) =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

export const postPath = (id: string) => `/blog/${id.replace(/\.(md|mdx)$/, '')}/`;
