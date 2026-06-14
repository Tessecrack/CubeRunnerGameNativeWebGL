import type GLUniformMatInfo from "./Common/GLUniformMatInfo.js"
import MatricesUtils from "./Common/Utils/MatricesUtils.js"
import Vector3 from "./Vector3.js"

export default class PerspectiveCamera {
    private _fieldOfViewRadians: number
    private _aspect: number
    private _zNear: number = 1
    private _zFar: number = 2000

    private _projectionMatrix: number[]

    private _viewMatrix: number[]

    private _cameraMatrix: number[]

    private _cameraPosition: Vector3

    private _target: Vector3


    private _uniformProjectionMatInfo: GLUniformMatInfo | null = null

    private _uniformViewMatInfo: GLUniformMatInfo | null = null

    constructor(
        fieldOfViewRadians: number,
        aspect: number) {
        this._fieldOfViewRadians = fieldOfViewRadians
        this._aspect = aspect

        this._projectionMatrix = MatricesUtils.perspective(fieldOfViewRadians, aspect, this._zNear, this._zFar)

        this._cameraPosition = new Vector3(0, 0, 100)
        this._target = new Vector3(0, 0, 0)

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

        this._projectionMatrix = MatricesUtils.perspective(fieldOfViewRadians, aspect, zNear, zFar)
        this.computeViewMatrix()
    }

    public setCameraPosition(cameraPosition: Vector3) {
        if (this._cameraPosition.x === cameraPosition.x && this._cameraPosition.y === cameraPosition.y && this._cameraPosition.z === cameraPosition.z) {
            return
        }
        this._cameraPosition = cameraPosition

        this.computeViewMatrix()
    }

    public setCameraTarget(target: Vector3) {
        if (this._target.x === target.x && this._target.y === target.y && this._target.z === target.z) {
            return
        }

        this._target = target

        this.computeViewMatrix()
    }

    public computeViewMatrix() {
        this._cameraMatrix = MatricesUtils.lookAt(
            [this._cameraPosition.x, this._cameraPosition.y, this._cameraPosition.z],
            [this._target.x, this._target.y, this._target.z],
            Vector3.up)!

        this._viewMatrix = MatricesUtils.inverse(this._cameraMatrix)

        if (this._uniformProjectionMatInfo !== null) {
            this._uniformProjectionMatInfo.value = this._projectionMatrix
        }

        if (this._uniformViewMatInfo !== null) { 
            this._uniformViewMatInfo.value = this._viewMatrix
        }
    }
}