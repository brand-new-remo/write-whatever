function myCurry(fn, ...args) {
    if (args.length < fn.length) {
        return (...args1) => myCurry(fn, ...args, ...args1);
    } else {
        fn(...args);
    }
}