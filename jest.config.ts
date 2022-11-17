import type { JestConfigWithTsJest } from 'ts-jest';

const esModules = ['nanoid'].join('|');

const config: JestConfigWithTsJest = {
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/common/mocks/styleMock.ts',
    '^nanoid(/(.*)|$)': 'nanoid$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          esModuleInterop: true,
        },
      },
    ],
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};

export default config;
