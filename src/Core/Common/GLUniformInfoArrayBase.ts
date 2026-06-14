import GLUniformInfoBase from "./GLUniformInfoBase.js"

export type UniformValueArrayFunction = (uniformValue: number[]) => number[]

export default abstract class GLUniformInfoArrayBase extends GLUniformInfoBase {

    public value: number[]

    private _updateValueArrayFunc: UniformValueArrayFunction | null = null

    constructor(
        uniformLocation: WebGLUniformLocation, 
        value: number[]) {
            super(uniformLocation)            
            this.value = value
    }

    public getUniformLocation() {
        return this.uniformLocation
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