export type InputKeyPressedCallbackFunction = () => void;
export default class InputKeyboardSystem {
    private static _upKeyCode;
    private static _leftKeyCode;
    private static _downKeyCode;
    private static _rightKeyCode;
    private static _spaceKeyCode;
    private _window;
    private _isKeyUpPressed;
    private _isKeyDownPressed;
    private _isKeyLeftPressed;
    private _isKeyRightPressed;
    constructor(window: Window);
    get isUpPressed(): boolean;
    get isLeftPressed(): boolean;
    get isDownPressed(): boolean;
    get isRightPressed(): boolean;
    private _handleKeyUp;
    private _handleKeyDown;
}
//# sourceMappingURL=InputKeyboardSystem.d.ts.map