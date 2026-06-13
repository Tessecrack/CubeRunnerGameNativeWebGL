import Transform from "./Transform.js";
export default class GameObject {
    _programInfo;
    _attributesBuffersInfo;
    _uniformsVecInfo = [];
    _uniformsMatInfo = [];
    _drawMode; // for example, TRIANGLES
    _updateTransformFunction = null;
    transform = new Transform();
    countVertices;
    constructor(programInfo, attributesBuffersInfo, drawMode, countVertices) {
        this._programInfo = programInfo;
        this._attributesBuffersInfo = attributesBuffersInfo;
        this._drawMode = drawMode;
        this.countVertices = countVertices;
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
    setUpdateTransformFunction(updateTransformFunc) {
        this._updateTransformFunction = updateTransformFunc;
    }
    updateTransform(deltaTime) {
        if (this._updateTransformFunction !== null) {
            this._updateTransformFunction(this.transform, deltaTime);
        }
    }
}
//# sourceMappingURL=GameObject.js.map