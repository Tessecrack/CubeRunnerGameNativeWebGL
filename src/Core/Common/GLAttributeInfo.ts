export default class GLAttributeInfo {

    public attributeLocation: number

    public componentsNumberPerVertexAttribute: number

    public typeComponentVertexAttribute: GLenum

    public normalized: boolean

    public stride: number

    public offset: number

    constructor(
        attributeLocation: number, 
        componentsNumberPerVertexAttribute: number,
        typeComponentVertexAttribute: GLenum,
        normalized: boolean,
        stride: number,
        offset: number
    ) {
        this.attributeLocation = attributeLocation
        this.componentsNumberPerVertexAttribute = componentsNumberPerVertexAttribute
        this.typeComponentVertexAttribute = typeComponentVertexAttribute
        this.normalized = normalized
        this.stride = stride
        this.offset = offset
    }
}