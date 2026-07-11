import CollisionManager from "./Common/CollisionManager.js";
import InputController from "./InputController.js";
import Player from "./Player.js";
import Transform from "./Transform.js";
import Vector3 from "./Vector3.js";
export default class UpdateManager {
    _inputController;
    _perspectiveCamera = null;
    _player = null;
    _collisionManager;
    constructor(inputController) {
        this._inputController = inputController;
        this._collisionManager = new CollisionManager();
    }
    setPerspectiveCamera(perspectiveCamera) {
        this._perspectiveCamera = perspectiveCamera;
    }
    setPlayer(player) {
        this._player = player;
    }
    updateLogic(deltaTime, gameObjects) {
        if (!gameObjects || gameObjects.length === 0) {
            return;
        }
        if (this._player !== null) {
            this.applyInput(deltaTime, this._player.speed, this._player.gameObject.transform);
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
    applyInput(deltaTime, valueTranslation, controlledTransform) {
        let appliedTransform = controlledTransform;
        if (this._inputController === null || appliedTransform === null) {
            return;
        }
        const speed = valueTranslation * deltaTime;
        if (this._inputController.isUpPressed()) {
            appliedTransform.translation.y += speed;
        }
        if (this._inputController.isDownPressed()) {
            appliedTransform.translation.y -= speed;
        }
        if (this._inputController.isLeftPressed()) {
            appliedTransform.translation.x -= speed;
        }
        if (this._inputController.isRightPressed()) {
            appliedTransform.translation.x += speed;
        }
    }
    _updateCameraState() {
        if (this._perspectiveCamera === null || this._player === null) {
            return;
        }
        const playerTransform = this._player.gameObject.transform;
        this._perspectiveCamera.transform.translation.x = playerTransform.translation.x;
        this._perspectiveCamera.transform.translation.y = playerTransform.translation.y;
        this._perspectiveCamera.target.x = playerTransform.translation.x;
        this._perspectiveCamera.target.y = playerTransform.translation.y;
    }
}
//# sourceMappingURL=UpdateManager.js.map