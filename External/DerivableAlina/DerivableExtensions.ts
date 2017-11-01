﻿import * as Alina from "../Alina/alina";
import * as D from "derivable";
import * as DA from "./Index";

export interface DerivableExtensions {
  set<T>(stub: string, value: T | D.Derivable<T>): void;
  showIf(templateSelector: string, value: boolean | D.Derivable<boolean>): void;
  repeat<T>(templateSelector: string, items: T[] | D.Derivable<T[]>, update: (renderer: this, model: T) => void): void;
  on<T>(value: T | D.Derivable<T>, callback: (renderer: this, value?: T, prevValue?: T) => T | void, key?: string): void;
}

export function DerivableExt<T extends Alina.Alina>(renderer: T): T & DerivableExtensions {
  let result = renderer as T & DerivableExtensions;
  result.set = set;
  result.showIf = showIf;
  result.repeat = repeat;
  standardOn = result.on;
  result.on = on;
  return result;
}

var standardOn: Function;

function on<T>(this: Alina.Alina, value: T | D.Derivable<T>, callback: (renderer, value?: T, prevValue?: T) => T | void, key?: string): void {
  if (D.isDerivable(value)) {
    (value as D.Derivable<T>).react((val) => {
      standardOn.call(this, val, callback);
    });
  } else {
    standardOn.call(this, value, callback);
  }
}

function set<T>(this: Alina.NodeContext, stub: string, value: T | D.Derivable<T>): void {
  this.mount(Alina.AlEntry).getEntries(stub, (context) => {
    context.mount(DA.DSet).set(value);
  });
}

function repeat<T>(this: Alina.NodeContext, templateSelector: string, items: T[] | D.Derivable<T[]>, update: (renderer, model: T) => void): void {
  this.mount(Alina.AlQuery).query(templateSelector)
    .mount(DA.DRepeat).repeat(items, update);
}

function showIf(this: Alina.NodeContext, templateSelector: string, value: boolean | D.Derivable<boolean>): void {
  this.mount(Alina.AlQuery).query(templateSelector)
    .mount(DA.DShow).showIf(value);
}