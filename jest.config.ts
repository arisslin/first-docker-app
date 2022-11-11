import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/common/mocks/styleMock.ts',
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
};

export default config;
