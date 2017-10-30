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
    function DerivableMulti(renderer) {
        return new DRenderer(renderer.bindings, renderer);
    }
    exports_1("DerivableMulti", DerivableMulti);
    function DerivableSingle(renderer) {
        return new DRenderer(renderer.bindings, renderer);
    }
    exports_1("DerivableSingle", DerivableSingle);
    var Alina, D, DC, DRenderer;
    return {
        setters: [
            function (Alina_1) {
                Alina = Alina_1;
            },
            function (D_1) {
                D = D_1;
            },
            function (DC_1) {
                DC = DC_1;
            }
        ],
        execute: function () {
            DRenderer = /** @class */ (function (_super) {
                __extends(DRenderer, _super);
                function DRenderer(bindings, parent) {
                    return _super.call(this, bindings, parent) || this;
                }
                DRenderer.prototype.create = function (nodeOrBinding) {
                    return new DRenderer([nodeOrBinding], this);
                };
                DRenderer.prototype.createMulti = function (nodesOrBindings) {
                    return new DRenderer(nodesOrBindings, this);
                };
                DRenderer.prototype.getSetComponent = function () {
                    return DC.DSet;
                };
                DRenderer.prototype.getRepeatComponent = function () {
                    return DC.DRepeat;
                };
                DRenderer.prototype.getShowComponent = function () {
                    return DC.DShow;
                };
                DRenderer.prototype.on = function (value, callback, key) {
                    var _this = this;
                    if (D.isDerivable(value)) {
                        value.react(function (val) {
                            _super.prototype.on.call(_this, val, callback);
                        });
                    }
                    else {
                        _super.prototype.on.call(this, value, callback);
                    }
                };
                return DRenderer;
            }(Alina.Renderer));
        }
    };
});
