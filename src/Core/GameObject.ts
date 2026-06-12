import type GLLinkedAttributesToBuffer from "./Common/GLLinkedAttributesToBuffer.js"
import type GLProgramInfo from "./Common/GLProgramInfo.js"
import type GLUniformMatInfo from "./Common/GLUniformMatInfo.js"
import type GLUniformVecInfo from "./Common/GLUniformVecInfo.js"
import Transform from "./Transform.js"

export default class GameObject {
    private _programInfo: GLProgramInfo

    private _attributesBuffersInfo: GLLinkedAttributesToBuffer[]

    private _uniformsVecInfo: GLUniformVecInfo[] = []

    private _uniformsMatInfo: GLUniformMatInfo[] = []

    public transform: Transform = new Transform()



    constructor(
        programInfo:GLProgramInfo, 
        attributesBuffersInfo: GLLinkedAttributesToBuffer[],
    ) {
        this._programInfo = programInfo
        this._attributesBuffersInfo = attributesBuffersInfo
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

    public addUniformVecInfo(uniformVecInfo: GLUniformVecInfo) {
        this._uniformsVecInfo.push(uniformVecInfo)
    }

    public addUniformMatInfo(uniformMatInfo: GLUniformMatInfo) {
        this._uniformsMatInfo.push(uniformMatInfo)
    }
}