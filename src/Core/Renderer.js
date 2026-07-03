import WebGLWrapper from "./WebGLWrapper.js";
export default class Renderer {
    _webGlWrapper;
    _perspectiveCamera = null;
    constructor(webGlWrapper) {
        this._webGlWrapper = webGlWrapper;
        this._webGlWrapper.initViewport();
    }
    setPerspectiveCamera(perspectiveCamera) {
        this._perspectiveCamera = perspectiveCamera;
    }
    render(deltaTime, gameObjects) {
        this._renderGameObjects(gameObjects);
    }
    _renderGameObjects(gameObjects) {
        if (this._perspectiveCamera === null) {
            console.warn(`THERE IS NO CAMERA!`);
            return;
        }
        let lastProgram;
        this._webGlWrapper.resizeCanvas(this._perspectiveCamera);
        this._perspectiveCamera.computeViewMatrix();
        for (let gameObject of gameObjects) {
            const program = gameObject.getProgram();
            if (program != lastProgram) {
                this._webGlWrapper.useProgram(program);
                this._updatePerspectiveCameraByProgram(program);
            }
            lastProgram = program;
            const attributesBuffersInfo = gameObject.getAttributesBuffersInfo();
            for (const attributeBufferInfo of attributesBuffersInfo) {
                this._webGlWrapper.bindAttributesBuffer(attributeBufferInfo);
            }
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
    _updatePerspectiveCameraByProgram(program) {
        if (this._perspectiveCamera === null) {
            return;
        }
        this._webGlWrapper.updatePerspectiveCameraByProgram(program, this._perspectiveCamera);
        const uniformViewMatrixInfo = this._perspectiveCamera.getUniformViewMatrixInfo();
        if (uniformViewMatrixInfo !== null) {
            this._webGlWrapper.setUniformMatValue(uniformViewMatrixInfo);
        }
        const uniformProjectionMatrixInfo = this._perspectiveCamera.getUniformProjectionMatrixInfo();
        if (uniformProjectionMatrixInfo !== null) {
            this._webGlWrapper.setUniformMatValue(uniformProjectionMatrixInfo);
        }
    }
}
//# sourceMappingURL=Renderer.js.map