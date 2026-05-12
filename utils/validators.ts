export function validateShape<T>(obj: unknown, keys: (keyof T)[]): obj is T {
  if (typeof obj !== 'object' || obj === null) return false;
  return keys.every(k => k in obj);
}