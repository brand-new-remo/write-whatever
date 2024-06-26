Promise.all = function(promises) {
    let result = [];
    let index = 0;
    let length = promises.length;
    return new Promise((resolve, reject) => {
        if (length === 0) {
            resolve(result);
            return;
        }

        for (let i = 0; i < length; i++) {
            Promise.then(promises[i]).then((data) => {
                result[i] = data;
                index++;
                if (index === length) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
        }
    })
}