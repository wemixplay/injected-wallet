"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wemix_js_1 = require("./wemix.js");
exports.default = wemix_js_1.default;
if (typeof window !== 'undefined') {
    window.Wemix3SDK = wemix_js_1.default;
}
