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
                }
            }
        }
        requestAnimationFrame(this.render.bind(this));
    }
    _drawObject(gameObject) {
        if (!gameObject) {
            return;
        }
        const attributesBuffersInfo = gameObject.getAttributesBuffersInfo();
        for (const attributeBufferInfo of attributesBuffersInfo) {
            const attribLocation = attributeBufferInfo.getAttribLocation();
            WebGLWrapper.enableVertexAttribArray(attribLocation);
        }
    }
}
//# sourceMappingURL=Renderer.js.map