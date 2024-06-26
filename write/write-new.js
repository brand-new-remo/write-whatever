function myNew(Constructor, ...args) {
    const obj = {};

    obj.__proto__ = Constructor.prototype;

    const result = Constructor.apply(obj, args);

    return typeof result === 'object' ? result : obj;
}