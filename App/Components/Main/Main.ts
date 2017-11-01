import { Alina, Models, D, DC } from "../Imports";
import * as Components from "../Index";

export class Main extends DC.AlinaComponent {
  products = D.atom([] as Models.Product[]);
  atom1 = D.atom(42);

  constructor(root: DC.Alina) {
    super(root);

    setInterval(() => {
      this.atom1.set(this.atom1.get() + 1);     
    }, 2000);

    this.products.set([...this.products.get(), {
      name: "Test " + this.atom1.get(),
      categories: [],
      icon: "",
      price: 42
    }]);
  }

  template = Alina.makeTemplate(`
    <div>
      <header>
        The trooth is @truth
      </header>
      <section id="current-cash">
        Current cash list
      </section>
      <section id="product-list">
        Product list
      </section>
    </div>
  `);

  render() {
    this.root.tpl().setChild(this.template, (root) => {
      root.set("@truth", this.atom1);
      root.query("#product-list").mount(Components.ProductList)
        .onItemClick.set(this.onProductClick)
        .render(this.products);
    });
  }

  onProductClick = (product: Models.Product) => {
  }
}