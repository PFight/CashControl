(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlTemplate = /** @class */ (function () {
        function AlTemplate() {
        }
        AlTemplate.prototype.initialize = function (context) {
            this.root = context;
        };
        AlTemplate.prototype.appendFrom = function (template) {
            var context = this.root.getContext();
        };
        return AlTemplate;
    }());
    exports.AlTemplate = AlTemplate;
});
