function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

function f2(n) {
  let fib = [1, 2];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[n];
}

console.log(f2(10));

function f3(n) {
  let a = 0,
    b = 1;
  while (n-- > 0) {
    [a, b] = [b, a + b];
  }
  return a;
}

console.log(f3(10));
