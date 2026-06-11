import type GLAttributesBufferInfo from "./Common/GLAttributesBufferInfo.js";
import type GLProgramInfo from "./Common/GLProgramInfo.js";
import type GLUniformMatInfo from "./Common/GLUniformMatInfo.js";
import type GLUniformVecInfo from "./Common/GLUniformVecInfo.js";
import Transform from "./Transform.js";
export default class GameObject {
    private _programInfo;
    private _attributesBuffersInfo;
    private _uniformsVecInfo;
    private _uniformsMatInfo;
    transform: Transform;
    constructor(programInfo: GLProgramInfo, attributesBuffersInfo: GLAttributesBufferInfo[]);
    getProgram(): WebGLProgram;
    getAttributesBuffersInfo(): GLAttributesBufferInfo[];
    getUniformsVecInfo(): GLUniformVecInfo[];
    getUniformsMatInfo(): GLUniformMatInfo[];
    addUniformVecInfo(uniformVecInfo: GLUniformVecInfo): void;
    addUniformMatInfo(uniformMatInfo: GLUniformMatInfo): void;
}
//# sourceMappingURL=GameObject.d.ts.map