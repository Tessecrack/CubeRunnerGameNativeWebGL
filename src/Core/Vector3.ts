export default class Vector3 {
    public x: number
    public y: number
    public z: number

    constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
    }

    public static up: number[] = [0, 1, 0]
    public static right: number[] = [1, 0, 0]
    public static forward: number[] = [0, 0, 1]
}