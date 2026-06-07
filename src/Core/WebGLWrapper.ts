export default class WebGLWrapper {
    private static _glContext: WebGLRenderingContext

    public static init() {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement

        if (!canvas) {
            throw new Error(`Cannot get canvas`)
        }

        this._glContext = canvas.getContext('webgl')!
    }

    public static getAttribLocation(program: WebGLProgram, nameAttrib: string): number {
        return this.getAttribLocation(program, nameAttrib)
    }

    public static enableVertexAttrib(attribLocation: number) {
        this._glContext.enableVertexAttribArray(attribLocation)
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

    public static useProgram(program: WebGLProgram) {
        this._glContext.useProgram(program)
    }

    public static createProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
        const program: WebGLProgram = this._glContext.createProgram()

        this._glContext.attachShader(program, vertexShader)
        this._glContext.attachShader(program, fragmentShader)

        this._glContext.linkProgram(program)

        const success = this._glContext.getProgramParameter(program, this._glContext.LINK_STATUS)

        if (success) {
            return program
        }

        let infoLog = this._glContext.getProgramInfoLog(program)

        if (infoLog === null) {
            infoLog = `Cannot create program`
        }

        this._glContext.deleteProgram(program)
        throw new Error(infoLog)
    }
}