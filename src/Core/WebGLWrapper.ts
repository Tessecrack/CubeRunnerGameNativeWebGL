import GLAttributeInfo from "./Common/GLAttributeInfo.js"
import GLLinkedAttributesToBuffer from "./Common/GLLinkedAttributesToBuffer.js"
import GLBufferInfo from "./Common/GLBufferInfo.js"
import GLUniformInfoArrayBase from "./Common/GLUniformInfoArrayBase.js"
import GLUniformMatInfo from "./Common/GLUniformMatInfo.js"
import GLUniformVecInfo from "./Common/GLUniformVecInfo.js"
import type { UniformValueArrayFunction } from "./Common/GLUniformInfoArrayBase.js"
import GLProgramInfo from "./Common/GLProgramInfo.js"
import GameObject from "./GameObject.js"
import type FigureInfo from "./Common/Utils/FigureInfo.js"
import DefaultColorShadersSources from "./ShaderSources/DefaultColorShadersSources.js"
import MatricesUtils from "./Common/Utils/MatricesUtils.js"
import Transform from "./Transform.js"
import PerspectiveCamera from "./PerspectiveCamera.js"

export default class WebGLWrapper {
    private _glContext: WebGLRenderingContext    

    constructor() {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement
        if (!canvas) {
            throw new Error(`Cannot get canvas`)
        }
        this._glContext = canvas.getContext('webgl')!
        const fieldOfViewRadians = 60 * Math.PI / 180
        const aspect = this._glContext.canvas.width / this._glContext.canvas.height;
    }

    public initViewport() {
        this._glContext.enable(this._glContext.CULL_FACE)
        this._glContext.enable(this._glContext.DEPTH_TEST)
        this._glContext.viewport(0, 0, this._glContext.canvas.width, this._glContext.canvas.height)
        this._glContext.clear(this._glContext.COLOR_BUFFER_BIT | this._glContext.DEPTH_BUFFER_BIT)
    }

    public resizeCanvas() {
        const elementCanvas = this._glContext.canvas as HTMLCanvasElement
        const clientWidth = elementCanvas.clientWidth
        const clientHeight = elementCanvas.clientHeight

        if (this._glContext.canvas.width !== clientWidth || this._glContext.canvas.height !== clientHeight) {
            this._glContext.canvas.width = elementCanvas.clientWidth
            this._glContext.canvas.height = elementCanvas.clientHeight

            this._glContext.viewport(0, 0, this._glContext.canvas.width, this._glContext.canvas.height)
        }
    }

    public getAttribLocation(program: WebGLProgram, nameAttrib: string): number {
        return this.getAttribLocation(program, nameAttrib)
    }

    public createAttributeInfo(program: WebGLProgram, nameAttrib: string, componentsNumberPerVertexAttribute: number,
        stride: number,
        offset: number): GLAttributeInfo {
        const attribLocation = this._glContext.getAttribLocation(program, nameAttrib)
        const attribInfo = new GLAttributeInfo(attribLocation, componentsNumberPerVertexAttribute, this._glContext.FLOAT, false, stride, offset)
        return attribInfo
    }

    public linkAttributesToBuffer(attributesInfo: GLAttributeInfo[], bufferInfo: GLBufferInfo): GLLinkedAttributesToBuffer {
        const linkedAttributesToBuffer = new GLLinkedAttributesToBuffer(bufferInfo.target, bufferInfo)

        for (const attributeInfo of attributesInfo) {
            linkedAttributesToBuffer.addAttributeInfo(attributeInfo)
        }

        return linkedAttributesToBuffer
    }

    public createUniformVecInfo(program: WebGLProgram, nameUniform: string, value: number[], updateValue: UniformValueArrayFunction | null = null): GLUniformVecInfo {
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

    public createUniformMatInfo(program: WebGLProgram, nameUniform: string, value: number[], updateValue: UniformValueArrayFunction | null = null): GLUniformMatInfo {
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

    public enableVertexAttribArray(attribLocation: number) {
        this._glContext.enableVertexAttribArray(attribLocation)
    }

    public bindAttributesBuffer(attributesBufferInfo: GLLinkedAttributesToBuffer) {

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

    public setUniformValue(uniformInfo: GLUniformInfoArrayBase) {

    }

    public setUniformVecValue(uniformVecInfo: GLUniformVecInfo) {
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

    public setUniformMatValue(uniformMatInfo: GLUniformMatInfo) {
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

    public getUniformLocation(program: WebGLProgram, nameUniform: string): WebGLUniformLocation {
        return this.getUniformLocation(program, nameUniform)
    }

    public createVertexShader(vertexShaderSource: string): WebGLShader {
        return this.createShader(this._glContext.VERTEX_SHADER, vertexShaderSource)
    }

    public createFragmentShader(fragmentShaderSource: string): WebGLShader {
        return this.createShader(this._glContext.FRAGMENT_SHADER, fragmentShaderSource)
    }

    public createShader(type: GLenum, shaderSource: string): WebGLShader {
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

    public createBufferInfo(bufferData: number[]): GLBufferInfo {
        const buffer = this._glContext.createBuffer()
        const usage = this._glContext.STATIC_DRAW
        const target = this._glContext.ARRAY_BUFFER

        this._glContext.bindBuffer(target, buffer)
        this._glContext.bufferData(target, new Float32Array(bufferData), usage)

        const bufferInfo = new GLBufferInfo(this._glContext.ARRAY_BUFFER, usage, buffer)

        return bufferInfo
    }


    public useProgram(program: WebGLProgram) {
        this._glContext.useProgram(program)
    }

    public createProgramInfo(vertexShader: WebGLShader, fragmentShader: WebGLShader): GLProgramInfo {
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

    public drawArrays(drawMode: GLenum, firstVertex: number, countVertices: number) {
        this._glContext.drawArrays(drawMode, firstVertex, countVertices)
    }

    public createGameObject(programInfo: GLProgramInfo, 
        linkedAttributesToBuffer: GLLinkedAttributesToBuffer[],
        uniformModelMatrixInfo: GLUniformMatInfo,
        countVertices: number): GameObject {
        const gameObject = new GameObject(programInfo, linkedAttributesToBuffer, uniformModelMatrixInfo, this._glContext.TRIANGLES, countVertices)
        return gameObject
    }

    public createPerspectiveCamera(): PerspectiveCamera {
        const fieldOfViewRadians = 60 * Math.PI / 180
        const aspect = this._glContext.canvas.width / this._glContext.canvas.height;

        return new PerspectiveCamera(fieldOfViewRadians, aspect)
    }

    public getDefaultColorGameObjectByFigureInfo(figureInfo: FigureInfo): GameObject {
        const vertexShaderSrc = DefaultColorShadersSources.getVertexShaderSource()
        const fragmentShaderSrc = DefaultColorShadersSources.getFragmentShaderSource()

        const vertexShader = this.createVertexShader(vertexShaderSrc)
        const fragmentShader = this.createFragmentShader(fragmentShaderSrc)

        const programInfo = this.createProgramInfo(vertexShader, fragmentShader)
        const program = programInfo.getProgram()

        const bufferTriangle = this.createBufferInfo(figureInfo.vertices)

        const floatSize = Float32Array.BYTES_PER_ELEMENT; // 4
        const stride = 7 * floatSize;

        const attributePositionInfo = this.createAttributeInfo(program, 'a_position', 3, stride, 0)
        const attributeColorInfo = this.createAttributeInfo(program, 'a_color', 4, stride, 3 * floatSize)

        const linkedAttributes = this.linkAttributesToBuffer([attributePositionInfo, attributeColorInfo], bufferTriangle)

        const transform = new Transform()

        const uniformMatrixInfo = this.createUniformMatInfo(program, 'u_modelMatrix', MatricesUtils.identity())
        
        const uniformColorMultInfo = this.createUniformVecInfo(program, 'u_multColor', [0.7, 0.7, 0.7, 1])

        const object = this.createGameObject(programInfo, 
            [linkedAttributes], 
            uniformMatrixInfo,
            figureInfo.countVertices)

        object.addUniformVecInfo(uniformColorMultInfo)
        object.transform = transform

        return object
    }
}