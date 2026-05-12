# Playwright Generic API Demo (TypeScript + Generics)
This repository contains a minimal, clean, and fully type‑safe API testing framework built with Playwright, TypeScript, and generics.
It is designed to demonstrate professional API automation practices while keeping the codebase lightweight and easy to extend.

## Podsumowanie (in Polish)
Ten projekt pokazuje, jak tworzyć czyste, typowane testy API w Playwright + TypeScript.
Zawiera generyczny klient API, walidację odpowiedzi, modele danych i testy CRUD.
Kod jest minimalistyczny, ale zgodny z dobrymi praktykami automatyzacji.
Może służyć jako baza pod większy framework lub jako projekt do portfolio.
Struktura jest prosta, czytelna i gotowa do integracji z CI/CD.
Projekt nie zawiera testów UI — to w 100% API‑only.
Idealny przykład wykorzystania TypeScript generics w praktyce.

## Summary (in English)
This project demonstrates a clean and type‑safe approach to API testing using Playwright and TypeScript.
It is intentionally minimal, focusing on generics, reusable utilities, and a simple architecture that can scale into a larger framework.
Perfect for CI pipelines, portfolio use, or as a foundation for more advanced API automation.

## The project includes:

a generic API client

generic response validation

typed data models

reusable fixtures

CRUD tests (GET / POST / PUT / DELETE)

a clean folder structure suitable for CI/CD pipelines

This is an API‑only project — no UI, no Page Objects, no browser interactions.

## Project Goals
Provide a simple but production‑quality API testing setup

Demonstrate practical use of TypeScript generics in automation

Ensure full type‑safety for API responses and request payloads

Keep the project minimal, readable, and easy to maintain

Offer a strong portfolio example for API automation roles

## Key folders:

fixtures/ – Playwright fixtures with typed API client

utils/ – generic helpers, validators, and API client

models/ – strongly typed data models

tests/ – CRUD API tests

## Key Features
### Generic API Client
Allows fully typed API calls:

ts
const product = await api.get<Product>('/products/1');
### Generic Response Validation
Lightweight shape checking:

ts
validateShape<Product>(obj, ['id', 'title', 'price']);
### Typed Models
Each endpoint has its own TypeScript model.

### Generic Helpers
Reusable utilities like:

ts
pick(product, 'title');
withId(product);
### CRUD API Tests
GET, POST, PUT, DELETE tests using a public fake REST API.

## Example Test
ts
test('GET /products/1', async ({ api }) => {
  const product = await api.get<Product>('/products/1');

  expect(validateShape<Product>(product, ['id', 'title', 'price'])).toBe(true);
  expect(product.id).toBe(1);
});
## How to Run
Code
npm install
npx playwright test
