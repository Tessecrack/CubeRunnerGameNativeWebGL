export default class WebGLWrapper {
    static _glContext;
    static init() {
        const canvas = document.getElementById('canvas');
        if (!canvas) {
            throw new Error(`Cannot get canvas`);
        }
        this._glContext = canvas.getContext('webgl');
    }
    static getAttribLocation(program, nameAttrib) {
        return this.getAttribLocation(program, nameAttrib);
    }
    static enableVertexAttribArray(attribLocation) {
        this._glContext.enableVertexAttribArray(attribLocation);
    }
    static bindBuffer(buffer) {
        //this._glContext.bindBuffer()
    }
    static getUniformLocation(program, nameUniform) {
        return this.getUniformLocation(program, nameUniform);
    }
    static createVertexShader(vertexShaderSource) {
        return this.createShader(this._glContext.VERTEX_SHADER, vertexShaderSource);
    }
    static createFragmentShader(fragmentShaderSource) {
        return this.createShader(this._glContext.FRAGMENT_SHADER, fragmentShaderSource);
    }
    static createShader(type, shaderSource) {
        const shader = this._glContext.createShader(type);
        if (shader === null) {
            throw new Error(`Cannot create shader by src ${shaderSource}`);
        }
        this._glContext.shaderSource(shader, shaderSource);
        this._glContext.compileShader(shader);
        const success = this._glContext.getShaderParameter(shader, this._glContext.COMPILE_STATUS);
        if (success) {
            return shader;
        }
        let infoLog = this._glContext.getShaderInfoLog(shader);
        if (infoLog === null) {
            infoLog = `Cannot create shader by src ${shaderSource}`;
        }
        this._glContext.deleteShader(shader);
        throw new Error(infoLog);
    }
    static useProgram(program) {
        this._glContext.useProgram(program);
    }
    static createProgram(vertexShader, fragmentShader) {
        const program = this._glContext.createProgram();
        this._glContext.attachShader(program, vertexShader);
        this._glContext.attachShader(program, fragmentShader);
        this._glContext.linkProgram(program);
        const success = this._glContext.getProgramParameter(program, this._glContext.LINK_STATUS);
        if (success) {
            return program;
        }
        let infoLog = this._glContext.getProgramInfoLog(program);
        if (infoLog === null) {
            infoLog = `Cannot create program`;
        }
        this._glContext.deleteProgram(program);
        throw new Error(infoLog);
    }
}
//# sourceMappingURL=WebGLWrapper.js.map