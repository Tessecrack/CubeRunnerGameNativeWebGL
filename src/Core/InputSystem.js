export default class InputSystem {
    _window;
    constructor(window) {
        this._window = window;
        this._window.addEventListener('keydown', this._handleKeyDown);
    }
    _handleKeyDown(event) {
        console.log(`Key pressed: ${event.key}`);
        console.log(`Physical code: ${event.code}`);
    }
}
//# sourceMappingURL=InputSystem.js.map