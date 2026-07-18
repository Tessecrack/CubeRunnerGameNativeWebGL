import type GameObject from "./GameObject.js";
import type InputController from "./InputController.js";
import type Player from "./Player.js";
export default class PlayerMovementController {
    private static GRAVITY;
    private _player;
    private _inputController;
    private _speed;
    private _velocityY;
    constructor(player: Player, inputController: InputController);
    getPlayerTransform(): import("./Transform.js").default;
    applyMove(deltaTime: number, obstacles: GameObject[]): void;
    private _checkAABB;
}
//# sourceMappingURL=PlayerMovementController.d.ts.map