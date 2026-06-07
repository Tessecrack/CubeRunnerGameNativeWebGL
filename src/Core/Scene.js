export default class Scene {
    _name;
    _gameObjects = [];
    constructor(name) {
        this._name = name;
    }
    getGameObjects() {
        return this._gameObjects;
    }
    addObject(gameObject) {
        this._gameObjects.push(gameObject);
    }
    removeObject(gameObject) {
        const index = this._gameObjects.indexOf(gameObject);
        if (index === -1) {
            return false;
        }
        this._gameObjects.slice(index, 1);
        return true;
    }
}
//# sourceMappingURL=Scene.js.map