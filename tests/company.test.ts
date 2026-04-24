import { describe, expect, it } from 'vitest';

import { company, projects, services } from '../src/data/company';

describe('company data scaffold', () => {
    it('exposes the core brand details', () => {
        expect(company.name).toBe('G2Labs');
        expect(company.email).toContain('@');
        expect(company.location).toContain('Poland');
    });

    it('keeps at least one service and one project entry', () => {
        expect(services.length).toBeGreaterThan(0);
        expect(projects.length).toBeGreaterThan(0);
    });
});
