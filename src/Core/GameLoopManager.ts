import DeltaTimeManager from "./DeltaTimeManager.js"
import type Renderer from "./Renderer.js"
import type Scene from "./Scene.js"
import type UpdateManager from "./UpdateManager.js"

export default class GameLoopManager {

    private _updateManager: UpdateManager
    private _renderer: Renderer

    private _previousTimeRendererMs: number = 0

    private _currentScene: Scene | null = null

    constructor(updateManager: UpdateManager, renderer: Renderer) {
        this._updateManager = updateManager
        this._renderer = renderer
    }

    public start(): void {
        this.update(0)
    }

    public setScene(scene: Scene) {
        this._currentScene = scene
    }

    private update(tick: number) {
        const currentTimeRendererMs = tick * 0.001;

        DeltaTimeManager.deltaTime = currentTimeRendererMs - this._previousTimeRendererMs

        this._previousTimeRendererMs = currentTimeRendererMs
        
        if (this._currentScene !== null) {
            const gameObjects = this._currentScene.getGameObjects()
            this._updateManager.updateLogic(DeltaTimeManager.deltaTime, gameObjects)
            this._renderer.render(DeltaTimeManager.deltaTime, gameObjects)
        }

        requestAnimationFrame(this.update.bind(this))
    }
}