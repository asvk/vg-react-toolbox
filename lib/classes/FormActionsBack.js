"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FormActions_1 = require("./FormActions");
var FormActionsBack = (function (_super) {
    __extends(FormActionsBack, _super);
    function FormActionsBack(back, cancel, finish) {
        _super.call(this, cancel, finish);
        this.back = back;
    }
    return FormActionsBack;
}(FormActions_1["default"]));
exports.__esModule = true;
exports["default"] = FormActionsBack;
