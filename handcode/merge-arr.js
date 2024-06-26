/**
 * 请把两个数组 
 * ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 
 * ['A', 'B', 'C', 'D']，
 * 合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。
 */ 


function mergeArr(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        let compareResult = compareItem(arr1[i], arr2[j]);
        if (compareResult <= 0) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    if (i < arr1.length) {
        for (let s = i; s < arr1.length; s++) {
            result.push(arr1[s]);
        }
    }

    if (j < arr2.length) {
        for (let k = j; k < arr2.length; k++) {
            result.push(arr2[k]);
        }
    }

    return result;
}

function compareItem(a, b) {
    if (a === b) return 0;

    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a.charCodeAt(i) === b.charCodeAt(i)) continue;
        return a.charCodeAt(i) - b.charCodeAt(i);
    }
    return 0;
}

console.log(mergeArr(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'], ['A', 'B', 'C', 'D']));