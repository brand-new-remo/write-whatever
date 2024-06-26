Promise.allSettled = function (promises) {
  return Promise.all(
    promises.map((promise) => {
      return Promise.resolve(promise)
        .then((value) => {
          return { status: "fulfiled", value };
        })
        .catch((reason) => {
          return { status: "rejected", reason };
        });
    })
  );
};
