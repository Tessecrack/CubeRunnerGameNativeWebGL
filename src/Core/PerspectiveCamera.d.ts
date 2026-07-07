import GLUniformMatInfo from "./Common/GLUniformMatInfo.js";
import Transform from "./Transform.js";
import Vector3 from "./Vector3.js";
export default class PerspectiveCamera {
    static defaultFieldOfViewRadians: number;
    static nameUniformViewMatrix: string;
    static nameUniformProjectionMatrix: string;
    private _fieldOfViewRadians;
    private _aspect;
    private _zNear;
    private _zFar;
    private _projectionMatrix;
    private _viewMatrix;
    private _cameraMatrix;
    private _uniformProjectionMatrixInfo;
    private _uniformViewMatrixInfo;
    target: Vector3;
    transform: Transform;
    constructor(fieldOfViewRadians: number, aspect: number);
    updatePerspective(fieldOfViewRadians: number, aspect: number, zNear?: number, zFar?: number): void;
    setCameraPosition(cameraPosition: Vector3): void;
    setCameraTarget(target: Vector3): void;
    computeViewMatrix(): void;
    getViewMatrix(): number[];
    getProjectionMatrix(): number[];
    setUniformLocationViewMatrix(uniformViewMatrixLocation: WebGLUniformLocation): void;
    setUniformProjectionMatrix(uniformProjectionMatrixInfo: WebGLUniformLocation): void;
    getUniformViewMatrixInfo(): GLUniformMatInfo | null;
    getUniformProjectionMatrixInfo(): GLUniformMatInfo | null;
}
//# sourceMappingURL=PerspectiveCamera.d.ts.map