import * as Alina from "../Alina/alina";
import * as D from "derivable";

export class DSet extends Alina.AlinaComponent {
  set<T>(value: T | D.Derivable<T>) {
    if (D.isDerivable(value)) {
      this.root.once(() =>
        (value as D.Derivable<T>).react((val) => {
          this.root.mount(Alina.AlSet).set(val);
        })
      );
    } else {
      this.root.mount(Alina.AlSet).set(value as T);
    }
  }
}