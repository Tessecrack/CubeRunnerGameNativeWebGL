import FiguresUtils from "./Core/Common/Utils/FiguresUtils.js"
import Renderer from "./Core/Renderer.js"
import Scene from "./Core/Scene.js"
import WebGLWrapper from "./Core/WebGLWrapper.js"

export default class Runner {
    private _renderer: Renderer

    private _isTest: boolean = false

    constructor() {
        WebGLWrapper.init()
        WebGLWrapper.initViewport()
        this._renderer = new Renderer()
    }

    public run() {
        let scene: Scene | null = null

        if (this._isTest) {
            scene = this._initializeTestScene()
        } else {
            scene = this._initializeCubeRunnerScene()
        }

        this._renderer.setScene(scene)

        this._renderer.render(0)
    }

    private _initializeCubeRunnerScene(): Scene {
        const cubeFigureInfo = FiguresUtils.getColorCube(0, 0, 0, 10, 10, 10)
        const scene = new Scene("CUBE RUNNER SCENE")
        for (let i = -4; i < 4; ++i) {
            for (let j = -4; j < 4; ++j) {
                const object = WebGLWrapper.getDefaultColorGameObjectByFigureInfo(cubeFigureInfo)
                object.transform.translation.x = i * 20
                object.transform.translation.y = j * 20
                
                object.setUpdateTransformFunction((transform, deltaTime) => {
                    const rotationSpeed = 1.5
                    //transform.translation.y += rotationSpeed * deltaTime
                    transform.rotation.y += rotationSpeed * deltaTime
                    transform.rotation.x += rotationSpeed * deltaTime
                })
                scene.addObject(object)
            }
        }

        return scene
    }

    private _initializeTestScene(): Scene {

        const triangleFigureInfo = FiguresUtils.getColorTriangle()
        const object = WebGLWrapper.getDefaultColorGameObjectByFigureInfo(triangleFigureInfo)

        const testScene = new Scene("Test scene")
        testScene.addObject(object)

        return testScene
    }
}