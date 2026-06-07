export default class GLUniformInfoBase {
    _uniformLocation;
    value;
    constructor(uniformLocation, value) {
        this._uniformLocation = uniformLocation;
        this.value = value;
    }
    getUniformLocation() {
        return this._uniformLocation;
    }
}
//# sourceMappingURL=GLUniformInfoBase.js.map