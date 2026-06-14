import GLUniformMatInfo from "./Common/GLUniformMatInfo.js"
import MatricesUtils from "./Common/Utils/MatricesUtils.js"
import Vector3 from "./Vector3.js"

export default class PerspectiveCamera {

    public static defaultFieldOfViewRadians = 60 * Math.PI / 180

    public static nameUniformViewMatrix = `u_viewMatrix`

    public static nameUniformProjectionMatrix = `u_projectionMatrix`

    private _fieldOfViewRadians: number
    private _aspect: number
    private _zNear: number = 1
    private _zFar: number = 2000

    private _projectionMatrix: number[]

    private _viewMatrix: number[]

    private _cameraMatrix: number[]

    private _cameraPosition: Vector3

    private _target: Vector3


    private _uniformProjectionMatrixInfo: GLUniformMatInfo | null = null

    private _uniformViewMatrixInfo: GLUniformMatInfo | null = null

    constructor(
        fieldOfViewRadians: number,
        aspect: number) {
        this._fieldOfViewRadians = fieldOfViewRadians
        this._aspect = aspect

        this._cameraPosition = new Vector3(0, 0, 1000)
        this._target = new Vector3(0, 0, 0)
        this._projectionMatrix = MatricesUtils.perspective(fieldOfViewRadians, aspect, this._zNear, this._zFar)
        this._cameraMatrix = MatricesUtils.lookAt(
            [this._cameraPosition.x, this._cameraPosition.y, this._cameraPosition.z],
            [this._target.x, this._target.y, this._target.z],
            Vector3.up)!
        this._viewMatrix = MatricesUtils.inverse(this._cameraMatrix)
    }

    public updatePerspective(fieldOfViewRadians: number, aspect: number, zNear: number = 1, zFar: number = 2000) {
        this._fieldOfViewRadians = fieldOfViewRadians
        this._aspect = aspect
        this._zNear = zNear
        this._zFar = zFar

        if (this._fieldOfViewRadians === fieldOfViewRadians && this._aspect === aspect && this._zNear === zNear && this._zFar === zFar) {
            return
        }

        this._projectionMatrix = MatricesUtils.perspective(fieldOfViewRadians, aspect, zNear, zFar)

        if (this._uniformProjectionMatrixInfo !== null) {
            this._uniformProjectionMatrixInfo.value = this._projectionMatrix
        }
    }

    public setCameraPosition(cameraPosition: Vector3) {
        if (this._cameraPosition.x === cameraPosition.x && this._cameraPosition.y === cameraPosition.y && this._cameraPosition.z === cameraPosition.z) {
            return
        }
        this._cameraPosition = cameraPosition
    }

    public setCameraTarget(target: Vector3) {
        if (this._target.x === target.x && this._target.y === target.y && this._target.z === target.z) {
            return
        }

        this._target = target
    }

    public computeViewMatrix() {
        this._cameraMatrix = MatricesUtils.lookAt(
            [this._cameraPosition.x, this._cameraPosition.y, this._cameraPosition.z],
            [this._target.x, this._target.y, this._target.z],
            Vector3.up)!

        this._viewMatrix = MatricesUtils.inverse(this._cameraMatrix)

        if (this._uniformViewMatrixInfo !== null) {
            this._uniformViewMatrixInfo.value = this._viewMatrix
        }
    }

    public getViewMatrix() {
        return this._viewMatrix
    }

    public getProjectionMatrix() {
        return this._projectionMatrix
    }

    public setUniformLocationViewMatrix(uniformViewMatrixLocation: WebGLUniformLocation) {
        if (this._uniformViewMatrixInfo === null) {
            this._uniformViewMatrixInfo = new GLUniformMatInfo(uniformViewMatrixLocation, this._viewMatrix)
        } else {
            this._uniformViewMatrixInfo.uniformLocation = uniformViewMatrixLocation
        }
    }

    public setUniformProjectionMatrix(uniformProjectionMatrixInfo: WebGLUniformLocation) {
        if (this._uniformProjectionMatrixInfo === null) {
            this._uniformProjectionMatrixInfo = new GLUniformMatInfo(uniformProjectionMatrixInfo, this._projectionMatrix)
        } else {
            this._uniformProjectionMatrixInfo.uniformLocation = uniformProjectionMatrixInfo
        }
    }

    public getUniformViewMatrixInfo() {
        return this._uniformViewMatrixInfo
    }

    public getUniformProjectionMatrixInfo() {
        return this._uniformProjectionMatrixInfo
    }
}