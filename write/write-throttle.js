function throttle(fn, wait) {
    let lastCallTime = 0;

    return function() {
        const now = new Date();
        
        if (now - lastCallTime > wait) {
            lastCallTime = now;
            fn.apply(this, arguments);
        }
    }
}
