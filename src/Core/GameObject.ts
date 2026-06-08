import type GLAttributesBufferInfo from "./Common/GLAttributesBufferInfo.js"
import type GLProgramInfo from "./Common/GLProgramInfo.js"
import Transform from "./Transform.js"

export default class GameObject {
    private _programInfo: GLProgramInfo
    private _attributesBuffersInfo: GLAttributesBufferInfo[]

    public transform: Transform = new Transform()

    constructor(
        programInfo:GLProgramInfo, 
        attributesBuffersInfo: GLAttributesBufferInfo[],
    ) {
        this._programInfo = programInfo
        this._attributesBuffersInfo = attributesBuffersInfo
    }

    public getProgram(): WebGLProgram {
        return this._programInfo.getProgram()
    }

    public getAttributesBuffersInfo(): GLAttributesBufferInfo[] {
        return this._attributesBuffersInfo
    }
}