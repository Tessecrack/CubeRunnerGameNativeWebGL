import GLAttributeInfo from "./Core/Common/GLAttributeInfo.js"
import GLBufferInfo from "./Core/Common/GLBufferInfo.js"
import FiguresUtils from "./Core/Common/Utils/FiguresUtils.js"
import MatricesUtils from "./Core/Common/Utils/MatricesUtils.js"
import GameObject from "./Core/GameObject.js"
import Renderer from "./Core/Renderer.js"
import Scene from "./Core/Scene.js"
import DefaultColorShadersSources from "./Core/ShaderSources/DefaultColorShadersSources.js"
import WebGLWrapper from "./Core/WebGLWrapper.js"

export default class Runner {
    private _renderer: Renderer

    constructor() {
        WebGLWrapper.init()
        WebGLWrapper.initViewport()
        this._renderer = new Renderer()
    }

    public run() {
        const scene = this._initializeTestScene()
        //const scene = this._initializeCubeRunnerScene()
        this._renderer.setScene(scene)

        this._renderer.render(0)
    }

    private _initializeCubeRunnerScene(): Scene {
        const scene = new Scene("CUBE RUNNER SCENE")

        return scene
    }

    private _initializeTestScene(): Scene {
        const vertexShaderSrc = DefaultColorShadersSources.getVertexShaderSource()
        const fragmentShaderSrc = DefaultColorShadersSources.getFragmentShaderSource()

        const vertexShader = WebGLWrapper.createVertexShader(vertexShaderSrc)
        const fragmentShader = WebGLWrapper.createFragmentShader(fragmentShaderSrc)

        const programInfo = WebGLWrapper.createProgramInfo(vertexShader, fragmentShader)
        const program = programInfo.getProgram()

        const triangleFigureInfo = FiguresUtils.getColorTriangle()
        const bufferTriangle = WebGLWrapper.createBufferInfo(triangleFigureInfo.vertices)

        const floatSize = Float32Array.BYTES_PER_ELEMENT; // 4
        const stride = 7 * floatSize;   

        const attributePositionInfo = WebGLWrapper.createAttributeInfo(program, 'a_position', 3, stride, 0)
        const attributeColorInfo = WebGLWrapper.createAttributeInfo(program, 'a_color', 4, stride, 3 * floatSize)

        const linkedAttributes = WebGLWrapper.linkAttributesToBuffer([attributePositionInfo, attributeColorInfo], bufferTriangle)

        const uniformMatrixInfo = WebGLWrapper.createUniformMatInfo(program, 'u_matrix', MatricesUtils.identity())
        const uniformColorMultInfo = WebGLWrapper.createUniformVecInfo(program, 'u_multColor', [1, 1, 1, 1])

        const object = WebGLWrapper.createGameObject(programInfo, [linkedAttributes], triangleFigureInfo.countVertices)

        object.addUniformMatInfo(uniformMatrixInfo)
        object.addUniformVecInfo(uniformColorMultInfo)
        
        const testScene = new Scene("Test scene")
        testScene.addObject(object)

        return testScene
    }


}