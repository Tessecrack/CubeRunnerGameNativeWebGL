import GLAttributeInfo from "./Core/Common/GLAttributeInfo.js"
import GLBufferInfo from "./Core/Common/GLBufferInfo.js"
import FigureInfo from "./Core/Common/Utils/FigureInfo.js"
import FiguresUtils from "./Core/Common/Utils/FiguresUtils.js"
import MatricesUtils from "./Core/Common/Utils/MatricesUtils.js"
import GameObject from "./Core/GameObject.js"
import Renderer from "./Core/Renderer.js"
import Scene from "./Core/Scene.js"
import DefaultColorShadersSources from "./Core/ShaderSources/DefaultColorShadersSources.js"
import WebGLWrapper from "./Core/WebGLWrapper.js"

export default class Runner {
    private _renderer: Renderer

    private _isTest: boolean = true

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
        const cubeFigureInfo = FiguresUtils.getColorCube(0, 0, 0, 50, 50, 50)
        const object = WebGLWrapper.getDefaultColorGameObjectByFigureInfo(cubeFigureInfo)
        
        const scene = new Scene("CUBE RUNNER SCENE")
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