import DeltaTimeManager from "./DeltaTimeManager.js";
import type GameObject from "./GameObject.js";
import type InputKeyboardSystem from "./InputKeyboardSystem.js";
import Player from "./Player.js";
import type Transform from "./Transform.js";

export default class InputController {

    private _inputSystem: InputKeyboardSystem
    private _player: Player | null = null

    constructor(inputSystem: InputKeyboardSystem) {
        this._inputSystem = inputSystem
    }

    public setPlayer(player: Player) {
        this._player = player
    }

    public update(deltaTime: number) {
        if (this._player === null) {
            return
        }

        const speed = this._player.speed * deltaTime
        const transform = this._player.gameObject.transform

        if (this._inputSystem.isUpPressed) {
            transform.translation.y += speed
        }

        if (this._inputSystem.isDownPressed) {
            transform.translation.y -= speed
        }

        if (this._inputSystem.isLeftPressed) {
            transform.translation.x -= speed
        }

        if (this._inputSystem.isRightPressed) {
            transform.translation.x += speed
        }
    }
}