import GLUniformInfoBase from "./GLUniformInfoBase.js";
export default class GLUniformInfoArrayBase extends GLUniformInfoBase {
    value;
    _updateValueArrayFunc = null;
    constructor(uniformLocation, value) {
        super(uniformLocation);
        this.value = value;
    }
    getUniformLocation() {
        return this.uniformLocation;
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
//# sourceMappingURL=GLUniformInfoArrayBase.js.map