import type GLLinkedAttributesToBuffer from "./Common/GLLinkedAttributesToBuffer.js"
import type GLProgramInfo from "./Common/GLProgramInfo.js"
import type GLUniformMatInfo from "./Common/GLUniformMatInfo.js"
import type GLUniformVecInfo from "./Common/GLUniformVecInfo.js"
import Transform from "./Transform.js"

export type GameObjectUpdateTransformFunction = (transform: Transform, deltaTime: number) => void

export default class GameObject {
    private _programInfo: GLProgramInfo

    private _attributesBuffersInfo: GLLinkedAttributesToBuffer[]

    private _uniformModelMatrixInfo: GLUniformMatInfo

    private _uniformsVecInfo: GLUniformVecInfo[] = []

    private _uniformsMatInfo: GLUniformMatInfo[] = []

    private _drawMode: GLenum // for example, TRIANGLES

    private _updateTransformFunction: GameObjectUpdateTransformFunction | null = null

    public transform: Transform = new Transform()

    public countVertices: number

    constructor(
        programInfo:GLProgramInfo, 
        attributesBuffersInfo: GLLinkedAttributesToBuffer[],
        uniformModelMatInfo: GLUniformMatInfo,
        drawMode: GLenum,
        countVertices: number
    ) {
        this._programInfo = programInfo
        this._attributesBuffersInfo = attributesBuffersInfo
        this._uniformModelMatrixInfo = uniformModelMatInfo
        this._drawMode = drawMode
        this.countVertices = countVertices
    }

    public getProgram(): WebGLProgram {
        return this._programInfo.getProgram()
    }

    public getAttributesBuffersInfo(): GLLinkedAttributesToBuffer[] {
        return this._attributesBuffersInfo
    }

    public getUniformsVecInfo() {
        return this._uniformsVecInfo
    }

    public getUniformsMatInfo() {
        return this._uniformsMatInfo
    }

    public getDrawMode() {
        return this._drawMode
    }

    public addUniformVecInfo(uniformVecInfo: GLUniformVecInfo) {
        this._uniformsVecInfo.push(uniformVecInfo)
    }

    public addUniformMatInfo(uniformMatInfo: GLUniformMatInfo) {
        this._uniformsMatInfo.push(uniformMatInfo)
    }

    public setUpdateTransformFunction(updateTransformFunc: GameObjectUpdateTransformFunction) {
        this._updateTransformFunction = updateTransformFunc
    }

    public updateTransform(deltaTime: number) {
        if (this._updateTransformFunction !== null) {
            this._updateTransformFunction(this.transform, deltaTime)
        }
    }

    public updateMatrix(viewProjectionMatrix: number[]) {

    }
}