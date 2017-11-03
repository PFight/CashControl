import { Alina, Models, DJS, DA } from "../Imports";
import { style } from "typestyle";

export class ProductList extends DA.AlinaComponent {

  @Alina.defaultEmptyFunc
  public onItemClick: (item: Models.Product) => void;

  protected template = this.makeTemplate(`
    <ul class="product-list__list"}>
      <template id="item">
        <li class="product-list__item">
          <button onclick=@itemClick class="product-list__button" >
            @itemName
          </button>
        </li>
      </template>
    </ul>
  `);

  public render(products: DJS.Derivable<Models.Product[]>) {
    this.setChild(this.template, (root) => {
      root.repeat("#item", products, (item, product) => {
        item.set("@itemName", product.name);
        item.setOnce("@itemClick", () => this.onItemClick(product));
      });
    });
  }
}