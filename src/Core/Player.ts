import type GameObject from "./GameObject.js";

export default class Player {

    public gameObject: GameObject

    constructor(gameObject: GameObject) {
        this.gameObject = gameObject
    }
}