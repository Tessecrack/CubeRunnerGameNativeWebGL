export default class GLUniformInfoBase {
    _uniformLocation;
    value;
    _updateValueArrayFunc = null;
    constructor(uniformLocation, value) {
        this._uniformLocation = uniformLocation;
        this.value = value;
    }
    getUniformLocation() {
        return this._uniformLocation;
    }
    setUpdateValueFunc(updateValueArrayFunc) {
        this._updateValueArrayFunc = updateValueArrayFunc;
    }
    updateValue() {
        if (this._updateValueArrayFunc !== null) {
            this.value = this._updateValueArrayFunc(this.value);
        }
    }
}
//# sourceMappingURL=GLUniformInfoBase.js.map