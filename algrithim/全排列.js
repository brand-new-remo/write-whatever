function findPermutations(arr, length) {
  const result = [];

  const dfs = (path, used) => {
    if (path.length === length) {
      // 注意这里要解开
      result.push([...path]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!used[i]) {
        path.push(arr[i]);
        used[i] = true;
        dfs(path, used);
        path.pop();
        used[i] = false;
      }
    }
  }

  dfs([], new Array(arr.length).fill(false));

  return result;
}


let arr = [1, 2, 3, 4];
let k = 2;
let permutations = findPermutations(arr, k);
console.log(permutations);
