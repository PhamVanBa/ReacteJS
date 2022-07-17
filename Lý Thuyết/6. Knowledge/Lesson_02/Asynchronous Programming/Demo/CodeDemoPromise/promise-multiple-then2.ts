var promise = new Promise(function (resolve, reject) {
    reject();
});

promise
    .then(function () {
        console.log(1);
    })
    .then(function () {
        console.log(2);
    })
    .then(
        function () {
            console.log(3);
        }, 
        function () {
            console.log('Error!')
        })
    .then(function () {
        console.log(4);
    });

// Error!
// 4
