import type GameObject from "./GameObject.js";
import InputController from "./InputController.js";
export default class UpdateManager {
    private _inputController;
    constructor(inputController: InputController);
    updateLogic(deltaTime: number, gameObjects: GameObject[]): void;
}
//# sourceMappingURL=UpdateManager.d.ts.map