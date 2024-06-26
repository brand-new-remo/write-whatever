function findSame(arr1, arr2) {
    let low, mid, high, result = [];
    for (let i = 0; i < arr1.length; i++) {
        low = 0;
        high = arr2.length - 1;
        while(low <= high) {
            mid = low + (high - low) / 2;
            if (arr1[i] === arr2[mid]) {
                result.push(arr1[i]);
                break;
            } else if (arr1[i] < arr2[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    return result;
}