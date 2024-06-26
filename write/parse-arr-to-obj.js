let arr = ['a', 'b', 'c', 'd'];
// 结果 { a:{ b:{ c:{ d:null } } } }

function parseArrToObj(arr) {
    let result = {};
    let currObj = result;
    for (let i = 0; i < arr.length - 1; i++) {
        if (!currObj.hasOwnProperty(arr[i])) {
            const newObj = {};
            currObj[arr[i]] = newObj;
            currObj = newObj;
        }
    }

    currObj[arr[arr.length - 1]] = null;

    return result;
}

console.log(JSON.stringify(parseArrToObj(arr)));