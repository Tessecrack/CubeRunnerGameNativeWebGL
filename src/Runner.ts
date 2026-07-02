import FiguresUtils from "./Core/Common/Utils/FiguresUtils.js"
import InputController from "./Core/InputController.js"
import InputKeyboardSystem from "./Core/InputKeyboardSystem.js"
import PerspectiveCamera from "./Core/PerspectiveCamera.js"
import Renderer from "./Core/Renderer.js"
import Scene from "./Core/Scene.js"
import WebGLWrapper from "./Core/WebGLWrapper.js"

export default class Runner {
    private _renderer: Renderer
    private _inputSystem: InputKeyboardSystem
    private _inputController: InputController
    private _webGlWrapper: WebGLWrapper
    private _isTest: boolean = false

    constructor() {
        this._webGlWrapper = new WebGLWrapper()        
        this._inputSystem = new InputKeyboardSystem(window)
        this._inputController = new InputController(this._inputSystem)
        this._renderer = new Renderer(this._webGlWrapper)
    }

    public run() {
        let scene: Scene | null = null

        if (this._isTest) {
            scene = this._initializeTestScene()
        } else {
            scene = this._initializeCubeRunnerScene()
        }
        

        this._renderer.render(0)
    }

    private _initializeCubeRunnerScene(): Scene {
        const cubeFigureInfo = FiguresUtils.getColorCube(0, 0, 0, 10, 10, 10)
        const scene = new Scene("CUBE RUNNER SCENE")
        const defaultColorProgramInfo = this._webGlWrapper.createDefaultColorProgramInfo()
        const object = this._webGlWrapper.getDefaultColorGameObjectByFigureInfo(defaultColorProgramInfo, cubeFigureInfo)
        this._inputController.setGameObject(object)
        //object.transform.translation.x = i * 16
        //object.transform.translation.y = j * 16
        /*
        for (let i = -30; i < 30; ++i) {
            for (let j = -30; j < 30; ++j) {
                const object = this._webGlWrapper.getDefaultColorGameObjectByFigureInfo(defaultColorProgramInfo, cubeFigureInfo)
                object.transform.translation.x = i * 16
                object.transform.translation.y = j * 16
                
                object.setUpdateTransformFunction((transform, deltaTime) => {
                    const rotationSpeed = 1.1
                    transform.rotation.y += i/2 * rotationSpeed * deltaTime
                    transform.rotation.z += j/2 * rotationSpeed * deltaTime
                })
                scene.addObject(object)
            }
        }
        */
        scene.addObject(object)



        const perspectiveCamera = this._webGlWrapper.createPerspectiveCamera()

        this._renderer.setPerspectiveCamera(perspectiveCamera)
        this._renderer.setScene(scene)

        return scene
    }

    private _initializeTestScene(): Scene {
        const defaultColorProgramInfo = this._webGlWrapper.createDefaultColorProgramInfo()
        const triangleFigureInfo = FiguresUtils.getColorTriangle()
        const object = this._webGlWrapper.getDefaultColorGameObjectByFigureInfo(defaultColorProgramInfo, triangleFigureInfo)

        const testScene = new Scene("Test scene")
        testScene.addObject(object)

        const perspectiveCamera = this._webGlWrapper.createPerspectiveCamera()

        this._renderer.setPerspectiveCamera(perspectiveCamera)
        this._renderer.setScene(testScene)

        return testScene
    }
}