import * as Alina from "../Alina/alina";
import * as D from "derivable";
import * as DC from "./Index";

class DRenderer extends Alina.Renderer implements DC.IMultiNodeRenderer, DC.ISingleNodeRenderer {
  public constructor(bindings: Node[] | Alina.NodeBinding[], parent: Alina.IBaseRenderer) {
    super(bindings, parent);
  }

  public create(nodeOrBinding: Node | Alina.NodeBinding) {
    return new DRenderer([nodeOrBinding] as any, this);
  }

  public createMulti(nodesOrBindings: Node[] | Alina.NodeBinding[]) {
    return new DRenderer(nodesOrBindings, this);
  }

  getSetComponent() {
    return DC.DSet as any;
  }
  getRepeatComponent() {
    return DC.DRepeat as any;
  }
  getShowComponent() {
    return DC.DShow as any;
  }

  on<T>(value: T | D.Derivable<T>, callback: (renderer, value?: T, prevValue?: T) => T | void, key?: string): void {
    if (D.isDerivable(value)) {
      (value as D.Derivable<T>).react((val) => {
        super.on(val, callback);
      });
    } else {
      super.on(value, callback);
    }
  }
}


export function DerivableMulti(renderer: Alina.IMultiNodeRenderer): DC.IMultiNodeRenderer {
  return new DRenderer(renderer.bindings, renderer);
}
export function DerivableSingle(renderer: Alina.ISingleNodeRenderer): DC.ISingleNodeRenderer {
  return new DRenderer(renderer.bindings, renderer);
}
