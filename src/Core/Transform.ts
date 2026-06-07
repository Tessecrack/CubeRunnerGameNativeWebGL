import Vector3 from "./Vector3.js";

export default class Transform {
    public translation: Vector3 = new Vector3(0, 0, 0)
    public rotation: Vector3 = new Vector3(0, 0, 0)
    public scaling: Vector3 = new Vector3(1, 1, 1)
}