import GLUniformInfoArrayBase from "./GLUniformInfoArrayBase.js";

export default class GLUniformVecInfo extends GLUniformInfoArrayBase {
    constructor(
        uniformLocation: WebGLUniformLocation,
        vector: number[]
    ) {
        super(uniformLocation, vector)
    }
}