function mergeSort(array) {
    if (array.length < 2) return array;

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while(left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());

    return result;
}

console.log(mergeSort([3,2,1,5,4]))