export default class InputSystem {

    private _window: Window

    constructor(window: Window) {
        this._window = window
        this._window.addEventListener('keydown', this._handleKeyDown)
    }

    private _handleKeyDown(event: KeyboardEvent): void {
        console.log(`Key pressed: ${event.key}`)
        console.log(`Physical code: ${event.code}`)
    }
}