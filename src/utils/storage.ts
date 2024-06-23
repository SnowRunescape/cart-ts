export const storage = {
  get: (key: string) => {
    const item = localStorage.getItem(key);

    if (item) {
      try {
        return JSON.parse(item);
      } catch (error) { }
    }

    return null;
  },
  set: (key: string, value: {}) => localStorage.setItem(key, JSON.stringify(value)),
}
