System.register(["./Index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Alina, AlShow;
    return {
        setters: [
            function (Alina_1) {
                Alina = Alina_1;
            }
        ],
        execute: function () {
            AlShow = /** @class */ (function () {
                function AlShow() {
                    this.nodes = [];
                }
                AlShow.prototype.initialize = function (context) {
                    this.root = context;
                };
                AlShow.prototype.showIf = function (value) {
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
                return AlShow;
            }());
            exports_1("AlShow", AlShow);
        }
    };
});
