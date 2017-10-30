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
    var Alina, D, DRepeat;
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
            DRepeat = /** @class */ (function (_super) {
                __extends(DRepeat, _super);
                function DRepeat() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DRepeat.prototype.repeat = function (items, update, options) {
                    var _this = this;
                    if (D.isDerivable(items)) {
                        this.root.once(function () {
                            items.react(function (values) {
                                _this.root.mount(Alina.AlRepeat).repeat(values, update, options);
                            });
                        });
                    }
                    else {
                        this.root.mount(Alina.AlRepeat).repeat(items, update, options);
                    }
                };
                DRepeat.prototype.repeatEx = function (items, context) {
                    var _this = this;
                    if (D.isDerivable(items)) {
                        this.root.once(function () {
                            items.react(function (values) {
                                _this.root.mount(Alina.AlRepeat).repeatEx(values, context);
                            });
                        });
                    }
                    else {
                        this.root.mount(Alina.AlRepeat).repeatEx(items, context);
                    }
                };
                return DRepeat;
            }(Alina.SingleNodeComponent));
            exports_1("DRepeat", DRepeat);
        }
    };
});
