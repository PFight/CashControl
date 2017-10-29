import { Alina, Models } from "../Imports";

export class ProductList implements Alina.ISingleNodeComponent {
  private node: Alina.ISingleNodeRenderer;

  initialize(context: Alina.ISingleNodeRenderer) {
    this.node = context;
  }

  private template = Alina.makeTemplate(`
    <ul>
      <template id="item">
        <li>
          <button onclick=@itemClick >@itemName</button>
        </li>
      </template>
    </ul>
  `);

  onItemClick = new Alina.Slot<(item: Models.Product) => void, this>(this);

  render(products: Models.Product[]) {
    this.node.tpl().replaceChildren(this.template, (root) => {
      root.repeat("#item", products, (item, product) => {
        item.set("@itemName", product.name);
        item.set("@itemClick", this.onItemClick.value);
      });
    });
    return this;
  }
}