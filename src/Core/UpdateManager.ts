import type GameObject from "./GameObject.js"
import InputController from "./InputController.js"

export default class UpdateManager {

    private _inputController: InputController | null = null

    constructor(inputController: InputController) {
        this._inputController = inputController
    }

    public updateLogic(deltaTime: number, gameObjects: GameObject[]) {
        if (this._inputController !== null) {
            this._inputController.update(deltaTime)
        }
        console.log(deltaTime)
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
    }
}