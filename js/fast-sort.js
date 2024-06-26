function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const prvoitIndex = pritition(arr,left,right);
        quickSort(arr, left, prvoitIndex - 1);
        quickSort(arr, prvoitIndex + 1, right);
    }
    return arr;
}

function pritition(arr, left, right) {
    let prvoitValue = arr[right];
    let prvoitIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < prvoitValue) {
            [arr[i], arr[prvoitIndex]] = [arr[prvoitIndex], arr[i]];
            prvoitIndex++;
        }
    }

    [arr[prvoitIndex], arr[right]] = [arr[right], arr[prvoitIndex]];

    return prvoitIndex;
}

console.log(quickSort([5, 3, 4, 1, 2]))