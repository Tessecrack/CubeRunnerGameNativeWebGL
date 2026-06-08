import type GLAttributeInfo from "./GLAttributeInfo.js"
import type GLBufferInfo from "./GLBufferInfo.js"

export default class GLAttributesBufferInfo {

    protected _attributesInfo: GLAttributeInfo[] = []

    public bufferInfo: GLBufferInfo

    constructor(
        target: GLenum,
        bufferInfo: GLBufferInfo) {
        this.bufferInfo = bufferInfo
    }

    public addAttributesInfo(attributeInfo: GLAttributeInfo) {
        this._attributesInfo.push(attributeInfo)
    }

    public getAttributesInfo() {
        return this._attributesInfo
    }
}