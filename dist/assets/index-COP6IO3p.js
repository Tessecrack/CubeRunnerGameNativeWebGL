(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{static _glContext;static init(){let e=document.getElementById(`canvas`);if(!e)throw Error(`Cannot get canvas`);this._glContext=e.getContext(`webgl`)}static getAttribLocation(e,t){return this.getAttribLocation(e,t)}static enableVertexAttribArray(e){this._glContext.enableVertexAttribArray(e)}static bindAttributesBuffer(e){let t=e.bufferInfo.buffer,n=e.bufferInfo.target;this._glContext.bindBuffer(n,t);let r=e.getAttributesInfo();for(let e of r){let t=e.attributeLocation,n=e.typeComponentVertexAttribute,r=e.componentsNumberPerVertexAttribute,i=e.normalized,a=e.stride,o=e.offset;this._glContext.vertexAttribPointer(t,r,n,i,a,o),this._glContext.enableVertexAttribArray(t)}}static setUniformValue(e){}static getUniformLocation(e,t){return this.getUniformLocation(e,t)}static createVertexShader(e){return this.createShader(this._glContext.VERTEX_SHADER,e)}static createFragmentShader(e){return this.createShader(this._glContext.FRAGMENT_SHADER,e)}static createShader(e,t){let n=this._glContext.createShader(e);if(n===null)throw Error(`Cannot create shader by src ${t}`);if(this._glContext.shaderSource(n,t),this._glContext.compileShader(n),this._glContext.getShaderParameter(n,this._glContext.COMPILE_STATUS))return n;let r=this._glContext.getShaderInfoLog(n);throw r===null&&(r=`Cannot create shader by src ${t}`),this._glContext.deleteShader(n),Error(r)}static useProgram(e){this._glContext.useProgram(e)}static createProgram(e,t){let n=this._glContext.createProgram();if(this._glContext.attachShader(n,e),this._glContext.attachShader(n,t),this._glContext.linkProgram(n),this._glContext.getProgramParameter(n,this._glContext.LINK_STATUS))return n;let r=this._glContext.getProgramInfoLog(n);throw r===null&&(r=`Cannot create program`),this._glContext.deleteProgram(n),Error(r)}},t=class{_currentScene=void 0;constructor(){}setScene(e){this._currentScene=e}render(t){if(this._currentScene){let t=this._currentScene.getGameObjects();if(t){let n;for(let r of t){let t=r.getProgram();t!==n&&e.useProgram(t),n=t;let i=r.getAttributesBuffersInfo();for(let t of i)e.bindAttributesBuffer(t);let a=r.getUniformsMatInfo();for(let e of a);let o=r.getUniformsVecInfo();for(let e of o);}}}requestAnimationFrame(this.render.bind(this))}_drawObject(e){}},n=class{_name;_gameObjects=[];constructor(e){this._name=e}getGameObjects(){return this._gameObjects}addObject(e){this._gameObjects.push(e)}removeObject(e){let t=this._gameObjects.indexOf(e);return t===-1?!1:(this._gameObjects.slice(t,1),!0)}},r=class{static _vertexShaderSrc=`
attribute vec4 a_position;
attribute vec4 a_color;

uniform mat4 u_matrix;

varying vec4 v_color;

void main() 
{
    gl_Position = u_matrix * a_position;
    v_color = a_color;
}`;static _fragmentShaderSrc=`
precision mediump float;

uniform vec4 u_multColor;

varying vec4 v_color;

void main() 
{
    gl_FragColor = v_color;
}`;static getVertexShaderSource(){return this._vertexShaderSrc}static getFragmentShaderSource(){return this._fragmentShaderSrc}},i=class{_renderer;constructor(){e.init(),this._renderer=new t}run(){let e=this._initializeScene();this._renderer.setScene(e),this._renderer.render(0)}_initializeScene(){let t=r.getVertexShaderSource(),i=r.getFragmentShaderSource(),a=e.createVertexShader(t),o=e.createFragmentShader(i),s=e.createProgram(a,o);return e.getAttribLocation(s,`a_position`),e.getAttribLocation(s,`a_color`),e.getUniformLocation(s,`u_matrix`),e.getUniformLocation(s,`u_colorMult`),new n(`Test scene`)}};function a(){new i().run()}a();