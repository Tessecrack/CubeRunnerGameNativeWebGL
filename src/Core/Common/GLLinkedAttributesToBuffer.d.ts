import type GLAttributeInfo from "./GLAttributeInfo.js";
import type GLBufferInfo from "./GLBufferInfo.js";
export default class GLLinkedAttributesToBuffer {
    protected _attributesInfo: GLAttributeInfo[];
    bufferInfo: GLBufferInfo;
    constructor(target: GLenum, bufferInfo: GLBufferInfo);
    addAttributeInfo(attributeInfo: GLAttributeInfo): void;
    getAttributesInfo(): GLAttributeInfo[];
}
//# sourceMappingURL=GLLinkedAttributesToBuffer.d.ts.map