import GLUniformMatInfo from "./Common/GLUniformMatInfo.js";
import MatricesUtils from "./Common/Utils/MatricesUtils.js";
import Transform from "./Transform.js";
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
    _uniformProjectionMatrixInfo = null;
    _uniformViewMatrixInfo = null;
    target;
    transform;
    constructor(fieldOfViewRadians, aspect) {
        this._fieldOfViewRadians = fieldOfViewRadians;
        this._aspect = aspect;
        this.transform = new Transform();
        this.transform.translation = new Vector3(0, 0, 100);
        this.target = new Vector3(0, 0, 0);
        this._projectionMatrix = MatricesUtils.perspective(fieldOfViewRadians, aspect, this._zNear, this._zFar);
        this._cameraMatrix = MatricesUtils.lookAt([this.transform.translation.x, this.transform.translation.y, this.transform.translation.z], [this.target.x, this.target.y, this.target.z], Vector3.up);
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
        if (this.transform.translation.x === cameraPosition.x && this.transform.translation.y === cameraPosition.y && this.transform.translation.z === cameraPosition.z) {
            return;
        }
        this.transform.translation = cameraPosition;
    }
    setCameraTarget(target) {
        if (this.target.x === target.x && this.target.y === target.y && this.target.z === target.z) {
            return;
        }
        this.target = target;
    }
    computeViewMatrix() {
        this._cameraMatrix = MatricesUtils.lookAt([this.transform.translation.x, this.transform.translation.y, this.transform.translation.z], [this.target.x, this.target.y, this.target.z], Vector3.up);
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