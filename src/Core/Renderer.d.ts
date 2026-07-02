import type GameObject from "./GameObject.js";
import type InputController from "./InputController.js";
import type PerspectiveCamera from "./PerspectiveCamera.js";
import type Scene from "./Scene.js";
import WebGLWrapper from "./WebGLWrapper.js";
export default class Renderer {
    private _webGlWrapper;
    private _perspectiveCamera;
    private _currentScene;
    private _previousTimeRendererMs;
    private _inputController;
    deltaTime: number;
    constructor(webGlWrapper: WebGLWrapper);
    setPerspectiveCamera(perspectiveCamera: PerspectiveCamera): void;
    setScene(scene: Scene): void;
    setInputController(inputController: InputController): void;
    render(tick: number): void;
    _renderGameObjects(gameObjects: GameObject[]): void;
    _updatePerspectiveCameraByProgram(program: WebGLProgram): void;
}
//# sourceMappingURL=Renderer.d.ts.map