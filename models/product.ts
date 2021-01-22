class Product {
  id: string;
  ownerId: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  constructor(
    id: string,
    ownerId: string,
    title: string,
    imageUrl: string,
    description: string,
    price: number
  ) {
    this.id = id;
    this.description = description;
    this.imageUrl = imageUrl;
    this.ownerId = ownerId;
    this.title = title;
    this.price = price;
  }
}

export default Product;
