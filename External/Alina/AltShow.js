(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Alina = require("./Index");
    var AltShow = /** @class */ (function () {
        function AltShow() {
            this.nodes = [];
        }
        AltShow.prototype.initialize = function (context) {
            this.root = context;
        };
        AltShow.prototype.showIf = function (value) {
            if (this.lastValue !== value) {
                for (var i = 0; i < this.root.bindings.length; i++) {
                    var templateElem = this.root.bindings[i].node;
                    var node = this.nodes[i];
                    if (value) {
                        if (!node) {
                            node = this.nodes[i] = Alina.fromTemplate(templateElem);
                        }
                        if (!node.parentElement) {
                            templateElem.parentElement.insertBefore(node, templateElem);
                        }
                    }
                    else {
                        if (node && node.parentElement) {
                            node.parentElement.removeChild(node);
                        }
                    }
                }
                this.lastValue = value;
            }
        };
        return AltShow;
    }());
    exports.AltShow = AltShow;
});
