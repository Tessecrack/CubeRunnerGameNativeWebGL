import GLAttributeInfo from "./Common/GLAttributeInfo.js"
import GLLinkedAttributesToBuffer from "./Common/GLLinkedAttributesToBuffer.js"
import GLBufferInfo from "./Common/GLBufferInfo.js"
import GLUniformInfoArrayBase from "./Common/GLUniformInfoArrayBase.js"
import GLUniformMatInfo from "./Common/GLUniformMatInfo.js"
import GLUniformVecInfo from "./Common/GLUniformVecInfo.js"
import type { UniformValueArrayFunction } from "./Common/GLUniformInfoArrayBase.js"
import GLProgramInfo from "./Common/GLProgramInfo.js"
import GameObject from "./GameObject.js"

export default class WebGLWrapper {
    private static _glContext: WebGLRenderingContext

    public static init() {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement

        if (!canvas) {
            throw new Error(`Cannot get canvas`)
        }

        this._glContext = canvas.getContext('webgl')!
    }

    public static initViewport() {
        //this._glContext.enable(this._glContext.CULL_FACE)
        this._glContext.enable(this._glContext.DEPTH_TEST)
        this._glContext.viewport(0, 0, this._glContext.canvas.width, this._glContext.canvas.height)
        this._glContext.clear(this._glContext.COLOR_BUFFER_BIT | this._glContext.DEPTH_BUFFER_BIT)
    }

    public static resizeCanvas() {
        const elementCanvas = this._glContext.canvas as HTMLCanvasElement
        const clientWidth = elementCanvas.clientWidth
        const clientHeight = elementCanvas.clientHeight

        if (this._glContext.canvas.width !== clientWidth || this._glContext.canvas.height !== clientHeight) {
            this._glContext.canvas.width = elementCanvas.clientWidth
            this._glContext.canvas.height = elementCanvas.clientHeight

            this._glContext.viewport(0, 0, this._glContext.canvas.width, this._glContext.canvas.height)
        }
    }

    public static getAttribLocation(program: WebGLProgram, nameAttrib: string): number {
        return this.getAttribLocation(program, nameAttrib)
    }

    public static createAttributeInfo(program: WebGLProgram, nameAttrib: string, componentsNumberPerVertexAttribute: number,
        stride: number,
        offset: number): GLAttributeInfo {
        const attribLocation = this._glContext.getAttribLocation(program, nameAttrib)
        const attribInfo = new GLAttributeInfo(attribLocation, componentsNumberPerVertexAttribute, this._glContext.FLOAT, false, stride, offset)
        return attribInfo
    }

    public static linkAttributesToBuffer(attributesInfo: GLAttributeInfo[], bufferInfo: GLBufferInfo): GLLinkedAttributesToBuffer {
        const linkedAttributesToBuffer = new GLLinkedAttributesToBuffer(bufferInfo.target, bufferInfo)

        for (const attributeInfo of attributesInfo) {
            linkedAttributesToBuffer.addAttributeInfo(attributeInfo)
        }

        return linkedAttributesToBuffer
    }

    public static createUniformVecInfo(program: WebGLProgram, nameUniform: string, value: number[], updateValue: UniformValueArrayFunction | null = null): GLUniformVecInfo {
        const uniformLocation = this._glContext.getUniformLocation(program, nameUniform)

        if (uniformLocation === null) {
            throw new Error(`Cannot find uniform by name ${nameUniform}`)
        }

        const uniformVecInfo = new GLUniformVecInfo(uniformLocation, value)

        if (updateValue !== null) {
            uniformVecInfo.setUpdateValueFunc(updateValue)
        }

        return uniformVecInfo
    }

    public static createUniformMatInfo(program: WebGLProgram, nameUniform: string, value: number[], updateValue: UniformValueArrayFunction | null = null): GLUniformMatInfo {
        const uniformLocation = this._glContext.getUniformLocation(program, nameUniform)

        if (uniformLocation === null) {
            throw new Error(`Cannot find uniform by name ${nameUniform}`)
        }

        const uniformMatInfo = new GLUniformMatInfo(uniformLocation, value)

        if (updateValue !== null) {
            uniformMatInfo.setUpdateValueFunc(updateValue)
        }

        return uniformMatInfo
    }

    public static enableVertexAttribArray(attribLocation: number) {
        this._glContext.enableVertexAttribArray(attribLocation)
    }

    public static bindAttributesBuffer(attributesBufferInfo: GLLinkedAttributesToBuffer) {

        const buffer = attributesBufferInfo.bufferInfo.buffer
        const target = attributesBufferInfo.bufferInfo.target

        this._glContext.bindBuffer(target, buffer)

        const attibutesInfo = attributesBufferInfo.getAttributesInfo()

        for (const attributeInfo of attibutesInfo) {
            const attributeLocation = attributeInfo.attributeLocation
            const type = attributeInfo.typeComponentVertexAttribute
            const size = attributeInfo.componentsNumberPerVertexAttribute
            const normalized = attributeInfo.normalized
            const stride = attributeInfo.stride
            const offset = attributeInfo.offset

            this._glContext.vertexAttribPointer(attributeLocation, size, type, normalized, stride, offset)
            this._glContext.enableVertexAttribArray(attributeLocation)
        }
    }

    public static setUniformValue(uniformInfo: GLUniformInfoArrayBase) {

    }

    public static setUniformVecValue(uniformVecInfo: GLUniformVecInfo) {
        uniformVecInfo.updateValue()

        const value = uniformVecInfo.value
        const location = uniformVecInfo.getUniformLocation()

        switch (value.length) {
            case 1:
                this._glContext.uniform1fv(location, value)
                break
            case 2:
                this._glContext.uniform2fv(location, value)
                break
            case 3:
                this._glContext.uniform3fv(location, value)
                break
            case 4:
                this._glContext.uniform4fv(location, value)
                break
            default:
                throw new Error(`setUniformVecValue ${value}. Cannot calculate uniform by length ${value.length}`)
        }
    }

    public static setUniformMatValue(uniformMatInfo: GLUniformMatInfo) {
        uniformMatInfo.updateValue()

        const value = uniformMatInfo.value
        const location = uniformMatInfo.getUniformLocation()

        switch (value.length) {
            case 4:
                this._glContext.uniformMatrix2fv(location, false, value)
                break
            case 9:
                this._glContext.uniformMatrix3fv(location, false, value)
                break
            case 16:
                this._glContext.uniformMatrix4fv(location, false, value)
                break;
            default:
                throw new Error(`setUniformMatValue ${value}. Cannot calculate uniform by length ${value.length}`)
        }
    }

    public static getUniformLocation(program: WebGLProgram, nameUniform: string): WebGLUniformLocation {
        return this.getUniformLocation(program, nameUniform)
    }

    public static createVertexShader(vertexShaderSource: string): WebGLShader {
        return this.createShader(this._glContext.VERTEX_SHADER, vertexShaderSource)
    }

    public static createFragmentShader(fragmentShaderSource: string): WebGLShader {
        return this.createShader(this._glContext.FRAGMENT_SHADER, fragmentShaderSource)
    }

    public static createShader(type: GLenum, shaderSource: string): WebGLShader {
        const shader: WebGLShader | null = this._glContext.createShader(type)

        if (shader === null) {
            throw new Error(`Cannot create shader by src ${shaderSource}`)
        }

        this._glContext.shaderSource(shader, shaderSource)
        this._glContext.compileShader(shader)

        const success = this._glContext.getShaderParameter(shader, this._glContext.COMPILE_STATUS)

        if (success) {
            return shader
        }

        let infoLog = this._glContext.getShaderInfoLog(shader)

        if (infoLog === null) {
            infoLog = `Cannot create shader by src ${shaderSource}`
        }

        this._glContext.deleteShader(shader)
        throw new Error(infoLog)
    }

    public static createBufferInfo(bufferData: number[]): GLBufferInfo {
        const buffer = this._glContext.createBuffer()
        const usage = this._glContext.STATIC_DRAW
        const target = this._glContext.ARRAY_BUFFER

        this._glContext.bindBuffer(target, buffer)
        this._glContext.bufferData(target, new Float32Array(bufferData), usage)

        const bufferInfo = new GLBufferInfo(this._glContext.ARRAY_BUFFER, usage, buffer)

        return bufferInfo
    }


    public static useProgram(program: WebGLProgram) {
        this._glContext.useProgram(program)
    }

    public static createProgramInfo(vertexShader: WebGLShader, fragmentShader: WebGLShader): GLProgramInfo {
        const program: WebGLProgram = this._glContext.createProgram()

        this._glContext.attachShader(program, vertexShader)
        this._glContext.attachShader(program, fragmentShader)

        this._glContext.linkProgram(program)

        const success = this._glContext.getProgramParameter(program, this._glContext.LINK_STATUS)

        if (success) {
            return new GLProgramInfo(program)
        }

        let infoLog = this._glContext.getProgramInfoLog(program)

        if (infoLog === null) {
            infoLog = `Cannot create program`
        }

        this._glContext.deleteProgram(program)
        throw new Error(infoLog)
    }

    public static drawArrays(drawMode: GLenum, firstVertex: number, countVertices: number) {
        this._glContext.drawArrays(drawMode, firstVertex, countVertices)
    }

    public static createGameObject(programInfo: GLProgramInfo, linkedAttributesToBuffer: GLLinkedAttributesToBuffer[], countVertices: number): GameObject {
        const gameObject = new GameObject(programInfo, linkedAttributesToBuffer, this._glContext.TRIANGLES, countVertices)
        return gameObject
    }
}