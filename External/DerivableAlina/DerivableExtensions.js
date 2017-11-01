System.register(["../Alina/alina", "derivable", "./Index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function DerivableExt(renderer) {
        var result = renderer;
        result.set = set;
        result.showIf = showIf;
        result.repeat = repeat;
        standardOn = result.on;
        result.on = on;
        return result;
    }
    exports_1("DerivableExt", DerivableExt);
    function on(value, callback, key) {
        var _this = this;
        if (D.isDerivable(value)) {
            value.react(function (val) {
                standardOn.call(_this, val, callback);
            });
        }
        else {
            standardOn.call(this, value, callback);
        }
    }
    function set(stub, value) {
        this.mount(Alina.AlEntry).getEntries(stub, function (context) {
            context.mount(DA.DSet).set(value);
        });
    }
    function repeat(templateSelector, items, update) {
        this.mount(Alina.AlQuery).query(templateSelector)
            .mount(DA.DRepeat).repeat(items, update);
    }
    function showIf(templateSelector, value) {
        this.mount(Alina.AlQuery).query(templateSelector)
            .mount(DA.DShow).showIf(value);
    }
    var Alina, D, DA, standardOn;
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
        }
    };
});