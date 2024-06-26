let arr = ['1.5.1', '1.04.9', '1.45.0', '6.0.0', '5.2'];
// 结果 ['1.04.9', '1.5.1', '1.45.0', '5.2', '6.0.0']

function versionCompare(arr) {
    return arr.sort((a,b) => {
        const aArr = a.split('.');
        const bArr = b.split('.');
        const len = Math.max(aArr.length, bArr.length);
        let i = 0;
        while(i < len) {
            const aValue = aArr[i] | 0;
            const bValue = bArr[i] | 0;
            const res = compareNum(aValue, bValue);
            if (res === 0) {
                i++;
            } else {
                return res;
            }
        }
        return 0;
    })
}

function compareNum(a, b) {
    if (a.length === b.length) {
        return a - b;
    } else {
        const aArr = a.split('');
        const bArr = b.split('');
        const len = Math.max(aArr.length, bArr.length);
        let i = 0;
        while(i < len) {
            const aValue = aArr[i] | 0;
            const bValue = bArr[i] | 0;
            if (aValue === bValue) {
                i++;
            } else if (aValue > bValue) {
                return 1;
            } else {
                return -1;
            }
        }

        return 0;
    }
}

console.log(versionCompare(arr));