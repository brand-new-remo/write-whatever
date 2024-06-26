Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("must be called on function!");
  }

  if (context === null || context === undefined) {
    context = Object(context);
  } else {
    context = window;
  }

  const self = this;

  const bindFunction = function () {
    return self.apply(this instanceof bindFunction ? this : context, [
      ...args,
      ...arguments,
    ]);
  };

  bindFunction.prototype = Object.create(self.prototype);

  return bindFunction;
};
