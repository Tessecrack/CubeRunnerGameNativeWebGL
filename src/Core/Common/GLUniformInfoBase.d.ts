export default abstract class GLUniformInfoBase {
    protected _uniformLocation: WebGLUniformLocation;
    value: number[];
    constructor(uniformLocation: WebGLUniformLocation, value: number[]);
    getUniformLocation(): WebGLUniformLocation;
}
//# sourceMappingURL=GLUniformInfoBase.d.ts.map