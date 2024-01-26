import { localConfig } from './localConfig';
import { alphaConfig } from './alphaConfig';
import { devConfig } from './devConfig';
import { stgConfig } from './stgConfig';
import { prodConfig } from './prodConfig';

const Configs = {
  local: localConfig,
  alpha: alphaConfig,
  dev: devConfig,
  stg: stgConfig,
  prod: prodConfig
};

const ENV_CONFIG = (env: string) => Object.freeze(Configs[env]);

export { ENV_CONFIG };
