export default class GLProgramInfo {
    protected _program: WebGLProgram

    constructor(program: WebGLProgram) {
        this._program = program
    }

    public getProgram() {
        return this._program
    }
}