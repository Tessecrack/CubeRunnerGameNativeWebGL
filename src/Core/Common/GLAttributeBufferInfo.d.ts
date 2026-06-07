import type GLBufferInfo from "./GLBufferInfo.js";
export default class GLAttributeBufferInfo {
    protected _attribLocation: number;
    bufferInfo: GLBufferInfo;
    constructor(attribLocation: number, bufferInfo: GLBufferInfo);
    getAttribLocation(): number;
}
//# sourceMappingURL=GLAttributeBufferInfo.d.ts.map