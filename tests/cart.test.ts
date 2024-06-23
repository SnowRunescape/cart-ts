import { cart } from "@/cart";
import { Item } from "@/types/Item";

describe('cart', () => {
  beforeEach(() => {
    cart.clean();
  });

  test('should list items from localStorage', () => {
    const item: Item = { id: 1, name: 'item1', price: 100, quantity: 1 };
    cart.add(item);

    const result = cart.list();
    expect(result).toEqual([item]);
  });

  test('should get item by id from localStorage', () => {
    const item: Item = { id: 1, name: 'item1', price: 100, quantity: 1 };
    cart.add(item);

    const result = cart.get(1);
    expect(result).toEqual(item);
  });

  test('should get item by id from localStorage do not exists', () => {
    const item: Item = { id: 1, name: 'item1', price: 100, quantity: 1 };
    cart.add(item);

    const result = cart.get(2);
    expect(result).toEqual(undefined);
  });

  test('should add item to localStorage if it does not exist', () => {
    const item: Item = { id: 1, name: 'item1', price: 100, quantity: 1 };
    cart.add(item);

    const storedItems = cart.list();
    expect(storedItems).toEqual([item]);
  });

  test('should not add item to localStorage if it already exists', () => {
    const item: Item = { id: 1, name: 'item1', price: 100, quantity: 1 };

    cart.add(item);
    cart.add(item);

    const storedItems = cart.list();
    expect(storedItems).toEqual([item]);
  });

  test('should update quantity', () => {
    const item: Item = { id: 1, name: 'item1', price: 100, quantity: 1 };

    cart.add(item);
    cart.updateQuantity(1, 15);

    const result = cart.get(1);
    expect(result?.quantity).toEqual(15);
  });

  test('should remove item from localStorage by id', () => {
    cart.add({ id: 1, name: 'item1', price: 100, quantity: 1 });
    cart.add({ id: 2, name: 'item2', price: 200, quantity: 2 });

    expect(cart.exists(1)).toBe(true);
    expect(cart.exists(2)).toBe(true);
    expect(cart.exists(3)).toBe(false);

    expect(cart.list().length).toEqual(2);

    cart.remove(1);

    expect(cart.list().length).toEqual(1);
  });

  test('should check if item exists in localStorage', () => {
    cart.add({ id: 1, name: 'item1', price: 100, quantity: 1 });

    const exists = cart.exists(1);

    expect(exists).toBe(true);
  });

  test('should calculate total price of items in localStorage', () => {
    cart.add({ id: 1, name: 'item1', price: 100, quantity: 1 });
    cart.add({ id: 2, name: 'item2', price: 200, quantity: 2 });

    const total = cart.total();

    expect(total).toBe(500);
  });

  test('should clean all items from localStorage', () => {
    cart.add({ id: 1, name: 'item1', price: 100, quantity: 1 });
    cart.add({ id: 2, name: 'item2', price: 200, quantity: 2 });

    cart.clean();

    const storedItems = cart.list();

    expect(storedItems).toEqual([]);
  });
});
