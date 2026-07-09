import type GameObject from "./GameObject.js"
import InputController from "./InputController.js"
import type PerspectiveCamera from "./PerspectiveCamera.js"
import type Player from "./Player.js"
import Vector3 from "./Vector3.js"

export default class UpdateManager {

    private _inputController: InputController
    private _perspectiveCamera: PerspectiveCamera | null = null
    private _player: Player | null = null

    constructor(inputController: InputController) {
        this._inputController = inputController
    }

    public setPerspectiveCamera(perspectiveCamera: PerspectiveCamera) {
        this._perspectiveCamera = perspectiveCamera
    }

    public setPlayer(player: Player) {
        this._player = player
    }

    public updateLogic(deltaTime: number, gameObjects: GameObject[]) {
        if (this._inputController !== null) {
            let valueForTranslation = 1.0
            if (this._player !== null) {
                valueForTranslation = this._player.speed
            }
            this._inputController.update(deltaTime, valueForTranslation)
        }

        if (!gameObjects || gameObjects.length === 0) {
            return
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
        if (this._perspectiveCamera === null || this._player === null) {
            return
        }
        
        const playerTransform = this._player.gameObject.transform

        this._perspectiveCamera.transform.translation.x = playerTransform.translation.x
        this._perspectiveCamera.transform.translation.y = playerTransform.translation.y

        this._perspectiveCamera.target.x = playerTransform.translation.x
        this._perspectiveCamera.target.y = playerTransform.translation.y
    }
}