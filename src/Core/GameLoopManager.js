import DeltaTimeManager from "./DeltaTimeManager.js";
export default class GameLoopManager {
    _updateManager;
    _renderer;
    _previousTimeRendererMs = 0;
    _currentScene = null;
    constructor(updateManager, renderer) {
        this._updateManager = updateManager;
        this._renderer = renderer;
    }
    start() {
        this.update(0);
    }
    setScene(scene) {
        this._currentScene = scene;
    }
    update(tick) {
        const currentTimeRendererMs = tick * 0.001;
        DeltaTimeManager.deltaTime = currentTimeRendererMs - this._previousTimeRendererMs;
        this._previousTimeRendererMs = currentTimeRendererMs;
        if (this._currentScene !== null) {
            const gameObjects = this._currentScene.getGameObjects();
            this._updateManager.updateLogic(DeltaTimeManager.deltaTime, gameObjects);
            this._renderer.render(DeltaTimeManager.deltaTime, gameObjects);
        }
        requestAnimationFrame(this.update.bind(this));
    }
}
//# sourceMappingURL=GameLoopManager.js.map