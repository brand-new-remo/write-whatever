Promise.retry = (handle, count) => {
    let usedCount = 0;

    const execcc = (argsss) => {
        return new Promise((resolve, reject) => {
            try {
                handle.apply(this, argsss);
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

    const execHandle = (innerArgs) => { 
        return new Promise((resolve, reject) => {
            execcc(innerArgs).then(resolve).catch((e) => {
                if (usedCount < count) {
                    usedCount++;
                    execHandle(innerArgs);
                } else {
                    reject(e);
                }
            })
        })
    }


    return (...args) => {
        usedCount++;
        return execHandle(args);
    }
}

const handler = function (a, b, c) {
    console.log(a, b, c);
    throw new Error(a);
}

const handlerrr = Promise.retry(handler, 3);

handlerrr(1,2,3).catch(e => {
    console.log('error');
});

