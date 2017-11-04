import { Models, DJS } from './Imports';

export class ProductService {
  protected localStorageKey = "CashControl_Products";
  protected products = DJS.atom(this.loadProducts());


  public get(): DJS.Derivable<Models.Product[]> {
    return this.products;
  }

  public create(product: Models.Product) {
    this.products.set([...this.products.get(), product]);
    this.saveProducts(this.products.get());
  }

  public update(id: string, product: Models.Product) {
    let products = [...this.products.get()];
    let index = products.findIndex(x => x.id == id);
    products[index] = product;
    this.products.set(products);
    this.saveProducts(products);
  }

  public delete(id: string) {
    let products = [...this.products.get()];
    let index = products.findIndex(x => x.id == id);
    products.splice(index, 1);
    this.products.set(products);
    this.saveProducts(products);
  }

  protected loadProducts(): Models.Product[] {
    let data = localStorage[this.localStorageKey];
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  protected saveProducts(products: Models.Product[]) {
    localStorage[this.localStorageKey] = JSON.stringify(products);
  }
}