import FiguresUtils from "./Core/Common/Utils/FiguresUtils.js";
import PerspectiveCamera from "./Core/PerspectiveCamera.js";
import Renderer from "./Core/Renderer.js";
import Scene from "./Core/Scene.js";
import WebGLWrapper from "./Core/WebGLWrapper.js";
export default class Runner {
    _renderer;
    _webGlWrapper;
    _isTest = false;
    constructor() {
        this._webGlWrapper = new WebGLWrapper();
        this._renderer = new Renderer(this._webGlWrapper);
    }
    run() {
        let scene = null;
        if (this._isTest) {
            scene = this._initializeTestScene();
        }
        else {
            scene = this._initializeCubeRunnerScene();
        }
        this._renderer.render(0);
    }
    _initializeCubeRunnerScene() {
        const cubeFigureInfo = FiguresUtils.getColorCube(0, 0, 0, 10, 10, 10);
        const scene = new Scene("CUBE RUNNER SCENE");
        const defaultColorProgramInfo = this._webGlWrapper.createDefaultColorProgramInfo();
        for (let i = 0; i < 1; ++i) {
            for (let j = 0; j < 1; ++j) {
                const object = this._webGlWrapper.getDefaultColorGameObjectByFigureInfo(defaultColorProgramInfo, cubeFigureInfo);
                //object.transform.translation.x = i * 20
                //object.transform.translation.y = j * 20
                object.setUpdateTransformFunction((transform, deltaTime) => {
                    const rotationSpeed = 1.1;
                    transform.rotation.y += rotationSpeed * deltaTime;
                    transform.rotation.x += rotationSpeed * deltaTime;
                });
                scene.addObject(object);
            }
        }
        const perspectiveCamera = this._webGlWrapper.createPerspectiveCamera();
        this._renderer.setPerspectiveCamera(perspectiveCamera);
        this._renderer.setScene(scene);
        return scene;
    }
    _initializeTestScene() {
        const defaultColorProgramInfo = this._webGlWrapper.createDefaultColorProgramInfo();
        const triangleFigureInfo = FiguresUtils.getColorTriangle();
        const object = this._webGlWrapper.getDefaultColorGameObjectByFigureInfo(defaultColorProgramInfo, triangleFigureInfo);
        const testScene = new Scene("Test scene");
        testScene.addObject(object);
        const perspectiveCamera = this._webGlWrapper.createPerspectiveCamera();
        this._renderer.setPerspectiveCamera(perspectiveCamera);
        this._renderer.setScene(testScene);
        return testScene;
    }
}
//# sourceMappingURL=Runner.js.map