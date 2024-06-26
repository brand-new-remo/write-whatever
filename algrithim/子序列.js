function subSerilize(arr, k) {
  const result = [];

  const helper = (start, path) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      helper(i, path);
      path.pop();
    }
  }

  helper(0, path);

  return result;
}
