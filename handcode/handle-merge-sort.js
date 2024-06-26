function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } 

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    return merge (mergeSort(left), mergeSort(right));
}

function merge (left, right) {
    let result = [];

    while(left.length && right.length) {
        if (left[0] >= right[0]) {
            result.push(right.shift())
        } else {
            result.push(left.shift())
        }
    }

    while(left.length) {
        result.push(left.shift())
    }
    while(right.length) {
        result.push(right.shift())
    }
    return result;
}

console.log(mergeSort([5, 3, 4, 1, 2]));