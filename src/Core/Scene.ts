import type GameObject from "./GameObject.js";

export default class Scene {
    
    private _name: string 

    private _gameObjects: GameObject[] = []

    constructor(name: string) {
        this._name = name
    }

    getGameObjects(): GameObject[] {
        return this._gameObjects
    }

    addObject(gameObject: GameObject) {
        this._gameObjects.push(gameObject)
    }

    removeObject(gameObject: GameObject): boolean {
        const index = this._gameObjects.indexOf(gameObject)

        if (index === -1) {
            return false
        }

        this._gameObjects.slice(index, 1)
        return true
    }
}