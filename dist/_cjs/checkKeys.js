"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkKeys = void 0;
function checkKeys(target, required, possible = []) {
    if (!(typeof target === 'object'))
        throw 'not an object given to checkKeys';
    required.forEach(v => {
        if (!(v in target))
            throw 'missing property "' + v.toString() + '"';
    });
    return target;
}
exports.checkKeys = checkKeys;
