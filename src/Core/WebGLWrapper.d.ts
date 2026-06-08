import type GLAttributesBufferInfo from "./Common/GLAttributesBufferInfo.js";
import type GLUniformInfoBase from "./Common/GLUniformInfoBase.js";
export default class WebGLWrapper {
    private static _glContext;
    static init(): void;
    static getAttribLocation(program: WebGLProgram, nameAttrib: string): number;
    static enableVertexAttribArray(attribLocation: number): void;
    static bindAttributesBuffer(attributesBufferInfo: GLAttributesBufferInfo): void;
    static setUniformValue(uniformInfo: GLUniformInfoBase): void;
    static getUniformLocation(program: WebGLProgram, nameUniform: string): WebGLUniformLocation;
    static createVertexShader(vertexShaderSource: string): WebGLShader;
    static createFragmentShader(fragmentShaderSource: string): WebGLShader;
    static createShader(type: GLenum, shaderSource: string): WebGLShader;
    static useProgram(program: WebGLProgram): void;
    static createProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram;
}
//# sourceMappingURL=WebGLWrapper.d.ts.map