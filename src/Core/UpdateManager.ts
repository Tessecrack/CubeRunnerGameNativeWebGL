import CollisionManager from "./Common/CollisionManager.js"
import type GameObject from "./GameObject.js"
import type PerspectiveCamera from "./PerspectiveCamera.js"
import type PlayerMovementController from "./PlayerMovementController.js"

export default class UpdateManager {

    private _perspectiveCamera: PerspectiveCamera | null = null
    private _playerMovementController: PlayerMovementController | null = null

    private _collisionManager: CollisionManager

    constructor() {
        this._collisionManager = new CollisionManager()
    }

    public setPerspectiveCamera(perspectiveCamera: PerspectiveCamera) {
        this._perspectiveCamera = perspectiveCamera
    }

    public setPlayerMovementController(playerMovementController: PlayerMovementController) {
        this._playerMovementController = playerMovementController
    }

    public updateLogic(deltaTime: number, gameObjects: GameObject[]) {

        if (!gameObjects || gameObjects.length === 0) {
            return
        }

        if (this._playerMovementController !== null) {
            this._playerMovementController.applyMove(deltaTime, gameObjects)
        }

        for (let gameObject of gameObjects) {
            const uniformsVecInfo = gameObject.getUniformsVecInfo()

            for (let uniformVec of uniformsVecInfo) {
                uniformVec.updateValue()
            }

            const uniformsMatInfo = gameObject.getUniformsMatInfo()

            for (let uniformMat of uniformsMatInfo) {
                uniformMat.updateValue()
            }
        }

        this._updateCameraState()
    }

    private _updateCameraState() {
        if (this._perspectiveCamera === null || this._playerMovementController === null) {
            return
        }

        const playerTransform = this._playerMovementController.getPlayerTransform()

        this._perspectiveCamera.transform.translation.x = playerTransform.translation.x
        this._perspectiveCamera.transform.translation.y = playerTransform.translation.y

        this._perspectiveCamera.target.x = playerTransform.translation.x
        this._perspectiveCamera.target.y = playerTransform.translation.y
    }
}