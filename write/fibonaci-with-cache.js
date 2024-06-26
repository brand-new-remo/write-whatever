function fibonacci(n, cache = {}) {
    if (n < 2) return n;

    if (cache[n]) return cache[n]

    cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);

    return cache[n]
}

// console.log(fibonacci(10));
console.log([].map(parseInt))