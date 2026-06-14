import GLUniformMatInfo from "./Common/GLUniformMatInfo.js";
import MatricesUtils from "./Common/Utils/MatricesUtils.js";
import Vector3 from "./Vector3.js";
export default class PerspectiveCamera {
    static defaultFieldOfViewRadians = 60 * Math.PI / 180;
    static nameUniformViewMatrix = `u_viewMatrix`;
    static nameUniformProjectionMatrix = `u_projectionMatrix`;
    _fieldOfViewRadians;
    _aspect;
    _zNear = 1;
    _zFar = 2000;
    _projectionMatrix;
    _viewMatrix;
    _cameraMatrix;
    _cameraPosition;
    _target;
    _uniformProjectionMatrixInfo = null;
    _uniformViewMatrixInfo = null;
    constructor(fieldOfViewRadians, aspect) {
        this._fieldOfViewRadians = fieldOfViewRadians;
        this._aspect = aspect;
        this._cameraPosition = new Vector3(0, 0, 1000);
        this._target = new Vector3(0, 0, 0);
        this._projectionMatrix = MatricesUtils.perspective(fieldOfViewRadians, aspect, this._zNear, this._zFar);
        this._cameraMatrix = MatricesUtils.lookAt([this._cameraPosition.x, this._cameraPosition.y, this._cameraPosition.z], [this._target.x, this._target.y, this._target.z], Vector3.up);
        this._viewMatrix = MatricesUtils.inverse(this._cameraMatrix);
    }
    updatePerspective(fieldOfViewRadians, aspect, zNear = 1, zFar = 2000) {
        this._fieldOfViewRadians = fieldOfViewRadians;
        this._aspect = aspect;
        this._zNear = zNear;
        this._zFar = zFar;
        if (this._fieldOfViewRadians === fieldOfViewRadians && this._aspect === aspect && this._zNear === zNear && this._zFar === zFar) {
            return;
        }
        this._projectionMatrix = MatricesUtils.perspective(fieldOfViewRadians, aspect, zNear, zFar);
        if (this._uniformProjectionMatrixInfo !== null) {
            this._uniformProjectionMatrixInfo.value = this._projectionMatrix;
        }
    }
    setCameraPosition(cameraPosition) {
        if (this._cameraPosition.x === cameraPosition.x && this._cameraPosition.y === cameraPosition.y && this._cameraPosition.z === cameraPosition.z) {
            return;
        }
        this._cameraPosition = cameraPosition;
    }
    setCameraTarget(target) {
        if (this._target.x === target.x && this._target.y === target.y && this._target.z === target.z) {
            return;
        }
        this._target = target;
    }
    computeViewMatrix() {
        this._cameraMatrix = MatricesUtils.lookAt([this._cameraPosition.x, this._cameraPosition.y, this._cameraPosition.z], [this._target.x, this._target.y, this._target.z], Vector3.up);
        this._viewMatrix = MatricesUtils.inverse(this._cameraMatrix);
        if (this._uniformViewMatrixInfo !== null) {
            this._uniformViewMatrixInfo.value = this._viewMatrix;
        }
    }
    getViewMatrix() {
        return this._viewMatrix;
    }
    getProjectionMatrix() {
        return this._projectionMatrix;
    }
    setUniformLocationViewMatrix(uniformViewMatrixLocation) {
        if (this._uniformViewMatrixInfo === null) {
            this._uniformViewMatrixInfo = new GLUniformMatInfo(uniformViewMatrixLocation, this._viewMatrix);
        }
        else {
            this._uniformViewMatrixInfo.uniformLocation = uniformViewMatrixLocation;
        }
    }
    setUniformProjectionMatrix(uniformProjectionMatrixInfo) {
        if (this._uniformProjectionMatrixInfo === null) {
            this._uniformProjectionMatrixInfo = new GLUniformMatInfo(uniformProjectionMatrixInfo, this._projectionMatrix);
        }
        else {
            this._uniformProjectionMatrixInfo.uniformLocation = uniformProjectionMatrixInfo;
        }
    }
    getUniformViewMatrixInfo() {
        return this._uniformViewMatrixInfo;
    }
    getUniformProjectionMatrixInfo() {
        return this._uniformProjectionMatrixInfo;
    }
}
//# sourceMappingURL=PerspectiveCamera.js.map