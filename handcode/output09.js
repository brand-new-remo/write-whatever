// for (var i = 0; i< 10; i++){
//     (function(innerI) {
//         setTimeout(() => {
//             console.log(innerI);
//         }, 1000)
//     })(i)
// }

// for (var i = 0; i< 10; i++){
// 	setTimeout((i) => {
// 		console.log(i);
//     }, 1000, i)
// }

for (let i = 0; i< 10; i++){
	setTimeout(() => {
		console.log(i);
    }, 1000)
}