export type UniformValueArrayFunction = (uniformValue: number[]) => number[];
export default abstract class GLUniformInfoBase {
    protected _uniformLocation: WebGLUniformLocation;
    value: number[];
    private _updateValueArrayFunc;
    constructor(uniformLocation: WebGLUniformLocation, value: number[]);
    getUniformLocation(): WebGLUniformLocation;
    setUpdateValueFunc(updateValueArrayFunc: UniformValueArrayFunction): void;
    updateValue(): void;
}
//# sourceMappingURL=GLUniformInfoBase.d.ts.map