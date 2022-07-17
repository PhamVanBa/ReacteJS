// var message : string = "Hello world!";
// console.log(message);
function hello() {
    var ids = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ids[_i] = arguments[_i];
    }
    console.log(ids);
}
hello(1, 2, 3, 4);
