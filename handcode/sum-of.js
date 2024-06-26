/**
 * // 设计一个sum函数，使其满足以下要求

sum(1, 2).sumOf() // 返回 3

sum(1, 2)(3).sumOf() // 返回 6

sum(1)(2, 3, 4).sumOf() // 返回 10

sum(1, 2)(3, 4)(5).sumOf() // 返回 15

 */

function sum(...args) {
  let params = [...args];

  const ret = function () {
    params = params.concat(Array.from(arguments));
    return ret;
  }

  ret.sumOf = function () {
    return params.reduce((acc, prev) => acc + prev, 0);
  }

  return ret;
}

console.log(sum(1, 2).sumOf())
console.log(sum(1,2)(3).sumOf());
console.log(sum(1)(2, 3, 4).sumOf())
console.log(sum(1, 2)(3, 4)(5).sumOf())
