﻿import * as Alina from "../Alina/alina";
import * as D from "derivable";
import * as DA from "./Index";

export class DShow extends DA.AlinaComponent {
  showIf(value: boolean | D.Derivable<boolean>) {
    if (D.isDerivable(value)) {
      this.root.once(() =>
        (value as D.Derivable<boolean>).react((val) => {
          this.root.mount(Alina.AlShow).showIf(val);
        }, { from: this.$initialized, until: this.$disposed })
      );
    } else {
      this.root.mount(Alina.AlShow).showIf(value as boolean);
    }
  }
}