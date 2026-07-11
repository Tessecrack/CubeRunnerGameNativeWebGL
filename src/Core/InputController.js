export default class InputController {
    _inputSystem;
    constructor(inputSystem) {
        this._inputSystem = inputSystem;
    }
    isUpPressed() {
        return this._inputSystem.isUpPressed;
    }
    isDownPressed() {
        return this._inputSystem.isDownPressed;
    }
    isLeftPressed() {
        return this._inputSystem.isLeftPressed;
    }
    isRightPressed() {
        return this._inputSystem.isRightPressed;
    }
}
//# sourceMappingURL=InputController.js.map