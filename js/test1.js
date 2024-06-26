// console.log(['1','2','3'].map(parseInt));

// let unary = fn => val => fn(val)
// let parse = unary(parseInt)
// console.log(['1.1', '2', '0.3'].map(parse))

// 函数接受一个函数参数和一个毫秒数
// 返回一个函数，在ms内再次触发，将取消前面一次执行
function debounce(fn, ms) {
  let timmer = null;

  return function () {
    if (timmer) clearTimeout(timmer);
    timmer = setTimeout(() => {
      const args = Array.from(arguments);
      if (args instanceof Array) {
        fn.apply(this, args);
      } else {
        fn.apply(this, [args]);
      }
    }, ms);
  };
}

// 限制函数的执行频率，在给定的时间之内，最多执行一次
function throttle(fn, ms) {
  let timmer = null;

  return function () {
    const context = this;
    const args = Array.from(arguments);
    if (timmer) return;
    timmer = setTimeout(() => {
      fn.apply(context, args);
      clearTimeout(timmer);
      timmer = null;
    }, ms);
  };
}

// let index = 0;
// setInterval(() => {
//     const log = debounce(console.log, 1000);
//     log(index++);
// }, 500)

function dfs(root) {
  if (!root) return;

  console.log(root.val);
  dfs(root.left);
  dfs(root.right);
}

function bfs(root) {
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const item = queue.shift();
    console.log(item.val);
    if (item.left) {
      queue.push(item.left);
    }
    if (item.right) {
      queue.push(item.right);
    }
  }
}

// 请分别用深度优先思想和广度优先思想实现一个拷贝函数？

// 实现一个拷贝函数
function cloneDeep(obj, map = new Map()) {
  if (obj === null) return obj;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (typeof obj !== "object") return obj;
  if (map.has(obj)) return map.get(obj);

  const copy = new obj.constructor();
  map.set(obj, copy);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = cloneDeep(obj[key], map);
    }
  }

  return copy;
}

async function async1() {
  console.log("async1 start");
  await async2();
  //更改如下：3
  setTimeout(function () {
    console.log("setTimeout1");
  }, 0);
}
async function async2() {
  //更改如下：2
  setTimeout(function () {
    console.log("setTimeout2");
  }, 0);
}
console.log("script start");
1;
setTimeout(function () {
  console.log("setTimeout3");
}, 0);
async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");

/**
 * 上面的
 * script start
 * async1 start
 * promise1
 * script end
 * promise2
 * setTimeout3
 * setTimeout2
 * setTimeout1
 */

async function a1() {
  console.log("a1 start");
  await a2();

  // v2
  console.log("a1 end");
}
async function a2() {
  console.log("a2");
}

console.log("script start");

// h1
setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {

    // v1
  console.log("promise1");
});

a1();

let promise2 = new Promise((resolve) => {
  resolve("promise2.then");
  console.log("promise2");
});

promise2.then((res) => {

    // v3
  console.log(res);
  Promise.resolve().then(() => {
    console.log("promise3");
  });
});
console.log("script end");

/**
 * script start
 * a1 start
 * a2
 * promise2
 * script end
 * promise1
 * a1 end
 * promise2.then
 * promise3
 * setTimeout
 */


console.log('script start');

setTimeout(function() {
  console.log('setTimeout1');
  Promise.resolve().then(function() {
    console.log('promise1');
  });
}, 0);

Promise.resolve().then(function() {
  console.log('promise2');
  Promise.resolve().then(function() {
    console.log('promise3');
  }).then(function() {
    console.log('promise4');
  });
}).then(function() {
  console.log('promise5');
});

setTimeout(function() {
  console.log('setTimeout2');
}, 0);

console.log('script end');


/**
 * script start
 * script end
 * promise2
 * promise5
 */