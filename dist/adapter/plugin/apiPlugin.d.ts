declare class ApiPlugin {
    private _apiService;
    constructor();
    request({ method, params }: {
        method: any;
        params: any;
    }): Promise<any>;
}
export { ApiPlugin };
