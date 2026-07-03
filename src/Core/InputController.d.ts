import type InputKeyboardSystem from "./InputKeyboardSystem.js";
import type Transform from "./Transform.js";
export default class InputController {
    private _inputSystem;
    private _conrolledTransform;
    constructor(inputSystem: InputKeyboardSystem);
    setControlledTransform(controlledTransform: Transform): void;
    update(deltaTime: number, valueTranslation: number): void;
}
//# sourceMappingURL=InputController.d.ts.map