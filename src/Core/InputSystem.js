export default class InputSystem {
    static _upKeyCode = 'KeyW';
    static _leftKeyCode = 'KeyA';
    static _downKeyCode = 'KeyS';
    static _rightKeyCode = 'KeyD';
    static _spaceKeyCode = 'Space';
    _window;
    constructor(window) {
        this._window = window;
        this._window.addEventListener('keydown', this._handleKeyDown);
    }
    _handleKeyDown(event) {
        switch (event.code) {
            case 'KeyW': break;
            case 'KeyA': break;
        }
    }
}
//# sourceMappingURL=InputSystem.js.map