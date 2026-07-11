import type GameObject from "../GameObject.js";

export default class CollisionManager {
    constructor() {

    }

    public isCollision(first: GameObject, second: GameObject): boolean {

        return this._checkAABB()
    }

    private _checkAABB(): boolean {
        return false
    }
}