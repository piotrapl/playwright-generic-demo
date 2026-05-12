import { test as base } from '@playwright/test';
import { ApiClient } from '../utils/api-client';

type ApiConfig = {
  baseUrl: string;
};

export const test = base.extend<{
  api: ApiClient<ApiConfig>;
}>({
  api: async ({ request }, use) => {
    const client = new ApiClient<ApiConfig>(request, {
      baseUrl: 'https://dummyjson.com'
    });

    await use(client);
  }
});

export const expect = test.expect;