import type GameObject from "./GameObject.js";
import InputController from "./InputController.js";
import type PerspectiveCamera from "./PerspectiveCamera.js";
import Player from "./Player.js";
import Transform from "./Transform.js";
export default class UpdateManager {
    private _inputController;
    private _perspectiveCamera;
    private _player;
    private _collisionManager;
    constructor(inputController: InputController);
    setPerspectiveCamera(perspectiveCamera: PerspectiveCamera): void;
    setPlayer(player: Player): void;
    updateLogic(deltaTime: number, gameObjects: GameObject[]): void;
    applyInput(deltaTime: number, valueTranslation: number, controlledTransform: Transform): void;
    private _updateCameraState;
}
//# sourceMappingURL=UpdateManager.d.ts.map