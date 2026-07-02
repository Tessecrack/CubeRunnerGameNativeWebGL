export default class InputController {
    _inputSystem;
    _gameObject = null;
    constructor(inputSystem) {
        this._inputSystem = inputSystem;
        this._inputSystem.upKeyPressed = this.up;
        this._inputSystem.downKeyPressed = this.down;
        this._inputSystem.leftKeyPressed = this.left;
        this._inputSystem.rightKeyPressed = this.right;
        this._inputSystem.spaceKeyPressed = this.space;
    }
    setGameObject(gameObject) {
        this._gameObject = gameObject;
    }
    up() {
        if (this._gameObject !== null) {
            this._gameObject.transform.translation.y += 1;
        }
    }
    down() {
        if (this._gameObject !== null) {
            this._gameObject.transform.translation.y -= 1;
        }
    }
    left() {
        if (this._gameObject) {
        }
    }
    right() {
        console.log("RIGHT");
    }
    space() {
        console.log("SPACE");
    }
}
//# sourceMappingURL=InputController.js.map