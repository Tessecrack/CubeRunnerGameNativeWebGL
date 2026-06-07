import type GameObject from "./GameObject.js";
import type Scene from "./Scene.js";
import WebGLWrapper from "./WebGLWrapper.js";

export default class Renderer {

    private _currentScene: Scene | undefined = undefined

    constructor() {

    }

    public setScene(scene: Scene) {
        this._currentScene = scene
    }

    public render(tick: number) {
        if (this._currentScene) {
            const gameObjects = this._currentScene.getGameObjects()

            if (gameObjects) {
                let lastProgram
                for (let gameObject of gameObjects) {
                    const program = gameObject.getProgram()
                    
                    if (program !== lastProgram) {
                        WebGLWrapper.useProgram(program)
                    }

                    lastProgram = program
                }
            }
        }

        requestAnimationFrame(this.render.bind(this))
    }

    private _drawObject(gameObject: GameObject) {
        if (!gameObject) {
            return
        }
        const attributesBuffersInfo = gameObject.getAttributesBuffersInfo()

        for (const attributeBufferInfo of attributesBuffersInfo) {
            const attribLocation = attributeBufferInfo.getAttribLocation()
            WebGLWrapper.enableVertexAttribArray(attribLocation)

            
        }
    }
}