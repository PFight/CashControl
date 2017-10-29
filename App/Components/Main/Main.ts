import { Alina, Models } from "../Imports";
import * as Components from "../Index";

export class Main implements Alina.ISingleNodeComponent {
  root: Alina.ISingleNodeRenderer;
  products: Models.Product[];

  initialize(context: Alina.ISingleNodeRenderer) {
    this.root = context;
    context.elem.innerHTML = "";
    context.elem.appendChild(Alina.fromTemplate(this.template));
  }

  template = Alina.makeTemplate(`
    <div>
      <header>
      
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
    this.root.query("#product-list").mount(Components.ProductList)
      .render(this.products)
      .onItemClick.set(this.onProductClick);
  }

  onProductClick = (product: Models.Product) => {
  }
}