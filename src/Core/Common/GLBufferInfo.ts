export default class GLBufferInfo {

    public target: GLenum // for example: ARRAY_BUFFER

    public usage: GLenum // for example: STATIC_DRAW or DYNAMIC_DRAW

    public buffer: WebGLBuffer

    constructor(
        target: GLenum,
        usage: GLenum,
        buffer: WebGLBuffer) {
        this.target = target
        this.usage = usage
        this.buffer = buffer
    }
}