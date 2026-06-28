export default class InputSystem {
    static _upKeyCode = 'KeyW';
    static _leftKeyCode = 'KeyA';
    static _downKeyCode = 'KeyS';
    static _rightKeyCode = 'KeyD';
    static _spaceKeyCode = 'Space';
    _window;
    upKeyPressed = null;
    leftKeyPressed = null;
    downKeyPressed = null;
    rightKeyPressed = null;
    spaceKeyPressed = null;
    constructor(window) {
        this._window = window;
        this._window.addEventListener('keydown', this._handleKeyDown);
    }
    _handleKeyDown(event) {
        switch (event.code) {
            case InputSystem._upKeyCode:
                this._handleUpKeyDown();
                break;
            case InputSystem._leftKeyCode:
                this._handleLeftKeyDown();
                break;
            case InputSystem._downKeyCode:
                this._handleDownKeyDown();
                break;
            case InputSystem._rightKeyCode:
                this._handleRightKeyDown();
                break;
            case InputSystem._spaceKeyCode:
                this._handleSpaceKeyDown();
                break;
        }
    }
    _handleUpKeyDown() {
        if (this.upKeyPressed !== null) {
            this.upKeyPressed();
        }
    }
    _handleLeftKeyDown() {
        if (this.leftKeyPressed !== null) {
            this.leftKeyPressed();
        }
    }
    _handleDownKeyDown() {
        if (this.downKeyPressed !== null) {
            this.downKeyPressed();
        }
    }
    _handleRightKeyDown() {
        if (this.rightKeyPressed !== null) {
            this.rightKeyPressed();
        }
    }
    _handleSpaceKeyDown() {
        if (this.spaceKeyPressed !== null) {
            this.spaceKeyPressed();
        }
    }
}
//# sourceMappingURL=InputSystem.js.map