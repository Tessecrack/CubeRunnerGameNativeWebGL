import type InputSystem from "./InputSystem.js";

export default class InputController {

    private _inputSystem: InputSystem

    constructor(inputSystem: InputSystem) {
        this._inputSystem = inputSystem
    }
}