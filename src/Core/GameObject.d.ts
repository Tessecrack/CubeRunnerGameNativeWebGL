import type GLAttributeBufferInfo from "./Common/GLAttributeBufferInfo.js";
import type GLProgramInfo from "./Common/GLProgramInfo.js";
import Transform from "./Transform.js";
export default class GameObject {
    private _programInfo;
    private _attributesBuffersInfo;
    transform: Transform;
    constructor(programInfo: GLProgramInfo, attributesBuffersInfo: GLAttributeBufferInfo[]);
    getProgram(): WebGLProgram;
    getAttributesBuffersInfo(): GLAttributeBufferInfo[];
}
//# sourceMappingURL=GameObject.d.ts.map