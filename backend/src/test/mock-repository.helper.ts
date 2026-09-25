import { vi } from 'vitest';

export const createMockRepository = () => ({
    find: vi.fn(),
    findOne: vi.fn(),
    findOneBy: vi.fn(),
    findBy: vi.fn(),
    create: vi.fn(),
    save: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
});