export default class InputSystem {

    private static _upKeyCode = 'KeyW'
    private static _leftKeyCode = 'KeyA'
    private static _downKeyCode = 'KeyS'
    private static _rightKeyCode = 'KeyD'

    private static _spaceKeyCode = 'Space'


    private _window: Window

    constructor(window: Window) {
        this._window = window
        this._window.addEventListener('keydown', this._handleKeyDown)
    }

    private _handleKeyDown(event: KeyboardEvent): void {

        switch(event.code) {
            case 'KeyW': break
            case 'KeyA': break
        }
    }
}