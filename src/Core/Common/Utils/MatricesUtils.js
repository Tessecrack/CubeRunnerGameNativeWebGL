export default class MatricesUtils {
    static _identityMatrix = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
    static identity() {
        return this._identityMatrix;
    }
    static perspective(fieldOfViewInRadians, aspect, near, far) {
        const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
        const rangeInv = 1.0 / (near - far);
        return [
            f / aspect, 0, 0, 0,
            0, f, 0, 0,
            0, 0, (near + far) * rangeInv, -1,
            0, 0, near * far * rangeInv * 2, 0
        ];
    }
    static translate(matrix, tx, ty, tz) {
        return MatricesUtils.multiply(matrix, MatricesUtils.translation(tx, ty, tz));
    }
    static xRotate(matrix, angleInRadians) {
        return MatricesUtils.multiply(matrix, MatricesUtils.xRotation(angleInRadians));
    }
    static yRotate(matrix, angleInRadians) {
        return MatricesUtils.multiply(matrix, MatricesUtils.yRotation(angleInRadians));
    }
    static zRotate(matrix, angleInRadians) {
        return MatricesUtils.multiply(matrix, MatricesUtils.zRotation(angleInRadians));
    }
    static scale(matrix, sx, sy, sz) {
        return MatricesUtils.multiply(matrix, MatricesUtils.scaling(sx, sy, sz));
    }
    static translation(tx, ty, tz) {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            tx, ty, tz, 1
        ];
    }
    static xRotation(angleInRadians) {
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        return [
            1, 0, 0, 0,
            0, c, s, 0,
            0, -s, c, 0,
            0, 0, 0, 1
        ];
    }
    static yRotation(angleInRadians) {
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        return [
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1
        ];
    }
    static zRotation(angleInRadians) {
        const c = Math.cos(angleInRadians);
        const s = Math.sin(angleInRadians);
        return [
            c, s, 0, 0,
            -s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    }
    static scaling(sx, sy, sz) {
        return [
            sx, 0, 0, 0,
            0, sy, 0, 0,
            0, 0, sz, 0,
            0, 0, 0, 1
        ];
    }
    static multiply(firstMatrix, secondMatrix) {
        const countInRow = Math.sqrt(Math.max(firstMatrix.length, secondMatrix.length));
        const result = new Array(firstMatrix.length);
        for (let i = 0; i < countInRow; ++i) {
            for (let j = 0; j < countInRow; ++j) {
                const resultIndex = i * countInRow + j;
                result[resultIndex] = 0;
                for (let k = 0; k < countInRow; ++k) {
                    const indexInCol = i * countInRow + k;
                    const indexInRow = k * countInRow + j;
                    result[resultIndex] += firstMatrix[indexInRow] * secondMatrix[indexInCol];
                }
            }
        }
        return result;
    }
}
//# sourceMappingURL=MatricesUtils.js.map