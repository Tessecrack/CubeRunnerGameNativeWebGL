import WebGLWrapper from "./WebGLWrapper.js";
export default class Renderer {
    _webGlWrapper;
    _perspectiveCamera = null;
    _currentScene = null;
    _previousTimeRendererMs = 0;
    deltaTime = 0;
    constructor(webGlWrapper) {
        this._webGlWrapper = webGlWrapper;
        this._webGlWrapper.initViewport();
    }
    setPerspectiveCamera(perspectiveCamera) {
        this._perspectiveCamera = perspectiveCamera;
    }
    setScene(scene) {
        this._currentScene = scene;
    }
    render(tick) {
        const currentTimeRendererMs = tick * 0.001;
        this.deltaTime = currentTimeRendererMs - this._previousTimeRendererMs;
        this._previousTimeRendererMs = currentTimeRendererMs;
        this._webGlWrapper.resizeCanvas();
        if (this._currentScene !== null) {
            const gameObjects = this._currentScene.getGameObjects();
            if (this._perspectiveCamera === null) {
            }
            else {
                this._renderGameObjects(gameObjects);
            }
        }
        requestAnimationFrame(this.render.bind(this));
    }
    _renderGameObjects(gameObjects) {
        if (this._perspectiveCamera === null) {
            console.warn(`THERE IS NO CAMERA!`);
            return;
        }
        let lastProgram;
        this._perspectiveCamera.computeViewMatrix();
        for (let gameObject of gameObjects) {
            const program = gameObject.getProgram();
            if (program !== lastProgram) {
                this._webGlWrapper.useProgram(program);
            }
            lastProgram = program;
            const attributesBuffersInfo = gameObject.getAttributesBuffersInfo();
            for (const attributeBufferInfo of attributesBuffersInfo) {
                this._webGlWrapper.bindAttributesBuffer(attributeBufferInfo);
            }
            gameObject.updateTransform(this.deltaTime);
            const uniformsMatInfo = gameObject.getUniformsMatInfo();
            for (const uniformMatInfo of uniformsMatInfo) {
                this._webGlWrapper.setUniformMatValue(uniformMatInfo);
            }
            const uniformsVecInfo = gameObject.getUniformsVecInfo();
            for (const uniformVecInfo of uniformsVecInfo) {
                this._webGlWrapper.setUniformVecValue(uniformVecInfo);
            }
            const drawMode = gameObject.getDrawMode();
            this._webGlWrapper.drawArrays(drawMode, 0, gameObject.countVertices);
        }
    }
}
//# sourceMappingURL=Renderer.js.map