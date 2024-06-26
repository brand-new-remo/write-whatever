Function.prototype.myCall = function (context, ...args) {
    if (!(this instanceof Function)) {
        throw new Error("cant be used")
    }


    if (context === undefined || context === null) {
        context = Object(context);
    } else {
        context = window;
    }

    const symbol = new Symbol();
    context[symbol] = this;

    const res = context[symbol].apply(args);

    delete context[symbol];

    return res;
}