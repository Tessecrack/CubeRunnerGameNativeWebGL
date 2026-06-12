export default class GLLinkedAttributesToBuffer {
    _attributesInfo = [];
    bufferInfo;
    constructor(target, bufferInfo) {
        this.bufferInfo = bufferInfo;
    }
    addAttributeInfo(attributeInfo) {
        this._attributesInfo.push(attributeInfo);
    }
    getAttributesInfo() {
        return this._attributesInfo;
    }
}
//# sourceMappingURL=GLLinkedAttributesToBuffer.js.map