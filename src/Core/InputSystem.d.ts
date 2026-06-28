export type InputKeyPressedCallbackFunction = () => void;
export default class InputSystem {
    private static _upKeyCode;
    private static _leftKeyCode;
    private static _downKeyCode;
    private static _rightKeyCode;
    private static _spaceKeyCode;
    private _window;
    upKeyPressed: InputKeyPressedCallbackFunction | null;
    leftKeyPressed: InputKeyPressedCallbackFunction | null;
    downKeyPressed: InputKeyPressedCallbackFunction | null;
    rightKeyPressed: InputKeyPressedCallbackFunction | null;
    spaceKeyPressed: InputKeyPressedCallbackFunction | null;
    constructor(window: Window);
    private _handleKeyDown;
    private _handleUpKeyDown;
    private _handleLeftKeyDown;
    private _handleDownKeyDown;
    private _handleRightKeyDown;
    private _handleSpaceKeyDown;
}
//# sourceMappingURL=InputSystem.d.ts.map