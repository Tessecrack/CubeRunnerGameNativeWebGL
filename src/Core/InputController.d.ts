import type GameObject from "./GameObject.js";
import type InputKeyboardSystem from "./InputKeyboardSystem.js";
export default class InputController {
    private _inputSystem;
    private _gameObject;
    constructor(inputSystem: InputKeyboardSystem);
    setGameObject(gameObject: GameObject): void;
    private up;
    private down;
    private left;
    private right;
    private space;
}
//# sourceMappingURL=InputController.d.ts.map