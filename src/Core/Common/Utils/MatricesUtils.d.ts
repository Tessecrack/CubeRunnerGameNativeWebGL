export default class MatricesUtils {
    private static _identityMatrix;
    static identity(): number[];
    static perspective(fieldOfViewInRadians: number, aspect: number, near: number, far: number): number[];
    static translate(matrix: number[], tx: number, ty: number, tz: number): number[];
    static xRotate(matrix: number[], angleInRadians: number): number[];
    static yRotate(matrix: number[], angleInRadians: number): number[];
    static zRotate(matrix: number[], angleInRadians: number): number[];
    static scale(matrix: number[], sx: number, sy: number, sz: number): number[];
    static translation(tx: number, ty: number, tz: number): number[];
    static xRotation(angleInRadians: number): number[];
    static yRotation(angleInRadians: number): number[];
    static zRotation(angleInRadians: number): number[];
    static scaling(sx: number, sy: number, sz: number): number[];
    static multiply(firstMatrix: number[], secondMatrix: number[]): number[];
}
//# sourceMappingURL=MatricesUtils.d.ts.map