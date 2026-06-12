export default class MatricesUtils {

    private static _identityMatrix = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]

    public static identity() {
        return this._identityMatrix
    }
}