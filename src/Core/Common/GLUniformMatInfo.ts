import GLUniformInfoBase, { type UniformValueArrayFunction } from "./GLUniformInfoBase.js"

export default class GLUniformMatInfo extends GLUniformInfoBase {

    constructor(
        uniformLocation: WebGLUniformLocation,
        matrix: number[]
    ) {
        super(uniformLocation, matrix)
    }
}