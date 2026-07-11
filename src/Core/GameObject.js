import Transform from "./Transform.js";
export default class GameObject {
    _programInfo;
    _attributesBuffersInfo;
    _uniformsVecInfo = [];
    _uniformsMatInfo = [];
    _drawMode; // for example, TRIANGLES
    collisionBox = null;
    transform = new Transform();
    countVertices;
    constructor(programInfo, attributesBuffersInfo, drawMode, figureInfo) {
        this._programInfo = programInfo;
        this._attributesBuffersInfo = attributesBuffersInfo;
        this._drawMode = drawMode;
        this.countVertices = figureInfo.countVertices;
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
    getDrawMode() {
        return this._drawMode;
    }
    addUniformVecInfo(uniformVecInfo) {
        this._uniformsVecInfo.push(uniformVecInfo);
    }
    addUniformMatInfo(uniformMatInfo) {
        this._uniformsMatInfo.push(uniformMatInfo);
    }
}
//# sourceMappingURL=GameObject.js.map