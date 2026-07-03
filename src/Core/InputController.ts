import type InputKeyboardSystem from "./InputKeyboardSystem.js";
import type Transform from "./Transform.js";

export default class InputController {

    private _inputSystem: InputKeyboardSystem
    private _conrolledTransform: Transform | null = null

    constructor(inputSystem: InputKeyboardSystem) {
        this._inputSystem = inputSystem
    }

    public setControlledTransform(controlledTransform: Transform) {
        this._conrolledTransform = controlledTransform
    }

    public update(deltaTime: number, valueTranslation: number) {
        if (this._conrolledTransform === null) {
            return
        }

        const speed = valueTranslation * deltaTime

        if (this._inputSystem.isUpPressed) {
            this._conrolledTransform.translation.y += speed
        }

        if (this._inputSystem.isDownPressed) {
            this._conrolledTransform.translation.y -= speed
        }

        if (this._inputSystem.isLeftPressed) {
            this._conrolledTransform.translation.x -= speed
        }

        if (this._inputSystem.isRightPressed) {
            this._conrolledTransform.translation.x += speed
        }
    }
}