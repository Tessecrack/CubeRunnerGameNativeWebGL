import type InputKeyboardSystem from "./InputKeyboardSystem.js";
export default class InputController {
    private _inputSystem;
    constructor(inputSystem: InputKeyboardSystem);
    isUpPressed(): boolean;
    isDownPressed(): boolean;
    isLeftPressed(): boolean;
    isRightPressed(): boolean;
}
//# sourceMappingURL=InputController.d.ts.map