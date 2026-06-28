import type InputKeyboardSystem from "./InputKeyboardSystem.js";
import type Transform from "./Transform.js";

export default class InputController {

    private _inputSystem: InputKeyboardSystem
    private _transform: Transform | null = null

    constructor(inputSystem: InputKeyboardSystem) {
        this._inputSystem = inputSystem
    }
}