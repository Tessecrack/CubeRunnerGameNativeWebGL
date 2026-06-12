import FigureInfo from "./FigureInfo.js"

export default class FiguresUtils {
    private static _colorTriangleInfo: FigureInfo = new FigureInfo([
        -0.5, -0.5, 0.0, 1, 0, 0, 1,
        0, 0.5, 0.0, 0, 1, 0, 1,
        0.5, -0.5, 0.0, 0, 0, 1, 1
    ], 3)


    public static getColorTriangle(): FigureInfo {
        return this._colorTriangleInfo
    }
}