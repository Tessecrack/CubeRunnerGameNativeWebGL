import type GameObject from "./GameObject.js";
import type Scene from "./Scene.js";
import WebGLWrapper from "./WebGLWrapper.js";

export default class Renderer {

    private _currentScene: Scene | undefined = undefined

    private _previousTimeRendererMs: number = 0

    public deltaTime: number = 0

    constructor() {

    }
    
    public setScene(scene: Scene) {
        this._currentScene = scene
    }

    public render(tick: number) {

        const currentTimeRendererMs = tick * 0.001;

        this.deltaTime = currentTimeRendererMs - this._previousTimeRendererMs

        this._previousTimeRendererMs = currentTimeRendererMs

        WebGLWrapper.resizeCanvas()
        if (this._currentScene) {
            const gameObjects = this._currentScene.getGameObjects()

            //WebGLWrapper.perspectiveCamera.updateCameraPosition(this.deltaTime)

            //WebGLWrapper.perspectiveCamera.updateCameraTarget(this.deltaTime)

            WebGLWrapper.perspectiveCamera.computeViewProjectionMatrix()

            if (gameObjects) {
                let lastProgram
                for (let gameObject of gameObjects) {
                    const program = gameObject.getProgram()
                    
                    if (program !== lastProgram) {
                        WebGLWrapper.useProgram(program)
                    }

                    lastProgram = program
                    
                    const attributesBuffersInfo = gameObject.getAttributesBuffersInfo()
                    for (const attributeBufferInfo of attributesBuffersInfo) {
                        WebGLWrapper.bindAttributesBuffer(attributeBufferInfo)
                    }

                    gameObject.updateTransform(this.deltaTime)

                    const uniformsMatInfo = gameObject.getUniformsMatInfo()
                    for (const uniformMatInfo of uniformsMatInfo) {
                        WebGLWrapper.setUniformMatValue(uniformMatInfo)
                    }

                    const uniformsVecInfo = gameObject.getUniformsVecInfo()
                    for (const uniformVecInfo of uniformsVecInfo) {
                        WebGLWrapper.setUniformVecValue(uniformVecInfo)
                    }
                    const drawMode = gameObject.getDrawMode()

                    WebGLWrapper.drawArrays(drawMode, 0, gameObject.countVertices)
                }
            }
        }

        requestAnimationFrame(this.render.bind(this))
    }
}