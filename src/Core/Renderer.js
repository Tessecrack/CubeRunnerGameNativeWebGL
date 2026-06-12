import WebGLWrapper from "./WebGLWrapper.js";
export default class Renderer {
    _currentScene = undefined;
    _previousTimeRendererMs = 0;
    deltaTime = 0;
    constructor() {
    }
    setScene(scene) {
        this._currentScene = scene;
    }
    render(tick) {
        const currentTimeRendererMs = tick * 0.001;
        this.deltaTime = currentTimeRendererMs - this._previousTimeRendererMs;
        this._previousTimeRendererMs = currentTimeRendererMs;
        WebGLWrapper.resizeCanvas();
        if (this._currentScene) {
            const gameObjects = this._currentScene.getGameObjects();
            if (gameObjects) {
                let lastProgram;
                for (let gameObject of gameObjects) {
                    const program = gameObject.getProgram();
                    if (program !== lastProgram) {
                        WebGLWrapper.useProgram(program);
                    }
                    lastProgram = program;
                    const attributesBuffersInfo = gameObject.getAttributesBuffersInfo();
                    for (const attributeBufferInfo of attributesBuffersInfo) {
                        WebGLWrapper.bindAttributesBuffer(attributeBufferInfo);
                    }
                    const uniformsMatInfo = gameObject.getUniformsMatInfo();
                    for (const uniformMatInfo of uniformsMatInfo) {
                        WebGLWrapper.setUniformMatValue(uniformMatInfo);
                    }
                    const uniformsVecInfo = gameObject.getUniformsVecInfo();
                    for (const uniformVecInfo of uniformsVecInfo) {
                        WebGLWrapper.setUniformVecValue(uniformVecInfo);
                    }
                    const drawMode = gameObject.getDrawMode();
                    WebGLWrapper.drawArrays(drawMode, 0, gameObject.countVertices);
                }
            }
        }
        requestAnimationFrame(this.render.bind(this));
    }
}
//# sourceMappingURL=Renderer.js.map