import Renderer from "./Core/Renderer.js";
import Scene from "./Core/Scene.js";
import DefaultColorShadersSources from "./Core/ShaderSources/DefaultColorShadersSources.js";
import WebGLWrapper from "./Core/WebGLWrapper.js";
export default class Runner {
    _renderer;
    constructor() {
        WebGLWrapper.init();
        this._renderer = new Renderer();
    }
    run() {
        const scene = this._initializeScene();
        this._renderer.setScene(scene);
        this._renderer.render(0);
    }
    _initializeScene() {
        const vertexShaderSrc = DefaultColorShadersSources.getVertexShaderSource();
        const fragmentShaderSrc = DefaultColorShadersSources.getFragmentShaderSource();
        const vertexShader = WebGLWrapper.createVertexShader(vertexShaderSrc);
        const fragmentShader = WebGLWrapper.createFragmentShader(fragmentShaderSrc);
        const program = WebGLWrapper.createProgram(vertexShader, fragmentShader);
        const attributePositionLocation = WebGLWrapper.getAttribLocation(program, 'a_position');
        const attributeColorLocation = WebGLWrapper.getAttribLocation(program, 'a_color');
        const u_matrix = WebGLWrapper.getUniformLocation(program, 'u_matrix');
        const u_multColor = WebGLWrapper.getUniformLocation(program, 'u_colorMult');
        //const object = new GameObject(program, )
        const testScene = new Scene("Test scene");
        return testScene;
    }
}
//# sourceMappingURL=Runner.js.map