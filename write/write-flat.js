function myFlat(array, deep = 0) {
    if (deep === 0) return array;

    return array.reduce((acc, val) => {
        if (Array.isArray(val)) {
            acc = acc.concat(myFlat(val, deep - 1));
        } else {
            acc.push(val)
        }
        return acc;
    },[]);
}