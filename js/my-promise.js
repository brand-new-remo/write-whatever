function MyPromise(fn) {
    let state = 'pending';  // Promise 状态初始化
    let value = null;  // Promise 的值
    let handlers = [];  // 成功或失败处理函数的队列
  
    function fulfill(result) {
      state = 'fulfilled';  // 状态变为 fulfilled
      value = result;  // 设置 Promise 的值
      handlers.forEach(handle);  // 处理队列中的所有处理函数
      handlers = null;  // 清空处理函数队列
    }
  
    function reject(error) {
      state = 'rejected';  // 状态变为 rejected
      value = error;  // 设置 Promise 的值
      handlers.forEach(handle);  // 处理队列中的所有处理函数
      handlers = null;  // 清空处理函数队列
    }
  
    function resolve(result) {
      try {
        let then = getThen(result);  // 获取 result 的 then 方法
        if (then) {
          doResolve(then.bind(result), resolve, reject);  // 如果 then 存在，使用 doResolve 执行 then
          return;
        }
        fulfill(result);  // 如果没有 then 方法，直接 fulfill Promise
      } catch (e) {
        reject(e);  // 如果在 resolve 过程中抛出错误，直接 reject Promise
      }
    }
  
    function handle(handler) {
      if (state === 'pending') {
        handlers.push(handler);  // 如果 Promise 还在 pending 状态，将处理函数加入队列
      } else {
        if (state === 'fulfilled' && typeof handler.onFulfilled === 'function') {
          handler.onFulfilled(value);  // 如果 Promise 是 fulfilled 状态，且有 onFulfilled 处理函数，执行之
        }
        if (state === 'rejected' && typeof handler.onRejected === 'function') {
          handler.onRejected(value);  // 如果 Promise 是 rejected 状态，且有 onRejected 处理函数，执行之
        }
      }
    }
  
    this.done = function(onFulfilled, onRejected) {
      // 确保处理函数在下一个 tick 中执行
      setTimeout(function() {
        handle({
          onFulfilled: onFulfilled,
          onRejected: onRejected
        });
      }, 0);
    }
  
    this.then = function(onFulfilled, onRejected) {
      let self = this;
      return new MyPromise(function(resolve, reject) {
        return self.done(function(result) {
          if (typeof onFulfilled === 'function') {
            try {
              return resolve(onFulfilled(result));
            } catch(ex) {
              return reject(ex);
            }
          } else {
            return resolve(result);
          }
        }, function(error) {
          if (typeof onRejected === 'function') {
            try {
              return resolve(onRejected(error));
            } catch(ex) {
              return reject(ex);
            }
          } else {
            return reject(error);
          }
        });
      });
    }
  
    doResolve(fn, resolve, reject);  // 执行 Promise
  }
  
  function getThen(value) {
    let t = typeof value;
    if (value && (t === 'object' || t === 'function')) {
      let then = value.then;
      if (typeof then === 'function') {
        return then;
      }
    }
    return null;
  }
  
  function doResolve(fn, onFulfilled, onRejected) {
    let done = false;
    try {
      fn(function(value) {
        if (done) return;
        done = true;
        onFulfilled(value);
      }, function(reason) {
        if (done) return;
        done = true;
        onRejected(reason);
      });
    } catch(ex) {
      if (done) return;
      done = true;
      onRejected(ex);
    }
  }
  
  
  
  // 创建一个 MyPromise 实例
  const promise = new MyPromise(function(resolve, reject) {
    // 异步操作，比如发送网络请求
    setTimeout(function() {
      // 模拟异步操作成功
      resolve('Success');
      
      // 模拟异步操作失败
      // reject('Error');
    }, 1000);
  });
  
  // 使用 then 方法处理成功和失败的情况
  promise.then(function(result) {
    console.log('Promise resolved with result: ', result);
  }, function(error) {
    console.log('Promise rejected with error: ', error);
  });