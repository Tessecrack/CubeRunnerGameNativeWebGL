import Transform from "./Transform.js";
export default class GameObject {
    _programInfo;
    _attributesBuffersInfo;
    _uniformsVecInfo = [];
    _uniformsMatInfo = [];
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
    getUniformsVecInfo() {
        return this._uniformsVecInfo;
    }
    getUniformsMatInfo() {
        return this._uniformsMatInfo;
    }
    addUniformVecInfo(uniformVecInfo) {
        this._uniformsVecInfo.push(uniformVecInfo);
    }
    addUniformMatInfo(uniformMatInfo) {
        this._uniformsMatInfo.push(uniformMatInfo);
    }
}
//# sourceMappingURL=GameObject.js.map