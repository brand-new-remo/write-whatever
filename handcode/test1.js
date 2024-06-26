var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

function handleArr(arr) {

    var result = [];

    function flatArr (arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatArr(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }

    flatArr(arr);

    function fastSort(arr, left = 0, right = arr.length - 1) {
        if (left < right) {
            const pivot = partition(arr, left, right);
            fastSort(arr, left, pivot - 1);
            fastSort(arr, pivot + 1, right);
        }
        return arr;
    }

    function partition (arr, left, right) {
        var pivotIndex = left;
        var pivotValue = arr[right];

        for (var i = left; i < right - 1; i++) {
            if (arr[i] < pivotValue) {
                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                pivotIndex++;
            }
        }

        [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

        return pivotIndex;
    }

    result = fastSort(result);

    function uniqueSortedArr(arr) {
        let i = 0;
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                i++;
                arr[i] = arr[j];
            }
        }
        return arr.slice(0, i + 1);
    }

    
    return uniqueSortedArr(result);
}

console.log(handleArr(arr));