import type GameObject from "./GameObject.js";
import type InputKeyboardSystem from "./InputKeyboardSystem.js";
import type Transform from "./Transform.js";

export default class InputController {

    private _inputSystem: InputKeyboardSystem
    private _gameObject: GameObject | null = null

    constructor(inputSystem: InputKeyboardSystem) {
        this._inputSystem = inputSystem

        this._inputSystem.upKeyPressed = this.up
        this._inputSystem.downKeyPressed = this.down
        this._inputSystem.leftKeyPressed = this.left
        this._inputSystem.rightKeyPressed = this.right
        this._inputSystem.spaceKeyPressed = this.space
    }

    public setGameObject(gameObject: GameObject) {
        this._gameObject = gameObject
    }

    private up() {
        if (this._gameObject !== null) {
            this._gameObject.transform.translation.y += 1
        }
    }

    private down() {
        if (this._gameObject !== null) {
            this._gameObject.transform.translation.y -= 1
        }
    }

    private left() {
        if (this._gameObject) {
            
        }
    }

    private right() {
        console.log("RIGHT")
    }

    private space() {
        console.log("SPACE")
    }
}