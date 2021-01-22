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
}
