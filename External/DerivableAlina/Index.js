System.register(["./DRepeat", "./DSet", "./DShow", "./DRenderer"], function (exports_1, context_1) {
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
            function (DRepeat_1_1) {
                exportStar_1(DRepeat_1_1);
            },
            function (DSet_1_1) {
                exportStar_1(DSet_1_1);
            },
            function (DShow_1_1) {
                exportStar_1(DShow_1_1);
            },
            function (DRenderer_1_1) {
                exportStar_1(DRenderer_1_1);
            }
        ],
        execute: function () {
        }
    };
});
