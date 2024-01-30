export function checkKeys(target, required, possible = []) {
    if (!(typeof target === 'object'))
        throw 'not an object given to checkKeys';
    required.forEach(v => {
        if (!(v in target))
            throw 'missing property "' + v.toString() + '"';
    });
    return target;
}
