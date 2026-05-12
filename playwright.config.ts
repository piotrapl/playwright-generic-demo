import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://dummyjson.com',
    headless: true,
  },

  reporter: [['list'], ['html', { open: 'never' }]],
  retries: 1,
});