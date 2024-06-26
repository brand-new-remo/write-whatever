Promise.myRetry = function (fn, times) {
  return new Promise((resolve, reject) => {
    const attmpt = (retriesLeft) => {
      fn()
        .then(resolve)
        .catch((err) => {
          if (retriesLeft === 0) {
            reject(err);
          } else {
            attmpt(retriesLeft - 1);
          }
        });
    };

    attmpt(times);
  });
};
