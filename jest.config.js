export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.js|jsx|ts|tsx$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
  },
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$', '\\.json$'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
