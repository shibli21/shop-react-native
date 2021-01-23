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

interface Order {
  id: string;
  items: Item;
  date: Date;
  totalAmount: number;
}
interface OrdersState {
  orders: Order[];
}

interface RootState {
  products: ProductsState;
  cart: CartState;
  orders: OrdersState;
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
