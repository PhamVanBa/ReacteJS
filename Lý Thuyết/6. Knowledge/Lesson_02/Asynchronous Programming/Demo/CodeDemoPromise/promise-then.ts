var promise = new Promise(function (resolve, reject) {
   resolve("success!"); // reject("error!");
});


promise.then(
     function (success) {
        console.log(success);
     }, 
     function (error) {
        console.log(error);
     }
);


