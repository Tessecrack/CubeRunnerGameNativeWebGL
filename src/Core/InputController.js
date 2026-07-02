import DeltaTimeManager from "./DeltaTimeManager.js";
import Player from "./Player.js";
export default class InputController {
    _inputSystem;
    _player = null;
    constructor(inputSystem) {
        this._inputSystem = inputSystem;
    }
    setPlayer(player) {
        this._player = player;
    }
    update(deltaTime) {
        if (this._player === null) {
            return;
        }
        const speed = this._player.speed * deltaTime;
        const transform = this._player.gameObject.transform;
        if (this._inputSystem.isUpPressed) {
            transform.translation.y += speed;
        }
        if (this._inputSystem.isDownPressed) {
            transform.translation.y -= speed;
        }
        if (this._inputSystem.isLeftPressed) {
            transform.translation.x -= speed;
        }
        if (this._inputSystem.isRightPressed) {
            transform.translation.x += speed;
        }
    }
}
//# sourceMappingURL=InputController.js.map