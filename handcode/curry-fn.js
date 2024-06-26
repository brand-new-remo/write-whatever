const curry = fn => {
    const len = fn.length;
    return function curried(...args) {
        if (args.length === len) {
            return fn.apply(null, args);
        }
        return (..._args) => {
            return curried.apply(null, [...args, ..._args]);
        };
    };
};


const sum = (x, y, z) => x + y + z;
const add = curry(sum);

console.log(add(1)); 	// 1
console.log(add(1)(2));  	// 3
console.log(add(1)(2)(3));  // 6
console.log(add(1)(2, 3));   // 6
console.log(add(1, 2)(3));   // 6
console.log(add(1, 2, 3));   // 6