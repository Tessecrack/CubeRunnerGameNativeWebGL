export type InputKeyPressedCallbackFunction = () => void

export default class InputKeyboardSystem {

    private static _upKeyCode = 'KeyW'
    private static _leftKeyCode = 'KeyA'
    private static _downKeyCode = 'KeyS'
    private static _rightKeyCode = 'KeyD'

    private static _spaceKeyCode = 'Space'


    private _window: Window


    private _isKeyUpPressed: boolean = false
    private _isKeyDownPressed: boolean = false
    private _isKeyLeftPressed: boolean = false
    private _isKeyRightPressed: boolean = false

    constructor(window: Window) {
        this._window = window
        this._window.addEventListener('keydown', this._handleKeyDown.bind(this))
        this._window.addEventListener('keyup', this._handleKeyUp.bind(this))
    }

    public get isUpPressed(): boolean { return this._isKeyUpPressed }
    public get isLeftPressed(): boolean { return this._isKeyLeftPressed }
    public get isDownPressed(): boolean { return this._isKeyDownPressed }
    public get isRightPressed(): boolean { return this._isKeyRightPressed }

    private _handleKeyUp(event: KeyboardEvent) {
                switch (event.code) {
            case InputKeyboardSystem._upKeyCode:
                this._isKeyUpPressed = false
                break

            case InputKeyboardSystem._leftKeyCode:
                this._isKeyLeftPressed = false
                break

            case InputKeyboardSystem._downKeyCode:
                this._isKeyDownPressed = false
                break

            case InputKeyboardSystem._rightKeyCode:
                this._isKeyRightPressed = false
                break

            case InputKeyboardSystem._spaceKeyCode:
                
                break
        }
    }

    private _handleKeyDown(event: KeyboardEvent): void {
        switch (event.code) {
            case InputKeyboardSystem._upKeyCode:
                this._isKeyUpPressed = true
                break

            case InputKeyboardSystem._leftKeyCode:
                this._isKeyLeftPressed = true
                break

            case InputKeyboardSystem._downKeyCode:
                this._isKeyDownPressed = true
                break

            case InputKeyboardSystem._rightKeyCode:
                this._isKeyRightPressed = true
                break

            case InputKeyboardSystem._spaceKeyCode:
                
                break
        }
    }
}