function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        const provit = pritition(array, left, right);
        quickSort(array, left, provit - 1);
        quickSort(array, provit + 1, right);
    }

    return array;
}

function pritition(array, left, right) {
    const pivotValue = array[right];
    let pivotIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            pivotIndex++;
        }
    }

    [array[pivotIndex], array[right]] = [array[right], array[pivotIndex]];

    return pivotIndex;
}

console.log(quickSort([3,2,1,5,4]))