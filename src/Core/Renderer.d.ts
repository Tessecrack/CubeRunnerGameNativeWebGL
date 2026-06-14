import type GameObject from "./GameObject.js";
import type PerspectiveCamera from "./PerspectiveCamera.js";
import type Scene from "./Scene.js";
import WebGLWrapper from "./WebGLWrapper.js";
export default class Renderer {
    private _webGlWrapper;
    private _perspectiveCamera;
    private _currentScene;
    private _previousTimeRendererMs;
    deltaTime: number;
    constructor(webGlWrapper: WebGLWrapper);
    setPerspectiveCamera(perspectiveCamera: PerspectiveCamera): void;
    setScene(scene: Scene): void;
    render(tick: number): void;
    _renderGameObjects(gameObjects: GameObject[]): void;
}
//# sourceMappingURL=Renderer.d.ts.map