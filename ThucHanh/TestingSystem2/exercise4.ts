// Arrow function

// Question 1:
// Convert function sau về Arrow Function ngắn nhất có thể theo các
// bước sau: function (a){
//     return a + 100;
// }

// B1: Ko có keyword function
// B2: Không có dấu {} và keyword return trong function body
// B3: Không có dấu ngoặc ở argument

var hello = a => console.log(a + 100);

// Question 2:
// Convert function sau về Arrow Function ngắn nhất có thể:
// a)
//     function (a, b){
//         return a + b + 100;
//     }
var hello1 = (a, b) => console.log(a + b + 100);

// b)
//     function (a, b){
//         let chuck = 42;
//         return a + b + chuck;
//     }
var hello2 = (a, b) => {
    let chuck = 42;
    console.log(a + b + chuck);
    
}

// c)
//     function bob (a){
//         return a + 100;
//     }

var bob = a => console.log(a + 100);


