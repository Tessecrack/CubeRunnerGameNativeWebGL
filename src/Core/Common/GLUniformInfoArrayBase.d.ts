import GLUniformInfoBase from "./GLUniformInfoBase.js";
export type UniformValueArrayFunction = (uniformValue: number[]) => number[];
export default abstract class GLUniformInfoArrayBase extends GLUniformInfoBase {
    value: number[];
    private _updateValueArrayFunc;
    constructor(uniformLocation: WebGLUniformLocation, value: number[]);
    getUniformLocation(): WebGLUniformLocation;
    setUpdateValueFunc(updateValueArrayFunc: UniformValueArrayFunction): void;
    updateValue(): void;
}
//# sourceMappingURL=GLUniformInfoArrayBase.d.ts.map