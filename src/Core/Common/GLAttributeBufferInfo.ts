export default class GLAttributeBufferInfo {
    protected _attribLocation: number
    public buffer: WebGLBuffer

    constructor(
        attribLocation: number,
        buffer: WebGLBuffer) {
        this._attribLocation = attribLocation
        this.buffer = buffer
    }

    public getAttribLocation() {
        return this._attribLocation
    }
}