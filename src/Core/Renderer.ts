import type GameObject from "./GameObject.js";
import type PerspectiveCamera from "./PerspectiveCamera.js";
import WebGLWrapper from "./WebGLWrapper.js";

export default class Renderer {
    private _webGlWrapper: WebGLWrapper

    private _perspectiveCamera: PerspectiveCamera | null = null


    constructor(webGlWrapper: WebGLWrapper) {
        this._webGlWrapper = webGlWrapper
        this._webGlWrapper.initViewport()
    }

    public setPerspectiveCamera(perspectiveCamera: PerspectiveCamera) {
        this._perspectiveCamera = perspectiveCamera
    }

    public render(deltaTime: number, gameObjects: GameObject[]) {
        this._renderGameObjects(gameObjects)
    }

    _renderGameObjects(gameObjects: GameObject[]) {
        if (this._perspectiveCamera === null) {
            console.warn(`THERE IS NO CAMERA!`)
            return
        }

        let lastProgram

        this._webGlWrapper.resizeCanvas(this._perspectiveCamera)
        this._perspectiveCamera.computeViewMatrix()
        for (let gameObject of gameObjects) {
            const program = gameObject.getProgram()

            if (program != lastProgram) {
                this._webGlWrapper.useProgram(program)
                this._updatePerspectiveCameraByProgram(program)
            }

            lastProgram = program

            const attributesBuffersInfo = gameObject.getAttributesBuffersInfo()
            for (const attributeBufferInfo of attributesBuffersInfo) {
                this._webGlWrapper.bindAttributesBuffer(attributeBufferInfo)
            }

            const uniformsMatInfo = gameObject.getUniformsMatInfo()
            for (const uniformMatInfo of uniformsMatInfo) {
                this._webGlWrapper.setUniformMatValue(uniformMatInfo)
            }

            const uniformsVecInfo = gameObject.getUniformsVecInfo()
            for (const uniformVecInfo of uniformsVecInfo) {
                this._webGlWrapper.setUniformVecValue(uniformVecInfo)
            }
            const drawMode = gameObject.getDrawMode()

            this._webGlWrapper.drawArrays(drawMode, 0, gameObject.countVertices)
        }

    }

    _updatePerspectiveCameraByProgram(program: WebGLProgram) {
        if (this._perspectiveCamera === null) {
            return
        }

        this._webGlWrapper.updatePerspectiveCameraByProgram(program, this._perspectiveCamera)

        const uniformViewMatrixInfo = this._perspectiveCamera.getUniformViewMatrixInfo()
        if (uniformViewMatrixInfo !== null) {
            this._webGlWrapper.setUniformMatValue(uniformViewMatrixInfo)
        }

        const uniformProjectionMatrixInfo = this._perspectiveCamera.getUniformProjectionMatrixInfo()
        if (uniformProjectionMatrixInfo !== null) {
            this._webGlWrapper.setUniformMatValue(uniformProjectionMatrixInfo)
        }
    }
}