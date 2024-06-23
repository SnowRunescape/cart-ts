import { CART_LOCALSTORAGE_KEY } from "@/config";
import { Item } from "@/types/Item";
import { storage } from "@/utils/storage";

export const cart = {
  list(): Item[] {
    return storage.get(CART_LOCALSTORAGE_KEY) || [];
  },

  get(id: number | string): Item | undefined {
    return this.list().find((item: Item) => item.id === id);
  },

  add(item: Item) {
    if (this.exists(item.id)) {
      return;
    }

    const cart = this.list();

    cart.push(item);

    storage.set(CART_LOCALSTORAGE_KEY, cart);
  },

  updateQuantity(id: number | string, quantity: number) {
    const items = this.list();
    const itemIndex = items.findIndex((item: Item) => item.id === id);

    if (itemIndex !== -1) {
      items[itemIndex].quantity = quantity;
      storage.set(CART_LOCALSTORAGE_KEY, items);
    }
  },

  remove(id: number | string) {
    const cart = this.list().filter((item: Item) => item.id !== id);

    storage.set(CART_LOCALSTORAGE_KEY, cart);
  },

  exists(id: number | string) {
    return !!this.get(id);
  },

  total() {
    return this.list().reduce((sum, item) => (sum += item.price * item.quantity), 0);
  },

  clean() {
    storage.set(CART_LOCALSTORAGE_KEY, []);
  },
}
