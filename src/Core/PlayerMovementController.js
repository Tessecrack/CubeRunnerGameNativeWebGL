export default class PlayerMovementController {
    static GRAVITY = 20.0;
    _player;
    _inputController;
    _speed = 100.0;
    _velocityY = 0.0;
    constructor(player, inputController) {
        this._player = player;
        this._inputController = inputController;
    }
    getPlayerTransform() {
        return this._player.gameObject.transform;
    }
    applyMove(deltaTime, obstacles) {
        const controlledObject = this._player.gameObject;
        const valueTranslation = this._speed;
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
        this._velocityY -= PlayerMovementController.GRAVITY * deltaTime;
        moveOffsetY += this._velocityY * deltaTime;
        if (moveOffsetX === 0 && moveOffsetY === 0) {
            return;
        }
        if (moveOffsetX !== 0 || moveOffsetY !== 0) {
            const length = Math.sqrt(moveOffsetX * moveOffsetX + moveOffsetY * moveOffsetY);
            moveOffsetX = (moveOffsetX / length) * valueTranslation * deltaTime;
            moveOffsetY = (moveOffsetY / length) * valueTranslation * deltaTime;
        }
        if (controlledObject.collisionBox !== null) {
            const collisionBox = controlledObject.collisionBox;
            if (moveOffsetX !== 0) {
                let targetX = controlledObject.transform.translation.x + moveOffsetX;
                let collisionX = false;
                for (let obj of obstacles) {
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
                for (let obj of obstacles) {
                    if (this._player && obj === this._player.gameObject) {
                        continue;
                    }
                    if (this._checkAABB(controlledObject.transform.translation.x, targetY, controlledObject.transform.translation.z, collisionBox, obj)) {
                        collisionY = true;
                        if (moveOffsetY < 0) {
                            this._velocityY = 0;
                            const obstacleBox = obj.collisionBox;
                            if (obstacleBox) {
                                controlledObject.transform.translation.y = obj.transform.translation.y + (obstacleBox.height + collisionBox.height) / 2;
                            }
                        }
                        else if (moveOffsetY > 0) {
                            this._velocityY = 0;
                        }
                        break;
                    }
                }
                if (!collisionY) {
                    console.log(moveOffsetY);
                    controlledObject.transform.translation.y = targetY;
                }
            }
        }
    }
    _checkAABB(pX, pY, pZ, movedObjectCollisionBox, obstacle) {
        const obstacleCollisionBox = obstacle.collisionBox;
        if (!movedObjectCollisionBox || !obstacleCollisionBox) {
            return false;
        }
        const deltaX = Math.abs(pX - obstacle.transform.translation.x);
        const deltaY = Math.abs(pY - obstacle.transform.translation.y);
        const deltaZ = Math.abs(pZ - obstacle.transform.translation.z);
        const minDistanceX = (movedObjectCollisionBox.width + obstacleCollisionBox.width) / 2;
        const minDistanceY = (movedObjectCollisionBox.height + obstacleCollisionBox.height) / 2;
        const minDistanceZ = (movedObjectCollisionBox.depth + obstacleCollisionBox.depth) / 2;
        return deltaX < minDistanceX &&
            deltaY < minDistanceY &&
            deltaZ < minDistanceZ;
    }
}
//# sourceMappingURL=PlayerMovementController.js.map