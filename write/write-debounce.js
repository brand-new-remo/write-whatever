function debounce(fn, delay, options = { leading: false}) {
    let timer = null;
    let invoker = false;
    const { leading } = options;

    return function(...args) {
        if (leading && !invoker) {
            fn.apply(this, args);
            invoker = true;
            return;
        }

        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}