export default class DefaultColorShadersSources {
    static _vertexShaderSrc = `
attribute vec4 a_position;
attribute vec4 a_color;

uniform mat4 u_modelMatrix;
uniform mat4 u_projectionMatrix;
uniform mat4 u_viewMatrix;

varying vec4 v_color;

void main() 
{
    vec4 worldPosition = u_modelMatrix * a_position;
    gl_Position = u_projectionMatrix * u_viewMatrix * worldPosition;

    v_color = a_color;
}`;
    static _fragmentShaderSrc = `
precision mediump float;

uniform vec4 u_multColor;

varying vec4 v_color;

void main() 
{
    gl_FragColor = v_color * u_multColor;
}`;
    static getVertexShaderSource() {
        return this._vertexShaderSrc;
    }
    static getFragmentShaderSource() {
        return this._fragmentShaderSrc;
    }
}
//# sourceMappingURL=DefaultColorShadersSources.js.map