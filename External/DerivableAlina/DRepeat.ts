import * as Alina from "../Alina/alina";
import * as D from "derivable";

export class DRepeat extends Alina.SingleNodeComponent {
  repeat<T>(items: T[] | D.Derivable<T[]>, update: (renderer: Alina.Renderer, model: T) => void, options?: Alina.RepeatExtraOptions<T>) {
    if (D.isDerivable(items)) {
      this.root.once(() => {
        (items as D.Derivable<T[]>).react((values: T[]) => {
          this.root.mount(Alina.AlRepeat).repeat(values, update, options);
        });
      });
    } else {
      this.root.mount(Alina.AlRepeat).repeat(items as T[], update, options);
    }
  }

  repeatEx<T>(items: T[] | D.Derivable<T[]>, context: Alina.AlRepeatContext<T>) {
    if (D.isDerivable(items)) {
      this.root.once(() => {
        (items as D.Derivable<T[]>).react((values: T[]) => {
          this.root.mount(Alina.AlRepeat).repeatEx(values, context);
        });
      });
    } else {
      this.root.mount(Alina.AlRepeat).repeatEx(items as T[], context);
    }
  }
}