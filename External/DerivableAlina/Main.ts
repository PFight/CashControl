import * as Alina from "../Alina/alina";
import * as DA from "./Index";


export type Alina = Alina.Alina & DA.DerivableExtensions;
export class AlinaComponent extends Alina.Component<Alina> { };
export type FuncAlinaComponent<PropsT, RetT> = Alina.FuncComponent<Alina, PropsT, RetT>;

export var Document: Alina = Alina.Document.ext(DA.DerivableExt);