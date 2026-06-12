export default class FiguresUtils {
    private static _colorTriangle = [
        -0.5, -0.5, 0.0, 1, 0, 0, 1,
        0, 0.5, 0.0, 0, 1, 0, 1,
        0.5, -0.5, 0.0, 0, 0, 0, 1
    ]


    public static getColorTriangle() {
        return this._colorTriangle
    }
}