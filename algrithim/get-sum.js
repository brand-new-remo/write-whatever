// 给定数组【2，3，4，6，7】，target=7 输出数组中和等于目标的所有组合

function getSum(arr, target) {
  const result = [];

  const dfs = (start, temp, sum) => {
    if (sum >= target) {
      if (sum === target) {
        result.push(temp);
      }
    }

    for (let i = start; i < arr.length; i++) {
      temp.push(arr[i]);
      dfs(i, temp, sum + arr[i]);
      temp.pop();
    }
  };

  dfs(0, []);

  return result;
}

getSum(arr);
