import GLUniformInfoArrayBase, { type UniformValueArrayFunction } from "./GLUniformInfoArrayBase.js"

export default class GLUniformMatInfo extends GLUniformInfoArrayBase {

    constructor(
        uniformLocation: WebGLUniformLocation,
        matrix: number[]
    ) {
        super(uniformLocation, matrix)
    }
}