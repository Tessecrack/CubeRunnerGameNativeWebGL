import type GLAttributesBufferInfo from "./Common/GLAttributesBufferInfo.js";
import type GLProgramInfo from "./Common/GLProgramInfo.js";
import Transform from "./Transform.js";
export default class GameObject {
    private _programInfo;
    private _attributesBuffersInfo;
    transform: Transform;
    constructor(programInfo: GLProgramInfo, attributesBuffersInfo: GLAttributesBufferInfo[]);
    getProgram(): WebGLProgram;
    getAttributesBuffersInfo(): GLAttributesBufferInfo[];
}
//# sourceMappingURL=GameObject.d.ts.map