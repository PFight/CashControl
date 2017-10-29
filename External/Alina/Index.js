System.register(["./Alina", "./AlRepeat", "./AlSet", "./AlShow", "./AlTemplate"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (Alina_1_1) {
                exportStar_1(Alina_1_1);
            },
            function (AlRepeat_1_1) {
                exportStar_1(AlRepeat_1_1);
            },
            function (AlSet_1_1) {
                exportStar_1(AlSet_1_1);
            },
            function (AlShow_1_1) {
                exportStar_1(AlShow_1_1);
            },
            function (AlTemplate_1_1) {
                exportStar_1(AlTemplate_1_1);
            }
        ],
        execute: function () {
        }
    };
});
