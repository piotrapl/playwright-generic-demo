export function withId<T extends { id: number }>(obj: T): number {
  return obj.id;
}

export function pick<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}