import GLUniformInfoBase from "./GLUniformInfoBase.js";

export default class GLUniformVecInfo extends GLUniformInfoBase {
    constructor(
        uniformLocation: WebGLUniformLocation,
        vector: number[]
    ) {
        super(uniformLocation, vector)
    }
}