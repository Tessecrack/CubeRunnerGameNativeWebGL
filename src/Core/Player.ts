import type GameObject from "./GameObject.js";

export default class Player {

    public gameObject: GameObject
    public speed: number = 10

    constructor(gameObject: GameObject) {
        this.gameObject = gameObject
    }
}