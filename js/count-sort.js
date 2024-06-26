function countingSort(arr) {
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);

    // 把数组中的每项都计数到计数数组
    for (num of arr) {
        count[num]++
    }

    // 累加前面元素的个数，方便后面去排序
    for (let i = 1; i <= max; i++) {
        count[i] = count[i] + count[i-1];
    }

    const output = new Array(arr.length);

    // 这里迭代的是原始数组
    for (let i = arr.length - 1; i >= 0; i--) {

        // 将原始数组中的这项放到输出数组的根据累加数组的个数减一的下标位置上
        output[count[arr[i]] - 1] = arr[i];

        // 放一个就累加减一
        count[arr[i]]--;
    }

    return output;
}

const arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr).join('')); 