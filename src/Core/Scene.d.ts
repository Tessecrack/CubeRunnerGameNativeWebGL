import type GameObject from "./GameObject.js";
export default class Scene {
    private _name;
    private _gameObjects;
    constructor(name: string);
    getGameObjects(): GameObject[];
    addObject(gameObject: GameObject): void;
    removeObject(gameObject: GameObject): boolean;
}
//# sourceMappingURL=Scene.d.ts.map