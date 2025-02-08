import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageReporters: ['text', 'text-summary', 'lcov'],
  roots: ['<rootDir>/src/'],
  testEnvironment: 'jsdom',
  testRegex: '.+\\.test\\.tsx?$',
};

export default createJestConfig(config);
