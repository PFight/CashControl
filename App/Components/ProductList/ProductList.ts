import { Alina, Models, DJS, DA } from "../Imports";
import { style } from "typestyle";

export class ProductList extends DA.AlinaComponent {

  @Alina.defaultEmptyFunc
  public onItemClick: (item: Models.Product) => void;

  protected template = this.makeTemplate(`
    <ul class=${this.style.ul}>
      <template id="item">
        <li class=${this.style.listItem}>
          <button onclick=@itemClick class=${this.style.button} >
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

  protected get style() {
    return {
      ul: style({
        listStyle: "none",
        margin: 0,
        padding: 0
      }),
      listItem: style({
        color: 'red',
        display: 'inline-block'
      }),
      button: style({
        background: "none",
        border: "none",
        padding: 7,
        margin: 5,
        font: "inherit",
        $nest: {
          "&:hover": {
            backgroundColor: "rgba(1, 1, 1, 0.1)"
          }
        }
      })
    };
  };
}