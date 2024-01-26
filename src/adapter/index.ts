import { ProviderRpcError, ProviderRpcErrorCode } from '@web3-onboard/common';
import { PlayWalletPlugin } from './plugin/playWalletPlugin';
import { RequestPlugin } from './plugin/requestPlugin';

type PluginInstance = RequestPlugin | PlayWalletPlugin;

class Adapter {
  private _instanceMap: Map<PluginInstance, (args: any) => Promise<any>> = new Map();
  private _memoFuncMap = new Map();

  constructor(instances: Array<PluginInstance>) {
    for (const instance of instances) {
      this.addOn(instance);
    }
  }

  async request(args: any) {
    const memoKey = args?.method;
    if (this._memoFuncMap.get(memoKey)) {
      return this._memoFuncMap.get(memoKey)(args);
    }

    for (const func of Array.from(this._instanceMap.values())) {
      const result = await func(args);

      if (result === null) {
        continue;
      }

      this._memoFuncMap.set(memoKey, func);
      return result;
    }

    throw new ProviderRpcError({
      code: ProviderRpcErrorCode.UNSUPPORTED_METHOD,
      message: 'Method not implemented.'
    });
  }

  addOn(instance: PluginInstance) {
    this._instanceMap.set(instance, instance.request.bind(instance));
  }
}

export default Adapter;
