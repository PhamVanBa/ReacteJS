var promise = new Promise(function (resolve, reject) {
    resolve();
});

promise
    .then(function () {
        console.log(1);
    })
    .then(function () {
        console.log(2);
    })
    .then(function () {
        console.log(3);
    });

// 1
// 2
// 3

