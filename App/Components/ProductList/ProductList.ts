import { Alina, Models, D, DC } from "../Imports";

export class ProductList extends DC.AlinaComponent {

  private template = Alina.makeTemplate(`
    <ul>
      <template id="item">
        <li>
          <template id="button-view">
            <button onclick=@itemClick >@itemName</button>
          </template>
          <template id="simple-view">
            <span>@itemName</span>
          </template>
        </li>
      </template>
    </ul>
  `);

  onItemClick = new Alina.Slot<(item: Models.Product) => void, this>(this);

  render(products: D.Derivable<Models.Product[]>) {
    this.root.tpl().setChild(this.template, (root) => {
      root.repeat("#item", products, (item, product) => {
        item.showIf("#button-view", product.price > 42); 
        item.showIf("#simple-view", product.price <= 42);
        item.set("@itemName", product.name);
        item.set("@itemClick", this.onItemClick.value);
      });
    });
    return this;
  }
}