import Vector3 from "./Vector3.js";
export default class PerspectiveCamera {
    private _fieldOfViewRadians;
    private _aspect;
    private _zNear;
    private _zFar;
    private _projectionMatrix;
    private _viewMatrix;
    private _cameraMatrix;
    private _cameraPosition;
    private _target;
    private _uniformProjectionMatInfo;
    private _uniformViewMatInfo;
    constructor(fieldOfViewRadians: number, aspect: number);
    updatePerspective(fieldOfViewRadians: number, aspect: number, zNear?: number, zFar?: number): void;
    setCameraPosition(cameraPosition: Vector3): void;
    setCameraTarget(target: Vector3): void;
    computeViewMatrix(): void;
}
//# sourceMappingURL=PerspectiveCamera.d.ts.map