import FigureInfo from "./FigureInfo.js";
export default class FiguresUtils {
    static _colorTriangleInfo = new FigureInfo([
        20, -20, 0.0, 0, 0, 1, 1,
        0, 20, 0.0, 0, 1, 0, 1,
        -20, -20, 0.0, 1, 0, 0, 1
    ], 3, 40, 40, 0);
    static getColorTriangle() {
        return this._colorTriangleInfo;
    }
    static getColorCube(x, y, z, width, height, depth) {
        const alignCenterOffsetX = -width / 2;
        const alignCenterOffsetY = -height / 2;
        const alignCenterOffsetZ = -depth / 2;
        const x1 = x + alignCenterOffsetX;
        const y1 = y + alignCenterOffsetY;
        const z1 = z + alignCenterOffsetZ;
        const x2 = x1 + width;
        const y2 = y1 + height;
        const z2 = z1 + depth;
        const vertices = [
            // front
            x1, y2, z1, 1, 1, 0, 1,
            x2, y1, z1, 1, 1, 0, 1,
            x1, y1, z1, 1, 1, 0, 1,
            x2, y1, z1, 1, 1, 0, 1,
            x1, y2, z1, 1, 1, 0, 1,
            x2, y2, z1, 1, 1, 0, 1,
            // down
            x2, y2, z1, 1, 0, 0, 1,
            x1, y2, z1, 1, 0, 0, 1,
            x2, y2, z2, 1, 0, 0, 1,
            x2, y2, z2, 1, 0, 0, 1,
            x1, y2, z1, 1, 0, 0, 1,
            x1, y2, z2, 1, 0, 0, 1,
            // back
            x1, y2, z2, 0, 1, 0, 1,
            x1, y1, z2, 0, 1, 0, 1,
            x2, y2, z2, 0, 1, 0, 1,
            x2, y2, z2, 0, 1, 0, 1,
            x1, y1, z2, 0, 1, 0, 1,
            x2, y1, z2, 0, 1, 0, 1,
            // up
            x2, y1, z2, 0, 0, 1, 1,
            x1, y1, z2, 0, 0, 1, 1,
            x2, y1, z1, 0, 0, 1, 1,
            x2, y1, z1, 0, 0, 1, 1,
            x1, y1, z2, 0, 0, 1, 1,
            x1, y1, z1, 0, 0, 1, 1,
            // left
            x1, y1, z1, 1, 0, 1, 1,
            x1, y1, z2, 1, 0, 1, 1,
            x1, y2, z1, 1, 0, 1, 1,
            x1, y2, z1, 1, 0, 1, 1,
            x1, y1, z2, 1, 0, 1, 1,
            x1, y2, z2, 1, 0, 1, 1,
            // right
            x2, y1, z1, 0, 1, 1, 1,
            x2, y2, z1, 0, 1, 1, 1,
            x2, y2, z2, 0, 1, 1, 1,
            x2, y2, z2, 0, 1, 1, 1,
            x2, y1, z2, 0, 1, 1, 1,
            x2, y1, z1, 0, 1, 1, 1,
        ];
        return new FigureInfo(vertices, 36, width, height, depth);
    }
}
//# sourceMappingURL=FiguresUtils.js.map