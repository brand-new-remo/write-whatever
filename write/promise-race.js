Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return;

        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(data => {
                resolve(data);
                return;
            }).catch(err => {
                reject(err);
                return;
            })
        }
    })
}