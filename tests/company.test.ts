import { describe, expect, it } from 'vitest';

import { company, links, products, projects, services } from '../src/data/company';

describe('company data scaffold', () => {
    it('exposes the core brand details', () => {
        expect(company.name).toBe('G2Labs');
        expect(company.location).toContain('Poland');
        expect(links.some((link) => link.label === 'LinkedIn')).toBe(true);
    });

    it('keeps at least one service and one project entry', () => {
        expect(services.length).toBeGreaterThan(0);
        expect(projects.length).toBeGreaterThan(0);
    });

    it('includes the knowledgebase product with complete showcase data', () => {
        const knowledgebase = products.find(
            (product) => product.slug === 'knowledgebase'
        );

        expect(knowledgebase).toBeDefined();
        expect(knowledgebase?.href).toBe(
            'https://g2labsknowledgebase.netlify.app/'
        );
        expect(knowledgebase?.stats).toHaveLength(4);
        expect(knowledgebase?.pillars.length).toBeGreaterThan(0);
        expect(knowledgebase?.featuredTools.length).toBeGreaterThan(0);
        expect(knowledgebase?.proof.length).toBeGreaterThan(0);
    });
});
