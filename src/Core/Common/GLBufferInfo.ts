export default class GLBufferInfo {

    public buffer: WebGLBuffer
    public type: GLenum

    constructor(buffer: WebGLBuffer, type: GLenum) {
        this.buffer = buffer
        this.type = type
    }
}