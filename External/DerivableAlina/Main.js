System.register(["../Alina/alina", "./Index"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var Alina, DA, AlinaComponent, Document;
    return {
        setters: [
            function (Alina_1) {
                Alina = Alina_1;
            },
            function (DA_1) {
                DA = DA_1;
            }
        ],
        execute: function () {
            AlinaComponent = /** @class */ (function (_super) {
                __extends(AlinaComponent, _super);
                function AlinaComponent() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return AlinaComponent;
            }(Alina.Component));
            exports_1("AlinaComponent", AlinaComponent);
            ;
            exports_1("Document", Document = Alina.Document.ext(DA.DerivableExt));
        }
    };
});
