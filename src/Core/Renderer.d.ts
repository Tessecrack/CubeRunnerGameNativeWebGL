import type Scene from "./Scene.js";
export default class Renderer {
    private _currentScene;
    private _previousTimeRendererMs;
    deltaTime: number;
    constructor();
    setScene(scene: Scene): void;
    render(tick: number): void;
}
//# sourceMappingURL=Renderer.d.ts.map