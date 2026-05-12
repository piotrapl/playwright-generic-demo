import { Page } from '@playwright/test';

export class BasePage<TSelectors> {
  constructor(
    protected page: Page,
    protected selectors: TSelectors
  ) {}

  async click<K extends keyof TSelectors>(key: K) {
    await this.page.click(this.selectors[key] as string);
  }
}