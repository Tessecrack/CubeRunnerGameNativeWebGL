import CollisionManager from "./Common/CollisionManager.js";
export default class UpdateManager {
    _perspectiveCamera = null;
    _playerMovementController = null;
    _collisionManager;
    constructor() {
        this._collisionManager = new CollisionManager();
    }
    setPerspectiveCamera(perspectiveCamera) {
        this._perspectiveCamera = perspectiveCamera;
    }
    setPlayerMovementController(playerMovementController) {
        this._playerMovementController = playerMovementController;
    }
    updateLogic(deltaTime, gameObjects) {
        if (!gameObjects || gameObjects.length === 0) {
            return;
        }
        if (this._playerMovementController !== null) {
            this._playerMovementController.applyMove(deltaTime, gameObjects);
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
        if (this._perspectiveCamera === null || this._playerMovementController === null) {
            return;
        }
        const playerTransform = this._playerMovementController.getPlayerTransform();
        this._perspectiveCamera.transform.translation.x = playerTransform.translation.x;
        this._perspectiveCamera.transform.translation.y = playerTransform.translation.y;
        this._perspectiveCamera.target.x = playerTransform.translation.x;
        this._perspectiveCamera.target.y = playerTransform.translation.y;
    }
}
//# sourceMappingURL=UpdateManager.js.map