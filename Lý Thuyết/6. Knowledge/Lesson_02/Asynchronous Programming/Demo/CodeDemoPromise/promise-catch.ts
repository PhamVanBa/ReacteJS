var promise = new Promise(function (resolve, reject) {
   reject("error!");
});


promise
    .then(function (success) {
        console.log(success);
     })
    .catch(function (message) {
        console.log(message);
    });


