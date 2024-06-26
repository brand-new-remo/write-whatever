const d1 = { 'a.b.c': 1, 'a.b.d': 2,'a.c':5 };
const d2 = { 'a.b.e': 3, 'a.b.f': 4 };
// 合并后的结果 { a: { b: { c: 1, d: 2, e: 3, f: 4 }, c: 5 } }


function mergeObject(a,b) {
    let result = {};

    const helper = (outObj) => {
        Object.keys(outObj).forEach(key => {
            const keySplitted = key.split('.');
            let currLevelObj = result;
            for (let i = 0; i < keySplitted.length; i++) {
                const theKey = keySplitted[i];
                if (i < keySplitted.length - 1) {
                    if (!currLevelObj.hasOwnProperty(theKey)) {
                        let newObj = {};
                        currLevelObj[theKey] = newObj;
                        currLevelObj = newObj;
                    } else {
                        currLevelObj = currLevelObj[theKey];
                    }
                } else {
                    currLevelObj[theKey] = outObj[key];
                }
            }
        })
    }

    helper(a);
    helper(b);
    return result;
}

console.log(JSON.stringify(mergeObject(d1, d2)));