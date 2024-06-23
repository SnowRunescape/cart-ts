# cart-ts

This is a simple project demonstrating the implementation of a shopping cart using localStorage to store cart items locally in the browser. The code is written in TypeScript and uses Jest for unit testing.

## Documentation

**get(id: number | string)**

Get product from the cart by id

```typescript
const item = cart.get(1);
// { id: 1, name: 'Item A', price: 50, quantity: 2 }
```

add(item: Item)

Adds product to the cart. If the product already exists it increases the quantity with 1. The product object structure is flexible, only "id" and "price" are mandatory properties.

```typescript
cart.add({ id: 2, name: 'Item B', price: 75, quantity: 1 });
```
## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

Baselime SDK is made available under the MIT License (MIT). Please see [License File](https://github.com/SnowRunescape/cart-ts/blob/master/LICENSE) for more information.
