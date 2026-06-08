import type GLAttributeInfo from "./GLAttributeInfo.js";
import type GLBufferInfo from "./GLBufferInfo.js";
export default class GLAttributesBufferInfo {
    protected _attributesInfo: GLAttributeInfo[];
    bufferInfo: GLBufferInfo;
    constructor(target: GLenum, bufferInfo: GLBufferInfo);
    addAttributesInfo(attributeInfo: GLAttributeInfo): void;
    getAttributesInfo(): GLAttributeInfo[];
}
//# sourceMappingURL=GLAttributesBufferInfo.d.ts.map