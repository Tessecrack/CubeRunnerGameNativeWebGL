import type InputKeyboardSystem from "./InputKeyboardSystem.js";
import Player from "./Player.js";
export default class InputController {
    private _inputSystem;
    private _player;
    constructor(inputSystem: InputKeyboardSystem);
    setPlayer(player: Player): void;
    update(deltaTime: number): void;
}
//# sourceMappingURL=InputController.d.ts.map