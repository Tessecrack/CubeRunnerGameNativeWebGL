export default class GLAttributeBufferInfo {
    _attribLocation;
    bufferInfo;
    constructor(attribLocation, bufferInfo) {
        this._attribLocation = attribLocation;
        this.bufferInfo = bufferInfo;
    }
    getAttribLocation() {
        return this._attribLocation;
    }
}
//# sourceMappingURL=GLAttributeBufferInfo.js.map