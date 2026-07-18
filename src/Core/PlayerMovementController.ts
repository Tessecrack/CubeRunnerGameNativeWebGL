import type CollisionBox from "./Common/CollisionBox.js";
import type GameObject from "./GameObject.js";
import type InputController from "./InputController.js";
import type Player from "./Player.js";

export default class PlayerMovementController {
    private static GRAVITY: number = 20.0

    private _player: Player

    private _inputController: InputController
    private _speed = 100.0
    private _velocityY = 0.0

    constructor(player: Player, inputController: InputController) {
        this._player = player
        this._inputController = inputController
    }

    public getPlayerTransform() {
        return this._player.gameObject.transform
    }

    public applyMove(deltaTime: number, obstacles: GameObject[]) {
        const controlledObject = this._player.gameObject
        const valueTranslation = this._speed
        let appliedTransform = controlledObject.transform

        if (this._inputController === null || controlledObject === null || appliedTransform === null) {
            return
        }

        const speed = valueTranslation * deltaTime

        let moveOffsetX = 0
        let moveOffsetY = 0

        if (this._inputController.isUpPressed()) {
            moveOffsetY += speed
        }

        if (this._inputController.isDownPressed()) {
            moveOffsetY -= speed
        }

        if (this._inputController.isLeftPressed()) {
            moveOffsetX -= speed
        }

        if (this._inputController.isRightPressed()) {
            moveOffsetX += speed
        }

        this._velocityY -= PlayerMovementController.GRAVITY * deltaTime;
        moveOffsetY += this._velocityY * deltaTime

        if (moveOffsetX === 0 && moveOffsetY === 0) {
            return
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
                        } else if (moveOffsetY > 0) {
                            this._velocityY = 0;
                        }

                        break;
                    }
                }
                if (!collisionY) {
                    controlledObject.transform.translation.y = targetY;
                }
            }
        }
    }

    private _checkAABB(pX: number, pY: number, pZ: number, movedObjectCollisionBox: CollisionBox, obstacle: GameObject): boolean {
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