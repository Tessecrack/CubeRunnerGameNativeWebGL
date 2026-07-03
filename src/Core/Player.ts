import type GameObject from "./GameObject.js";

export default class Player {

    public gameObject: GameObject
    public speed: number = 100

    constructor(gameObject: GameObject) {
        this.gameObject = gameObject
    }
}