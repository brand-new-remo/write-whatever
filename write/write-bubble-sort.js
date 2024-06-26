function bubbleSort(array) {
    if (array.length < 2) return array;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }

    return array;
}

console.log(bubbleSort([2,3,1,5,4]))