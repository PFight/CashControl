System.register(["../Alina/alina", "derivable"], function (exports_1, context_1) {
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
    var Alina, D, DShow;
    return {
        setters: [
            function (Alina_1) {
                Alina = Alina_1;
            },
            function (D_1) {
                D = D_1;
            }
        ],
        execute: function () {
            DShow = /** @class */ (function (_super) {
                __extends(DShow, _super);
                function DShow() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DShow.prototype.showIf = function (value) {
                    var _this = this;
                    if (D.isDerivable(value)) {
                        this.root.once(function () {
                            return value.react(function (val) {
                                _this.root.mount(Alina.AlShow).showIf(val);
                            });
                        });
                    }
                    else {
                        this.root.mount(Alina.AlShow).showIf(value);
                    }
                };
                return DShow;
            }(Alina.AlinaComponent));
            exports_1("DShow", DShow);
        }
    };
});
