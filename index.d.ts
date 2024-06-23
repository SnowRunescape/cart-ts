declare module 'cart-ts';

export const cart: {
  list(): Item[];
  get(id: number | string): Item | undefined;
  add(item: Item): void;
  remove(id: number | string): void;
  exists(id: number | string): boolean;
  total(): number;
  clean(): void;
}

export type Item = {
  id: number | string,
  price: number,
  quantity: number,
  metadata?: Record<string, any>,
  [key: string]: any,
}
