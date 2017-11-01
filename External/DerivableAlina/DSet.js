System.register(["../Alina/alina", "derivable", "./Index"], function (exports_1, context_1) {
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
    var Alina, D, DA, DSet;
    return {
        setters: [
            function (Alina_1) {
                Alina = Alina_1;
            },
            function (D_1) {
                D = D_1;
            },
            function (DA_1) {
                DA = DA_1;
            }
        ],
        execute: function () {
            DSet = /** @class */ (function (_super) {
                __extends(DSet, _super);
                function DSet() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DSet.prototype.set = function (value) {
                    var _this = this;
                    if (D.isDerivable(value)) {
                        this.root.once(function () {
                            return value.react(function (val) {
                                _this.root.mount(Alina.AlSet).set(val);
                            }, { from: _this.$initialized, until: _this.$disposed });
                        });
                    }
                    else {
                        this.root.mount(Alina.AlSet).set(value);
                    }
                };
                return DSet;
            }(DA.AlinaComponent));
            exports_1("DSet", DSet);
        }
    };
});
