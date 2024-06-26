var obj = {a: 1, b: 2, c: 3};
Object.entries(obj).forEach(function([key, value]) {
  console.log(key + ': ' + value);
});