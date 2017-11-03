import { Alina, Models, D, DC } from "../Imports";
import { style } from "typestyle";

const listItemStyle = style({ $debugName: "listItemStyle",
  color: 'red'
});

export class ProductList extends DC.AlinaComponent {
  private template = Alina.makeTemplate(`
    <ul>
      <template id="item">
        <li class="${listItemStyle}">
          <button onclick=@itemClick >@itemName</button>
        </li>
      </template>
    </ul>
  `);

  onItemClick = new Alina.Slot<(item: Models.Product) => void, this>(this);

  render(products: D.Derivable<Models.Product[]>) {
    this.root.tpl().setChild(this.template, (root) => {
      root.repeat("#item", products, (item, product) => {
        item.set("@itemName", product.name);
        item.set("@itemClick", this.onItemClick.value);
      });
    });
    return this;
  }
}