var promise = new Promise(function (resolve, reject) {
    resolve();
});

promise
    .then(function () {
        console.log(1);
    })
    .then(function () {
        console.log(2);
        return Promise.reject("Error!");
    })
    .then(function () {
        console.log(3);
    })
    .then(function () {
        console.log(4);
    })
    .catch(function(){
        console.log('Error!')
    });

// 1
// 2
// Error!

