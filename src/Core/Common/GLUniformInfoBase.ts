export default abstract class GLUniformInfoBase {
    protected _uniformLocation: WebGLUniformLocation

    constructor(uniformLocation: WebGLUniformLocation) {
        this._uniformLocation = uniformLocation
    }
}