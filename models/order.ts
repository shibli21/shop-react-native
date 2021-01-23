class Order {
  id: string;
  items: Item;
  date: Date;
  totalAmount: number;
  constructor(id: string, items: Item, totalAmount: number, date: Date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }
}
