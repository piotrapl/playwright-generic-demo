import { test, expect } from '../fixtures/api-fixtures';
import { Product } from '../models/product';
import { validateShape } from '../utils/validators';
import { pick, withId } from '../utils/api-helpers';

test('GET /products/1', async ({ api }) => {
  const product = await api.get<Product>('/products/1');

  expect(validateShape<Product>(product, ['id', 'title', 'price'])).toBe(true);
  expect(withId(product)).toBe(1);
  expect(pick(product, 'title')).toBeTruthy();
});

test('POST /products/add', async ({ api }) => {
  const newProduct = await api.post<Product, Partial<Product>>(
    '/products/add',
    { title: 'Test Product', price: 99 }
  );

  expect(validateShape<Product>(newProduct, ['id', 'title', 'price'])).toBe(true);
  expect(newProduct.title).toBe('Test Product');
});

test('PUT /products/1', async ({ api }) => {
  const updated = await api.put<Product, Partial<Product>>(
    '/products/1',
    { price: 123 }
  );

  expect(updated.price).toBe(123);
});

test('DELETE /products/1', async ({ api }) => {
  const deleted = await api.delete<Product>('/products/1');

  expect(validateShape<Product>(deleted, ['id', 'title', 'price'])).toBe(true);
});