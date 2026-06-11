import WebGLWrapper from "./WebGLWrapper.js";
export default class Renderer {
    _currentScene = undefined;
    constructor() {
    }
    setScene(scene) {
        this._currentScene = scene;
    }
    render(tick) {
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
                }
            }
        }
        requestAnimationFrame(this.render.bind(this));
    }
}
//# sourceMappingURL=Renderer.js.map