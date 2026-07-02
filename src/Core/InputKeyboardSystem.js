export default class InputKeyboardSystem {
    static _upKeyCode = 'KeyW';
    static _leftKeyCode = 'KeyA';
    static _downKeyCode = 'KeyS';
    static _rightKeyCode = 'KeyD';
    static _spaceKeyCode = 'Space';
    _window;
    _isKeyUpPressed = false;
    _isKeyDownPressed = false;
    _isKeyLeftPressed = false;
    _isKeyRightPressed = false;
    constructor(window) {
        this._window = window;
        this._window.addEventListener('keydown', this._handleKeyDown.bind(this));
        this._window.addEventListener('keyup', this._handleKeyUp.bind(this));
    }
    get isUpPressed() { return this._isKeyUpPressed; }
    get isLeftPressed() { return this._isKeyLeftPressed; }
    get isDownPressed() { return this._isKeyDownPressed; }
    get isRightPressed() { return this._isKeyRightPressed; }
    _handleKeyUp(event) {
        switch (event.code) {
            case InputKeyboardSystem._upKeyCode:
                this._isKeyUpPressed = false;
                break;
            case InputKeyboardSystem._leftKeyCode:
                this._isKeyLeftPressed = false;
                break;
            case InputKeyboardSystem._downKeyCode:
                this._isKeyDownPressed = false;
                break;
            case InputKeyboardSystem._rightKeyCode:
                this._isKeyRightPressed = false;
                break;
            case InputKeyboardSystem._spaceKeyCode:
                break;
        }
    }
    _handleKeyDown(event) {
        switch (event.code) {
            case InputKeyboardSystem._upKeyCode:
                this._isKeyUpPressed = true;
                break;
            case InputKeyboardSystem._leftKeyCode:
                this._isKeyLeftPressed = true;
                break;
            case InputKeyboardSystem._downKeyCode:
                this._isKeyDownPressed = true;
                break;
            case InputKeyboardSystem._rightKeyCode:
                this._isKeyRightPressed = true;
                break;
            case InputKeyboardSystem._spaceKeyCode:
                break;
        }
    }
}
//# sourceMappingURL=InputKeyboardSystem.js.map