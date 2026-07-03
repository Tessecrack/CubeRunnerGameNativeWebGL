import type GameObject from "./GameObject.js";
import type PerspectiveCamera from "./PerspectiveCamera.js";
import WebGLWrapper from "./WebGLWrapper.js";
export default class Renderer {
    private _webGlWrapper;
    private _perspectiveCamera;
    constructor(webGlWrapper: WebGLWrapper);
    setPerspectiveCamera(perspectiveCamera: PerspectiveCamera): void;
    render(deltaTime: number, gameObjects: GameObject[]): void;
    _renderGameObjects(gameObjects: GameObject[]): void;
    _updatePerspectiveCameraByProgram(program: WebGLProgram): void;
}
//# sourceMappingURL=Renderer.d.ts.map