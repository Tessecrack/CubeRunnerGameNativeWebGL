import FigureInfo from "./FigureInfo.js";
export default class FiguresUtils {
    static _colorTriangleInfo = new FigureInfo([
        -0.5, -0.5, 0.0, 1, 0, 0, 1,
        0, 0.5, 0.0, 0, 1, 0, 1,
        0.5, -0.5, 0.0, 0, 0, 1, 1
    ], 3);
    static getColorTriangle() {
        return this._colorTriangleInfo;
    }
}
//# sourceMappingURL=FiguresUtils.js.map