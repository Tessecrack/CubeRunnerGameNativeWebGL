import Vector3 from "./Vector3.js";
export type UpdateCameraFunction = (vector: Vector3, deltaTime: number) => void;
export default class PerspectiveCamera {
    private _fieldOfViewRadians;
    private _aspect;
    private _zNear;
    private _zFar;
    private _projectionMatrix;
    private _viewProjectionMatrix;
    private _cameraMatrix;
    private _cameraPosition;
    private _target;
    private _updateCameraPositionFunction;
    private _updateCameraTargetFunction;
    constructor(fieldOfViewRadians: number, aspect: number);
    updatePerspective(fieldOfViewRadians: number, aspect: number, zNear?: number, zFar?: number): void;
    getViewProjectionMatrix(): number[];
    setCameraPosition(cameraPosition: Vector3): void;
    setCameraTarget(target: Vector3): void;
    updateCameraPosition(deltaTime: number): void;
    updateCameraTarget(deltaTime: number): void;
    setCameraPositionFunction(updateCameraPosition: UpdateCameraFunction): void;
    setCameraTargetFunction(updateCameraTarget: UpdateCameraFunction): void;
    computeViewProjectionMatrix(): void;
}
//# sourceMappingURL=PerspectiveCamera.d.ts.map