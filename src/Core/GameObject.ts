import type GLAttributeBufferInfo from "./Common/GLAttributeBufferInfo.js"
import type GLProgramInfo from "./Common/GLProgramInfo.js"
import Transform from "./Transform.js"

export default class GameObject {
    private _programInfo: GLProgramInfo
    private _attributesBuffersInfo: GLAttributeBufferInfo[]

    public transform: Transform = new Transform()

    constructor(
        programInfo:GLProgramInfo, 
        attributesBuffersInfo: GLAttributeBufferInfo[],
    ) {
        this._programInfo = programInfo
        this._attributesBuffersInfo = attributesBuffersInfo
    }

    public getProgram(): WebGLProgram {
        return this._programInfo.getProgram()
    }

    public getAttributesBuffersInfo(): GLAttributeBufferInfo[] {
        return this._attributesBuffersInfo
    }
}