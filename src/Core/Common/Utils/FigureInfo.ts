export default class FigureInfo {
    public vertices: number[]
    public countVertices: number

    public width: number
    public height: number
    public depth: number

    constructor(vertices: number[], countVertices: number, width: number, height: number, depth: number) {
        this.vertices = vertices
        this.countVertices = countVertices

        this.width = width
        this.height = height
        this.depth = depth
    }
}