export type Item = {
  id: number | string,
  price: number,
  quantity: number,
  metadata?: Record<string, any>,
  [key: string]: any,
}