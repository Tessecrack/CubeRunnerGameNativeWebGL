export default class GLAttributeInfo {
    attributeLocation;
    componentsNumberPerVertexAttribute;
    typeComponentVertexAttribute;
    normalized;
    stride;
    offset;
    constructor(attributeLocation, componentsNumberPerVertexAttribute, typeComponentVertexAttribute, normalized, stride, offset) {
        this.attributeLocation = attributeLocation;
        this.componentsNumberPerVertexAttribute = componentsNumberPerVertexAttribute;
        this.typeComponentVertexAttribute = typeComponentVertexAttribute;
        this.normalized = normalized;
        this.stride = stride;
        this.offset = offset;
    }
}
//# sourceMappingURL=GLAttributeInfo.js.map