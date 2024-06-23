import { CART_LOCALSTORAGE_KEY } from "@/config";
import { Item } from "@/types/Item";
import { storage } from "@/utils/storage";

describe('localstorage.test', () => {
  test('should list items from localStorage', () => {
    const items: Item[] = [{ id: 1, name: 'item1', price: 100, quantity: 1 }];
    storage.set(CART_LOCALSTORAGE_KEY, items);

    const result = storage.get(CART_LOCALSTORAGE_KEY);

    expect(result).toEqual(items);
  });

  test('should list items from localStorage do not exists', () => {
    const result = storage.get("RANDOM_KEY");

    expect(result).toEqual(null);
  });
});
