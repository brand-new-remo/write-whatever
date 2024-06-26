//数组乱序
function shuffle(array) {
    let m = array.length;

    while(m>1) {
        console.log('ms: ' + m);
        const index =  Math.floor(Math.random() * m--);
        console.log('m: ' + m);
        [array[m], array[index]] = [array[index], array[m]]
    }
    return array;
}

const arr = [1,2,3,4,5,6];

console.log(shuffle(arr));

// 快速排序
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    console.log('pivot: ' + pivot);
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }
    console.log('left: ' + left);
    console.log('right: ' + right);
    return quickSort(left).concat(pivot, quickSort(right));
}