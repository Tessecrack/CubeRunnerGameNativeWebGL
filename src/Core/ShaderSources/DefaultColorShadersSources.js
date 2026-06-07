export default class DefaultColorShadersSources {
    static _vertexShaderSrc = `
attribute vec4 a_position;
attribute vec4 a_color;

uniform mat4 u_matrix;

varying vec4 v_color;

void main() 
{
    gl_Position = u_matrix * a_position;
    v_color = a_color;
}`;
    static _fragmentShaderSrc = `
precision mediump float;

uniform vec4 u_multColor;

varying vec4 v_color;

void main() 
{
    gl_FragColor = v_color;
}`;
    static getVertexShaderSource() {
        return this._vertexShaderSrc;
    }
    static getFragmentShaderSource() {
        return this._fragmentShaderSrc;
    }
}
//# sourceMappingURL=DefaultColorShadersSources.js.map