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

        public static perspective(fieldOfViewInRadians: number, aspect: number, near: number, far: number): number[] {
        const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
        const rangeInv = 1.0 / (near - far);

        return [
            f / aspect, 0, 0, 0,
            0, f, 0, 0,
            0, 0, (near + far) * rangeInv, -1,
            0, 0, near * far * rangeInv * 2, 0
        ];
    }

    public static translate(matrix: number[], tx: number, ty: number, tz: number) {
        return MatricesUtils.multiply(matrix, MatricesUtils.translation(tx, ty, tz))
    }

    public static xRotate(matrix: number[], angleInRadians: number) {
        return MatricesUtils.multiply(matrix, MatricesUtils.xRotation(angleInRadians))
    }

    public static yRotate(matrix: number[], angleInRadians: number) {
        return MatricesUtils.multiply(matrix, MatricesUtils.yRotation(angleInRadians))
    }

    public static zRotate(matrix: number[], angleInRadians: number) {
        return MatricesUtils.multiply(matrix, MatricesUtils.zRotation(angleInRadians))
    }

    public static scale(matrix: number[], sx: number, sy: number, sz: number) {
        return MatricesUtils.multiply(matrix, MatricesUtils.scaling(sx, sy, sz))
    }

    public static translation(tx: number, ty: number, tz: number): number[] {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            tx, ty, tz, 1
        ]
    }

    public static xRotation(angleInRadians: number): number[] {
        const c = Math.cos(angleInRadians)
        const s = Math.sin(angleInRadians)

        return [
            1, 0, 0, 0,
            0, c, s, 0,
            0, -s, c, 0,
            0, 0, 0, 1
        ]
    }

    public static yRotation(angleInRadians: number): number[] {
        const c = Math.cos(angleInRadians)
        const s = Math.sin(angleInRadians)

        return [
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1
        ]
    }

    public static zRotation(angleInRadians: number): number[] {
        const c = Math.cos(angleInRadians)
        const s = Math.sin(angleInRadians)

        return [
            c, s, 0, 0,
            -s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]
    }

    public static scaling(sx: number, sy: number, sz: number) {
        return [
            sx, 0, 0, 0,
            0, sy, 0, 0,
            0, 0, sz, 0,
            0, 0, 0, 1
        ]
    }

    public static multiply(firstMatrix: number[], secondMatrix: number[]): number[] {
        const countInRow = Math.sqrt(Math.max(firstMatrix.length, secondMatrix.length))

        const result = new Array(firstMatrix.length)

        for (let i = 0; i < countInRow; ++i) {
            for (let j = 0; j < countInRow; ++j) {
                const resultIndex = i * countInRow + j
                result[resultIndex] = 0
                for (let k = 0; k < countInRow; ++k) {
                    const indexInCol = i * countInRow + k
                    const indexInRow = k * countInRow + j
                    result[resultIndex] += firstMatrix[indexInRow]! * secondMatrix[indexInCol]!
                }
            }
        }

        return result
    }
}