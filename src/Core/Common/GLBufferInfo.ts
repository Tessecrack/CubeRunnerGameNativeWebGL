export default class GLBufferInfo {

    public target: GLenum

    public buffer: WebGLBuffer

    constructor(
        target: GLenum,
        buffer: WebGLBuffer) {
        this.target = target
        this.buffer = buffer
    }
}