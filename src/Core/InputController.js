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
        console.log("UP");
    }
    down() {
        console.log("DOWN");
    }
    left() {
        console.log("LEFT");
    }
    right() {
        console.log("RIGHT");
    }
    space() {
        console.log("SPACE");
    }
}
//# sourceMappingURL=InputController.js.map