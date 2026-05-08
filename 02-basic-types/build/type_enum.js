"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
var StatusPermision;
(function (StatusPermision) {
    StatusPermision[StatusPermision["ADMIM"] = 0] = "ADMIM";
    StatusPermision[StatusPermision["USER"] = 1] = "USER";
    StatusPermision[StatusPermision["STATUS"] = 2] = "STATUS";
})(StatusPermision || (StatusPermision = {}));
console.log(StatusPermision.USER);
