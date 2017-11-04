import { Alina, Models, DJS, DA } from "../Imports";
import * as Components from "../Index";

export class Main extends DA.AlinaComponent {
  products = DJS.atom([] as Models.Product[]);
  atom1 = DJS.atom(42);

  constructor(root: DA.Alina) {
    super(root);

    setInterval(() => {
      this.atom1.set(this.atom1.get() + 1);     
    }, 2000);

    this.products.set([...this.products.get(), {
      id: "test",
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
        .set({ onItemClick: this.onProductClick })
        .render(this.products);
    });
  }

  onProductClick = (product: Models.Product) => {
    alert("Product clicked!");
  }
}