// Mock for import.meta.env in Jest tests
const viteMock = {
  env: {
    VITE_API_URL: 'http://localhost:5000/api',
    MODE: 'test',
    DEV: true,
    PROD: false,
    BASE_URL: '/'
  }
};

export default viteMock;
