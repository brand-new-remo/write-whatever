Function.prototype.myApply = function (context, args) {

    if (typeof this !== 'function') {
        throw new Error('error');
    }

    if (context === undefined || context === null) {
        context = Object(context);
    } else {
        context = window;
    }

    const symbol = new Symbol();

    context[symbol] = this;

    const res = context[symbol](args);

    delete context[symbol];

    return res;
}