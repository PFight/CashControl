import { Alina, Models, D, DC } from "../Imports";
import * as Components from "../Index";

export class Main extends Alina.SingleNodeComponent {
  root: Alina.ISingleNodeRenderer;
  products = D.atom([] as Models.Product[]);
  atom1 = D.atom(42);

  initialize(context: Alina.ISingleNodeRenderer) {
    super.initialize(context);

    setInterval(() => {
      this.atom1.set(this.atom1.get() + 1);
      this.products.set([...this.products.get(), {
        name: "Test " + this.atom1.get(),
        categories: [],
        icon: "",
        price: 42
      }]);
    }, 2000);
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
    this.root.tpl().replaceChild(this.template, (root) => {
      root.getEntries("@truth").mount(DC.DSet).set(this.atom1);
      root.query("#product-list").mount(Components.ProductList)
        .onItemClick.set(this.onProductClick)
          .render(this.products);      
    });
  }

  onProductClick = (product: Models.Product) => {
  }
}