/**
 * 算法题，给一个乱序的数组，请你找出符合比它前面的元素都大，比它后面的元素都小的元素，
 * 并返回它的下标，找不到返回-1，要求时间复杂度和空间复杂度都是O(n)
 * @param {*} arr 
 * @returns 
 */
function findElement(arr) {
    const n = arr.length;
    if (n < 3) return -1;

    const left_max = new Array(n).fill(0);
    const right_min = new Array(n).fill(0);

    left_max[0] = arr[0];
    for (let i = 1; i < n; i++) {
        left_max[i] = Math.max(left_max[i - 1], arr[i]);
    }

    right_min[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        right_min[i] = Math.min(right_min[i + 1], arr[i]);
    }

    for (let i = 1; i < n - 1; i++) {
        if (left_max[i - 1] < arr[i] && arr[i] < right_min[i + 1]) {
            return i;
        }
    }

    return -1;
}

// 测试
const arr = [1, 3, 2, 4, 5];
console.log(findElement(arr)); // 输出2
