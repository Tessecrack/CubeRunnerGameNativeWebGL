import type Renderer from "./Renderer.js";
import type Scene from "./Scene.js";
import type UpdateManager from "./UpdateManager.js";
export default class GameLoopManager {
    private _updateManager;
    private _renderer;
    private _previousTimeRendererMs;
    private _currentScene;
    constructor(updateManager: UpdateManager, renderer: Renderer);
    start(): void;
    setScene(scene: Scene): void;
    private update;
}
//# sourceMappingURL=GameLoopManager.d.ts.map