import type InputKeyboardSystem from "./InputKeyboardSystem.js";
import type Transform from "./Transform.js";

export default class InputController {

    private _inputSystem: InputKeyboardSystem

    constructor(inputSystem: InputKeyboardSystem) {
        this._inputSystem = inputSystem
    }

    public isUpPressed() {
        return this._inputSystem.isUpPressed
    }

    public isDownPressed() {
        return this._inputSystem.isDownPressed
    }

    public isLeftPressed() {
        return this._inputSystem.isLeftPressed
    }

    public isRightPressed() {
        return this._inputSystem.isRightPressed
    }
}