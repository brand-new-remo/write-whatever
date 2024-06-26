Promise.reject = function(param) {
    return new Promise((resolve, reject) => reject(param));
}