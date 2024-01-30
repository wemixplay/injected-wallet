import { localConfig } from './localConfig';
import { alphaConfig } from './alphaConfig';
import { devConfig } from './devConfig';
import { stgConfig } from './stgConfig';
import { prodConfig } from './prodConfig';
var Configs = {
    local: localConfig,
    alpha: alphaConfig,
    dev: devConfig,
    stg: stgConfig,
    prod: prodConfig
};
var ENV_CONFIG = function (env) { return Object.freeze(Configs[env]); };
export { ENV_CONFIG };
