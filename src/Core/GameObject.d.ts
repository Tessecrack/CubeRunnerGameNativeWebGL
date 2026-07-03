import type GLLinkedAttributesToBuffer from "./Common/GLLinkedAttributesToBuffer.js";
import type GLProgramInfo from "./Common/GLProgramInfo.js";
import type GLUniformMatInfo from "./Common/GLUniformMatInfo.js";
import type GLUniformVecInfo from "./Common/GLUniformVecInfo.js";
import Transform from "./Transform.js";
export type GameObjectUpdateTransformFunction = (transform: Transform, deltaTime: number) => void;
export default class GameObject {
    private _programInfo;
    private _attributesBuffersInfo;
    private _uniformsVecInfo;
    private _uniformsMatInfo;
    private _drawMode;
    transform: Transform;
    countVertices: number;
    constructor(programInfo: GLProgramInfo, attributesBuffersInfo: GLLinkedAttributesToBuffer[], drawMode: GLenum, countVertices: number);
    getProgram(): WebGLProgram;
    getAttributesBuffersInfo(): GLLinkedAttributesToBuffer[];
    getUniformsVecInfo(): GLUniformVecInfo[];
    getUniformsMatInfo(): GLUniformMatInfo[];
    getDrawMode(): number;
    addUniformVecInfo(uniformVecInfo: GLUniformVecInfo): void;
    addUniformMatInfo(uniformMatInfo: GLUniformMatInfo): void;
}
//# sourceMappingURL=GameObject.d.ts.map