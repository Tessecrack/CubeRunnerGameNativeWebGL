export type InputKeyPressedCallbackFunction = () => void

export default class InputSystem {

    private static _upKeyCode = 'KeyW'
    private static _leftKeyCode = 'KeyA'
    private static _downKeyCode = 'KeyS'
    private static _rightKeyCode = 'KeyD'

    private static _spaceKeyCode = 'Space'


    private _window: Window


    public upKeyPressed: InputKeyPressedCallbackFunction | null = null
    public leftKeyPressed: InputKeyPressedCallbackFunction | null = null
    public downKeyPressed: InputKeyPressedCallbackFunction | null = null
    public rightKeyPressed: InputKeyPressedCallbackFunction | null = null
    public spaceKeyPressed: InputKeyPressedCallbackFunction | null = null



    constructor(window: Window) {
        this._window = window
        this._window.addEventListener('keydown', this._handleKeyDown)
    }

    private _handleKeyDown(event: KeyboardEvent): void {

        switch(event.code) {
            case InputSystem._upKeyCode: 
                this._handleUpKeyDown()
                break

            case InputSystem._leftKeyCode: 
                this._handleLeftKeyDown()
                break

            case InputSystem._downKeyCode:
                this._handleDownKeyDown()
                break

            case InputSystem._rightKeyCode:
                this._handleRightKeyDown()
                break

            case InputSystem._spaceKeyCode:
                this._handleSpaceKeyDown()
                break
        }
    }

    private _handleUpKeyDown() {
        if (this.upKeyPressed !== null) {
            this.upKeyPressed()
        }
    }

    private _handleLeftKeyDown() {
        if (this.leftKeyPressed !== null) {
            this.leftKeyPressed()
        }
    }

    private _handleDownKeyDown() {
        if (this.downKeyPressed !== null) {
            this.downKeyPressed()
        }
    }

    private _handleRightKeyDown() {
        if (this.rightKeyPressed !== null) {
            this.rightKeyPressed()
        }
    }

    private _handleSpaceKeyDown() {
        if (this.spaceKeyPressed !== null) {
            this.spaceKeyPressed()
        }
    }
}