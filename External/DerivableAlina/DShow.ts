import * as Alina from "../Alina/alina";
import * as D from "derivable";

export class DShow extends Alina.MultiNodeComponent {
  showIf(value: boolean | D.Derivable<boolean>) {
    if (D.isDerivable(value)) {
      this.root.once(() =>
        (value as D.Derivable<boolean>).react((val) => {
          this.root.mount(Alina.AlShow).showIf(val);
        })
      );
    } else {
      this.root.mount(Alina.AlShow).showIf(value as boolean);
    }
  }
}