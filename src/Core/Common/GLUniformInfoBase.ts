export default abstract class GLUniformInfoBase {

    protected _uniformLocation: WebGLUniformLocation
    public value: number[]

    constructor(
        uniformLocation: WebGLUniformLocation, 
        value: number[]) {
            this._uniformLocation = uniformLocation
            this.value = value
    }

    public getUniformLocation() {
        return this._uniformLocation
    }
}