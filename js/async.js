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
