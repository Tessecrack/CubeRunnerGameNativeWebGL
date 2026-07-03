export default class InputController {
    _inputSystem;
    _conrolledTransform = null;
    constructor(inputSystem) {
        this._inputSystem = inputSystem;
    }
    setControlledTransform(controlledTransform) {
        this._conrolledTransform = controlledTransform;
    }
    update(deltaTime, valueTranslation) {
        if (this._conrolledTransform === null) {
            return;
        }
        const speed = valueTranslation * deltaTime;
        if (this._inputSystem.isUpPressed) {
            this._conrolledTransform.translation.y += speed;
        }
        if (this._inputSystem.isDownPressed) {
            this._conrolledTransform.translation.y -= speed;
        }
        if (this._inputSystem.isLeftPressed) {
            this._conrolledTransform.translation.x -= speed;
        }
        if (this._inputSystem.isRightPressed) {
            this._conrolledTransform.translation.x += speed;
        }
    }
}
//# sourceMappingURL=InputController.js.map