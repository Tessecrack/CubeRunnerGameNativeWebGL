export default class DefaultColorShadersSources {
    private static _vertexShaderSrc = `
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
}` 

    private static _fragmentShaderSrc = `
precision mediump float;

uniform vec4 u_multColor;

varying vec4 v_color;

void main() 
{
    gl_FragColor = v_color * u_multColor;
}`

    public static getVertexShaderSource() {
        return this._vertexShaderSrc
    }

    public static getFragmentShaderSource() {
        return this._fragmentShaderSrc
    }
}