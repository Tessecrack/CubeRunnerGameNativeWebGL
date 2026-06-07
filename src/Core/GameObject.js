import Transform from "./Transform.js";
export default class GameObject {
    _programInfo;
    _attributesBuffersInfo;
    transform = new Transform();
    constructor(programInfo, attributesBuffersInfo) {
        this._programInfo = programInfo;
        this._attributesBuffersInfo = attributesBuffersInfo;
    }
    getProgram() {
        return this._programInfo.getProgram();
    }
    getAttributesBuffersInfo() {
        return this._attributesBuffersInfo;
    }
}
//# sourceMappingURL=GameObject.js.map