import MatricesUtils from "./Common/Utils/MatricesUtils.js";
import Vector3 from "./Vector3.js";
export default class PerspectiveCamera {
    _fieldOfViewRadians;
    _aspect;
    _zNear = 1;
    _zFar = 2000;
    _projectionMatrix;
    _viewProjectionMatrix;
    _cameraMatrix;
    _cameraPosition;
    _target;
    constructor(fieldOfViewRadians, aspect) {
        this._fieldOfViewRadians = fieldOfViewRadians;
        this._aspect = aspect;
        this._projectionMatrix = MatricesUtils.perspective(fieldOfViewRadians, aspect, this._zNear, this._zFar);
        this._cameraPosition = new Vector3(0, 0, 100);
        this._target = new Vector3(0, 0, 0);
        this._cameraMatrix = MatricesUtils.lookAt([this._cameraPosition.x, this._cameraPosition.y, this._cameraPosition.z], [this._target.x, this._target.y, this._target.z], Vector3.up);
        const viewMatrix = MatricesUtils.inverse(this._cameraMatrix);
        this._viewProjectionMatrix = MatricesUtils.multiply(this._projectionMatrix, viewMatrix);
    }
    updatePerspective(fieldOfViewRadians, aspect, zNear = 1, zFar = 2000) {
        this._fieldOfViewRadians = fieldOfViewRadians;
        this._aspect = aspect;
        this._zNear = zNear;
        this._zFar = zFar;
        this._projectionMatrix = MatricesUtils.perspective(fieldOfViewRadians, aspect, zNear, zFar);
        this.computeViewProjectionMatrix();
    }
    getViewProjectionMatrix() {
        return this._viewProjectionMatrix;
    }
    setCameraPosition(cameraPosition) {
        if (this._cameraPosition.x === cameraPosition.x && this._cameraPosition.y === cameraPosition.y && this._cameraPosition.z === cameraPosition.z) {
            return;
        }
        this._cameraPosition = cameraPosition;
        this.computeViewProjectionMatrix();
    }
    setCameraTarget(target) {
        if (this._target.x === target.x && this._target.y === target.y && this._target.z === target.z) {
            return;
        }
        this._target = target;
        this.computeViewProjectionMatrix();
    }
    computeViewProjectionMatrix() {
        this._cameraMatrix = MatricesUtils.lookAt([this._cameraPosition.x, this._cameraPosition.y, this._cameraPosition.z], [this._target.x, this._target.y, this._target.z], Vector3.up);
        const viewMatrix = MatricesUtils.inverse(this._cameraMatrix);
        this._viewProjectionMatrix = MatricesUtils.multiply(this._projectionMatrix, viewMatrix);
    }
}
//# sourceMappingURL=PerspectiveCamera.js.map