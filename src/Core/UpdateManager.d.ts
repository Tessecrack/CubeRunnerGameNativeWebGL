import type GameObject from "./GameObject.js";
import type PerspectiveCamera from "./PerspectiveCamera.js";
import type PlayerMovementController from "./PlayerMovementController.js";
export default class UpdateManager {
    private _perspectiveCamera;
    private _playerMovementController;
    private _collisionManager;
    constructor();
    setPerspectiveCamera(perspectiveCamera: PerspectiveCamera): void;
    setPlayerMovementController(playerMovementController: PlayerMovementController): void;
    updateLogic(deltaTime: number, gameObjects: GameObject[]): void;
    private _updateCameraState;
}
//# sourceMappingURL=UpdateManager.d.ts.map