export default class GLBufferInfo {
    target; // for example: ARRAY_BUFFER
    usage; // for example: STATIC_DRAW or DYNAMIC_DRAW
    buffer;
    constructor(target, usage, buffer) {
        this.target = target;
        this.usage = usage;
        this.buffer = buffer;
    }
}
//# sourceMappingURL=GLBufferInfo.js.map