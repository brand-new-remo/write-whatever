function permute(arr) {
    // 存储所有的排列方式
    let result = [];
  
    function dfs(current) {
      if (current.length === arr.length) {
        // 如果当前排列方式长度和原数组长度一致，说明已经排列完成
        result.push(current);
        return;
      }
  
      for (let i = 0; i < arr.length; i++) {
        // 如果当前排列方式包含了原数组的某个元素，说明已经排列过了，跳过
        if (current.includes(arr[i])) continue;
  
        // 如果当前排列方式不包含原数组的某个元素，将其加入到排列方式中
        dfs([...current, arr[i]]);
      }
    }
  
    dfs([]);
  
    return result;
  }
  
  console.log(permute([1, 2, 3])); // 输出 [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]