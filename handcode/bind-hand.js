Function.prototype.myBind = function(context, ...args) {
    if (typeof this !== 'function') {
        throw new Error("bind must called on function");
    }

    const obj = context || window;
    const self = this;

    function bindedFn() {
        const params = Array.from(arguments).concat(Array.isArray(args) ? args : []);
        const result = self.apply(this instanceof bindedFn ? this : obj, params)
        return this instanceof bindedFn ? this : result;
    }

    bindedFn.prototype = Object.create(self.prototype);

    return bindedFn;
}