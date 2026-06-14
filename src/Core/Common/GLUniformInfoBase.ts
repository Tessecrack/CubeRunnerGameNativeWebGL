export default abstract class GLUniformInfoBase {
    public uniformLocation: WebGLUniformLocation

    constructor(uniformLocation: WebGLUniformLocation) {
        this.uniformLocation = uniformLocation
    }
}