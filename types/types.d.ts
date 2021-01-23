interface Product {
  id: string;
  ownerId: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
}

interface ProductsState {
  availableProducts: Product[];
  userProduct: Product[];
}

interface RootState {
  products: ProductsState;
  cart: CartState;
}

interface Item {
  [key: string]: {
    qty: number;
    productPrice: number;
    productTitle: string;
    sum: number;
  };
}
interface CartState {
  items: Item;
  totalAmount: number;
}
