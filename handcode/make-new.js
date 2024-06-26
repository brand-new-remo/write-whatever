function myNew(constructorFn, args) {

    const obj = {};

    obj.__proto__ = constructorFn.prototype;

    let result = constructorFn.apply(obj, args);

    return typeof result === 'object' ? result : obj;
}