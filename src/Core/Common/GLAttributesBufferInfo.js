export default class GLAttributesBufferInfo {
    _attributesInfo = [];
    bufferInfo;
    constructor(target, bufferInfo) {
        this.bufferInfo = bufferInfo;
    }
    addAttributesInfo(attributeInfo) {
        this._attributesInfo.push(attributeInfo);
    }
    getAttributesInfo() {
        return this._attributesInfo;
    }
}
//# sourceMappingURL=GLAttributesBufferInfo.js.map