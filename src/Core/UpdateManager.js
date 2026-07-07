import InputController from "./InputController.js";
import Vector3 from "./Vector3.js";
export default class UpdateManager {
    _inputController;
    _perspectiveCamera = null;
    _player = null;
    constructor(inputController) {
        this._inputController = inputController;
    }
    setPerspectiveCamera(perspectiveCamera) {
        this._perspectiveCamera = perspectiveCamera;
    }
    setPlayer(player) {
        this._player = player;
    }
    updateLogic(deltaTime, gameObjects) {
        if (this._inputController !== null) {
            let valueForTranslation = 1.0;
            if (this._player !== null) {
                valueForTranslation = this._player.speed;
            }
            this._inputController.update(deltaTime, valueForTranslation);
        }
        if (!gameObjects || gameObjects.length === 0) {
            return;
        }
        for (let gameObject of gameObjects) {
            const uniformsVecInfo = gameObject.getUniformsVecInfo();
            for (let uniformVec of uniformsVecInfo) {
                uniformVec.updateValue();
            }
            const uniformsMatInfo = gameObject.getUniformsMatInfo();
            for (let uniformMat of uniformsMatInfo) {
                uniformMat.updateValue();
            }
        }
        this._updateCameraState();
    }
    _updateCameraState() {
        if (this._perspectiveCamera === null || this._player === null) {
            return;
        }
        const playerTransform = this._player.gameObject.transform;
        //this._perspectiveCamera.setCameraTarget(playerTransform.translation)
        //const cameraPosition = new Vector3(playerTransform.translation.x, playerTransform.translation.y, playerTransform.translation.z)
    }
}
//# sourceMappingURL=UpdateManager.js.map