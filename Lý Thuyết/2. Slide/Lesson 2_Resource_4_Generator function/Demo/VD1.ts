// function* genID() {
//     var index = 0;

//     while (index < 3) {
//         yield index++;
//     }
// }

// var gen = genID();

// console.log(gen.next()); // { value: 0, done: false }

// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2

// console.log(gen.next()); // { value: undefined, done: true }