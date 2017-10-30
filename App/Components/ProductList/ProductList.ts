import { Alina, Models, D, DC } from "../Imports";

export class ProductList implements Alina.ISingleNodeComponent {
  private node: DC.ISingleNodeRenderer;

  initialize(context: Alina.ISingleNodeRenderer) {
    this.node = context.ext(DC.DerivableSingle);
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

  render(products: D.Derivable<Models.Product[]>) {
    this.node.tpl().replaceChildren(this.template, (root) => {
      root.repeat("#item", products, (item, product) => {
        item.set("@itemName", product.name);
        item.set("@itemClick", this.onItemClick.value);
      });
    });
    return this;
  }
}