import type CollisionBox from "./Common/CollisionBox.js";
import type GLLinkedAttributesToBuffer from "./Common/GLLinkedAttributesToBuffer.js";
import type GLProgramInfo from "./Common/GLProgramInfo.js";
import type GLUniformMatInfo from "./Common/GLUniformMatInfo.js";
import type GLUniformVecInfo from "./Common/GLUniformVecInfo.js";
import type FigureInfo from "./Common/Utils/FigureInfo.js";
import Transform from "./Transform.js";
export type GameObjectUpdateTransformFunction = (transform: Transform, deltaTime: number) => void;
export default class GameObject {
    private _programInfo;
    private _attributesBuffersInfo;
    private _uniformsVecInfo;
    private _uniformsMatInfo;
    private _drawMode;
    private _collisionBox;
    transform: Transform;
    countVertices: number;
    constructor(programInfo: GLProgramInfo, attributesBuffersInfo: GLLinkedAttributesToBuffer[], drawMode: GLenum, figureInfo: FigureInfo);
    hasCollisionBox(): boolean;
    getCollisionBox(): CollisionBox | null;
    getProgram(): WebGLProgram;
    getAttributesBuffersInfo(): GLLinkedAttributesToBuffer[];
    getUniformsVecInfo(): GLUniformVecInfo[];
    getUniformsMatInfo(): GLUniformMatInfo[];
    getDrawMode(): number;
    addUniformVecInfo(uniformVecInfo: GLUniformVecInfo): void;
    addUniformMatInfo(uniformMatInfo: GLUniformMatInfo): void;
}
//# sourceMappingURL=GameObject.d.ts.map