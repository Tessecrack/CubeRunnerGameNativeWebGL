import InputController from "./InputController.js";
export default class UpdateManager {
    _inputController = null;
    constructor(inputController) {
        this._inputController = inputController;
    }
    updateLogic(deltaTime, gameObjects) {
        if (this._inputController !== null) {
            this._inputController.update(deltaTime);
        }
        console.log(deltaTime);
        if (!gameObjects || gameObjects.length === 0) {
            return;
        }
        for (let gameObject of gameObjects) {
            const uniformsVecInfo = gameObject.getUniformsVecInfo();
            for (let uniformVec of uniformsVecInfo) {
                uniformVec.updateValue();
            }
            const uniformsMatInfo = gameObject.getUniformsMatInfo();
            for (let uniformMat of uniformsMatInfo) {
                uniformMat.updateValue();
            }
        }
    }
}
//# sourceMappingURL=UpdateManager.js.map