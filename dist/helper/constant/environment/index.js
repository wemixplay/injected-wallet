"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV_CONFIG = void 0;
var localConfig_1 = require("./localConfig");
var alphaConfig_1 = require("./alphaConfig");
var devConfig_1 = require("./devConfig");
var stgConfig_1 = require("./stgConfig");
var prodConfig_1 = require("./prodConfig");
var Configs = {
    local: localConfig_1.localConfig,
    alpha: alphaConfig_1.alphaConfig,
    dev: devConfig_1.devConfig,
    stg: stgConfig_1.stgConfig,
    prod: prodConfig_1.prodConfig
};
var ENV_CONFIG = function (env) { return Object.freeze(Configs[env]); };
exports.ENV_CONFIG = ENV_CONFIG;
