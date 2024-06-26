const arr = [1,2,[3,4,5,[6,7,8,[9,10,11]]]]

const flatArr = (arr) => {
    let result = [];
    for (let i = 0;i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            result = result.concat(flatArr(arr[i]));
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

// console.log(flatArr(arr));

function flatArray(array) {
    while(array.some(item => Array.isArray(item))) {
        console.log('start', array);
        array = [].concat(...array);
        console.log('end',array);
    }
    return array;
}

console.log(flatArray(arr));