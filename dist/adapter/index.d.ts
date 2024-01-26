import { PlayWalletPlugin } from './plugin/playWalletPlugin';
import { RequestPlugin } from './plugin/requestPlugin';
type PluginInstance = RequestPlugin | PlayWalletPlugin;
declare class Adapter {
    private _instanceMap;
    private _memoFuncMap;
    constructor(instances: Array<PluginInstance>);
    request(args: any): Promise<any>;
    addOn(instance: PluginInstance): void;
}
export default Adapter;
