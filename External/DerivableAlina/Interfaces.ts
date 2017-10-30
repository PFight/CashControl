import * as Alina from "../Alina/alina";
import * as D from "derivable";

export interface IBaseRenderer {
  create(nodeOrBindings: Node | Alina.NodeBinding): ISingleNodeRenderer;
  createMulti(nodesOrBindings: Node[] | Alina.NodeBinding[]): IMultiNodeRenderer;
  readonly parent: Alina.IBaseRenderer;
  binding: Alina.NodeBinding;
  getContext<T>(key: string, createContext?: () => T): T;
  query(selector: string): ISingleNodeRenderer;
  queryAll(selector: string): IMultiNodeRenderer;
  getEntries(entry: string): IMultiNodeRenderer;
  getEntry(entry: string): ISingleNodeRenderer;
  findNode(entry: string): ISingleNodeRenderer;
  findNodes(entry: string): IMultiNodeRenderer;
  set<T>(stub: string, value: T | D.Derivable<T>): void;
  showIf(templateSelector: string, value: boolean | D.Derivable<boolean>): void;
  tpl(key?: string): ITemplateProcessor;
}

export interface IMultiNodeRenderer extends IBaseRenderer {
  nodes: Node[];
  bindings: Alina.NodeBinding[];
  mount<ComponentT extends Alina.IMultiNodeComponent>(
    componentCtor: Alina.ComponentConstructor<ComponentT>,
    key?: string): ComponentT;
  call<PropsT, RetT>(
    component: Alina.FuncMultiNodeComponent<PropsT, RetT>,
    props: PropsT,
    key?: string): RetT;

  on<T>(value: T | D.Derivable<T>, callback: (renderer: IMultiNodeRenderer, value?: T, prevValue?: T) => T | void, key?: string): void;
  once(callback: (renderer: IMultiNodeRenderer) => void): void;
  repeat<T>(templateSelector: string, items: T[] | D.Derivable<T[]>, update: (renderer: IMultiNodeRenderer, model: T) => void): void;
  ext<T>(extension: (renderer: IMultiNodeRenderer) => T): T;
}

export interface ISingleNodeRenderer extends IBaseRenderer {
  elem: HTMLElement;
  node: Node;
  binding: Alina.NodeBinding;
  nodeAs<T extends Node>(): T;
  mount<ComponentT extends Alina.ISingleNodeComponent>(
    componentCtor: Alina.ComponentConstructor<ComponentT>,
    key?: string): ComponentT;
  mount<ComponentT extends Alina.IMultiNodeComponent>(
    componentCtor: Alina.ComponentConstructor<ComponentT>,
    key?: string): ComponentT;

  call<PropsT, RetT>(
    component: Alina.FuncMultiNodeComponent<PropsT, RetT>,
    props: PropsT,
    key?: string): RetT;
  call<PropsT, RetT>(
    component: Alina.FuncSingleNodeComponent<PropsT, RetT>,
    props: PropsT,
    key?: string): RetT;

  on<T>(value: T | D.Derivable<T>, callback: (renderer: ISingleNodeRenderer, value?: T, prevValue?: T) => T | void, key?: string): void;
  once(callback: (renderer: ISingleNodeRenderer) => void): void;
  repeat<T>(templateSelector: string, items: T[] | D.Derivable<T[]>, update: (renderer: ISingleNodeRenderer, model: T) => void): void;
  ext<T>(extension: (renderer: ISingleNodeRenderer) => T): T;
}

export interface ITemplateProcessor {
  appendChildren<T>(template: HTMLTemplateElement, render: (renderer: IMultiNodeRenderer) => T | void): T | void;
  appendChild<T>(template: HTMLTemplateElement, render: (renderer: ISingleNodeRenderer) => T | void): T | void;
  replaceChildren<T>(template: HTMLTemplateElement, render: (renderer: IMultiNodeRenderer) => T | void): T | void;
  replaceChild<T>(template: HTMLTemplateElement, render: (renderer: ISingleNodeRenderer) => T | void): T | void;
  replace<T>(template: HTMLTemplateElement, render: (renderer: ISingleNodeRenderer) => T | void): T | void;
}