export type UniformValueArrayFunction = (uniformValue: number[]) => number[]

export default abstract class GLUniformInfoBase {

    protected _uniformLocation: WebGLUniformLocation
    public value: number[]

    private _updateValueArrayFunc: UniformValueArrayFunction | null = null

    constructor(
        uniformLocation: WebGLUniformLocation, 
        value: number[]) {
            this._uniformLocation = uniformLocation
            this.value = value
    }

    public getUniformLocation() {
        return this._uniformLocation
    }

    public setUpdateValueFunc(updateValueArrayFunc: UniformValueArrayFunction) {
        this._updateValueArrayFunc = updateValueArrayFunc
    }

    public updateValue() {
        if (this._updateValueArrayFunc !== null) {
            this.value = this._updateValueArrayFunc(this.value)
        }
    }
}