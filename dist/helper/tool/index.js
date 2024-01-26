"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneObject = void 0;
var cloneObject = function (obj) {
    var clone = {};
    for (var key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            clone[key] = cloneObject(obj[key]);
        }
        else {
            clone[key] = obj[key];
        }
    }
    return clone;
};
exports.cloneObject = cloneObject;
