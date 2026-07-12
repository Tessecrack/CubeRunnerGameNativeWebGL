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
            this.applyInput(deltaTime, this._player.speed, this._player.gameObject, gameObjects);
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
    applyInput(deltaTime, valueTranslation, controlledObject, gameObjects) {
        let appliedTransform = controlledObject.transform;
        if (this._inputController === null || controlledObject === null || appliedTransform === null) {
            return;
        }
        const speed = valueTranslation * deltaTime;
        let moveOffsetX = 0;
        let moveOffsetY = 0;
        if (this._inputController.isUpPressed()) {
            moveOffsetY += speed;
        }
        if (this._inputController.isDownPressed()) {
            moveOffsetY -= speed;
        }
        if (this._inputController.isLeftPressed()) {
            moveOffsetX -= speed;
        }
        if (this._inputController.isRightPressed()) {
            moveOffsetX += speed;
        }
        if (moveOffsetX === 0 && moveOffsetY === 0) {
            return;
        }
        if (controlledObject.collisionBox !== null) {
            const collisionBox = controlledObject.collisionBox;
            if (moveOffsetX !== 0) {
                let targetX = controlledObject.transform.translation.x + moveOffsetX;
                let collisionX = false;
                for (let obj of gameObjects) {
                    if (this._player && obj === this._player.gameObject) {
                        continue;
                    }
                    if (this._checkAABB(targetX, controlledObject.transform.translation.y, controlledObject.transform.translation.z, collisionBox, obj)) {
                        collisionX = true;
                        break;
                    }
                }
                if (!collisionX) {
                    controlledObject.transform.translation.x = targetX;
                }
            }
            if (moveOffsetY !== 0) {
                let targetY = controlledObject.transform.translation.y + moveOffsetY;
                let collisionY = false;
                for (let obj of gameObjects) {
                    if (this._player && obj === this._player.gameObject) {
                        continue;
                    }
                    if (this._checkAABB(controlledObject.transform.translation.x, targetY, controlledObject.transform.translation.z, collisionBox, obj)) {
                        collisionY = true;
                        break;
                    }
                }
                if (!collisionY) {
                    controlledObject.transform.translation.y = targetY;
                }
            }
        }
    }
    _checkAABB(pX, pY, pZ, movedObjectCollisionBox, obstacle) {
        const obstacleCollisionBox = obstacle.collisionBox;
        // Безопасная проверка на существование хитбоксов
        if (!movedObjectCollisionBox || !obstacleCollisionBox) {
            return false;
        }
        // Разница между центрами по каждой оси
        const deltaX = Math.abs(pX - obstacle.transform.translation.x);
        const deltaY = Math.abs(pY - obstacle.transform.translation.y);
        const deltaZ = Math.abs(pZ - obstacle.transform.translation.z);
        // Минимально допустимое расстояние между центрами для предотвращения пересечения
        const minDistanceX = (movedObjectCollisionBox.width + obstacleCollisionBox.width) / 2;
        const minDistanceY = (movedObjectCollisionBox.height + obstacleCollisionBox.height) / 2;
        const minDistanceZ = (movedObjectCollisionBox.depth + obstacleCollisionBox.depth) / 2;
        // Коллизия есть только тогда, когда центры сблизились слишком близко по ВСЕМ трем осям
        return deltaX < minDistanceX &&
            deltaY < minDistanceY &&
            deltaZ < minDistanceZ;
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