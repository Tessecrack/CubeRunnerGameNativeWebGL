import CollisionBox from "./Core/Common/CollisionBox.js";
import FiguresUtils from "./Core/Common/Utils/FiguresUtils.js";
import GameLoopManager from "./Core/GameLoopManager.js";
import InputController from "./Core/InputController.js";
import InputKeyboardSystem from "./Core/InputKeyboardSystem.js";
import PerspectiveCamera from "./Core/PerspectiveCamera.js";
import Player from "./Core/Player.js";
import PlayerMovementController from "./Core/PlayerMovementController.js";
import Renderer from "./Core/Renderer.js";
import Scene from "./Core/Scene.js";
import UpdateManager from "./Core/UpdateManager.js";
import WebGLWrapper from "./Core/WebGLWrapper.js";
export default class Runner {
    _renderer;
    _updateManager;
    _gameLoopManager;
    _inputSystem;
    _inputController;
    _webGlWrapper;
    _isTest = false;
    constructor() {
        this._webGlWrapper = new WebGLWrapper();
        this._inputSystem = new InputKeyboardSystem(window);
        this._inputController = new InputController(this._inputSystem);
        this._renderer = new Renderer(this._webGlWrapper);
        this._updateManager = new UpdateManager();
        this._gameLoopManager = new GameLoopManager(this._updateManager, this._renderer);
    }
    run() {
        let scene = null;
        if (this._isTest) {
            scene = this._initializeTestScene();
        }
        else {
            scene = this._initializeCubeRunnerScene();
        }
        this._gameLoopManager.start();
    }
    _initializeCubeRunnerScene() {
        const cubeFigureInfo = FiguresUtils.getColorCube(10, 10, 10);
        const scene = new Scene("CUBE RUNNER SCENE");
        const defaultColorProgramInfo = this._webGlWrapper.createDefaultColorProgramInfo();
        const cubePlayerObject = this._webGlWrapper.getDefaultColorGameObjectByFigureInfo(defaultColorProgramInfo, cubeFigureInfo);
        cubePlayerObject.transform.translation.x = 0;
        cubePlayerObject.transform.translation.y = 0;
        cubePlayerObject.transform.translation.z = 0;
        cubePlayerObject.collisionBox = new CollisionBox(cubeFigureInfo.width, cubeFigureInfo.height, cubeFigureInfo.depth);
        const obstacleFigureInfo = FiguresUtils.getColorCube(50, 10, 10);
        const obstacleObject = this._webGlWrapper.getDefaultColorGameObjectByFigureInfo(defaultColorProgramInfo, obstacleFigureInfo);
        obstacleObject.transform.translation.x = 10;
        obstacleObject.transform.translation.y = -50;
        obstacleObject.transform.translation.z = 0;
        obstacleObject.collisionBox = new CollisionBox(obstacleFigureInfo.width, obstacleFigureInfo.height, obstacleFigureInfo.depth);
        const player = new Player(cubePlayerObject);
        const playerMovementController = new PlayerMovementController(player, this._inputController);
        scene.addObject(obstacleObject);
        scene.addObject(cubePlayerObject);
        console.log;
        this._gameLoopManager.setScene(scene);
        const perspectiveCamera = this._webGlWrapper.createPerspectiveCamera();
        this._renderer.setPerspectiveCamera(perspectiveCamera);
        this._updateManager.setPerspectiveCamera(perspectiveCamera);
        this._updateManager.setPlayerMovementController(playerMovementController);
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
        return testScene;
    }
}
//# sourceMappingURL=Runner.js.map