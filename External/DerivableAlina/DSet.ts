import * as Alina from "../Alina/alina";
import * as D from "derivable";
import * as DA from "./Index";

export class DSet extends DA.AlinaComponent {
  set<T>(value: T | D.Derivable<T>) {
    if (D.isDerivable(value)) {
      this.root.once(() =>
        (value as D.Derivable<T>).react((val) => {
          this.root.mount(Alina.AlSet).set(val);
        }, { from: this.$initialized, until: this.$disposed })
      );
    } else {
      this.root.mount(Alina.AlSet).set(value as T);
    }
  }
}