class CartItem {
  qty: number;
  productPrice: number;
  productTitle: string;
  sum: number;
  constructor(
    qty: number,
    productPrice: number,
    productTitle: string,
    sum: number
  ) {
    this.qty = qty;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.sum = sum;
  }
}

export default CartItem;
