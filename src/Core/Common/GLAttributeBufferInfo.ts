import type GLBufferInfo from "./GLBufferInfo.js"

export default class GLAttributeBufferInfo {
    protected _attribLocation: number

    public bufferInfo: GLBufferInfo

    constructor(
        attribLocation: number,
        bufferInfo: GLBufferInfo) {
        this._attribLocation = attribLocation
        this.bufferInfo = bufferInfo
    }

    public getAttribLocation() {
        return this._attribLocation
    }
}