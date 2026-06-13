import GLAttributeInfo from "./Common/GLAttributeInfo.js";
import GLLinkedAttributesToBuffer from "./Common/GLLinkedAttributesToBuffer.js";
import GLBufferInfo from "./Common/GLBufferInfo.js";
import GLUniformInfoArrayBase from "./Common/GLUniformInfoArrayBase.js";
import GLUniformMatInfo from "./Common/GLUniformMatInfo.js";
import GLUniformVecInfo from "./Common/GLUniformVecInfo.js";
import type { UniformValueArrayFunction } from "./Common/GLUniformInfoArrayBase.js";
import GLProgramInfo from "./Common/GLProgramInfo.js";
import GameObject from "./GameObject.js";
import type FigureInfo from "./Common/Utils/FigureInfo.js";
export default class WebGLWrapper {
    private static _glContext;
    static init(): void;
    static initViewport(): void;
    static resizeCanvas(): void;
    static getAttribLocation(program: WebGLProgram, nameAttrib: string): number;
    static createAttributeInfo(program: WebGLProgram, nameAttrib: string, componentsNumberPerVertexAttribute: number, stride: number, offset: number): GLAttributeInfo;
    static linkAttributesToBuffer(attributesInfo: GLAttributeInfo[], bufferInfo: GLBufferInfo): GLLinkedAttributesToBuffer;
    static createUniformVecInfo(program: WebGLProgram, nameUniform: string, value: number[], updateValue?: UniformValueArrayFunction | null): GLUniformVecInfo;
    static createUniformMatInfo(program: WebGLProgram, nameUniform: string, value: number[], updateValue?: UniformValueArrayFunction | null): GLUniformMatInfo;
    static enableVertexAttribArray(attribLocation: number): void;
    static bindAttributesBuffer(attributesBufferInfo: GLLinkedAttributesToBuffer): void;
    static setUniformValue(uniformInfo: GLUniformInfoArrayBase): void;
    static setUniformVecValue(uniformVecInfo: GLUniformVecInfo): void;
    static setUniformMatValue(uniformMatInfo: GLUniformMatInfo): void;
    static getUniformLocation(program: WebGLProgram, nameUniform: string): WebGLUniformLocation;
    static createVertexShader(vertexShaderSource: string): WebGLShader;
    static createFragmentShader(fragmentShaderSource: string): WebGLShader;
    static createShader(type: GLenum, shaderSource: string): WebGLShader;
    static createBufferInfo(bufferData: number[]): GLBufferInfo;
    static useProgram(program: WebGLProgram): void;
    static createProgramInfo(vertexShader: WebGLShader, fragmentShader: WebGLShader): GLProgramInfo;
    static drawArrays(drawMode: GLenum, firstVertex: number, countVertices: number): void;
    static createGameObject(programInfo: GLProgramInfo, linkedAttributesToBuffer: GLLinkedAttributesToBuffer[], countVertices: number): GameObject;
    static getDefaultColorGameObjectByFigureInfo(figureInfo: FigureInfo): GameObject;
}
//# sourceMappingURL=WebGLWrapper.d.ts.map