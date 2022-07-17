function callAPICreateUser() {
    return new Promise(function (resolve, reject) {
        console.log("call API Create User!");
        resolve("Create User successfully!");
    });
}

function callAPICreateGroup() {
    return new Promise(function (resolve, reject) {
        console.log("call API Create Group!");
        resolve("Create Group successfully!");
    });
}

function callAPIAddUserToGroup() {
    return new Promise(function (resolve, reject) {
        console.log("call API Add User To Group!");
        resolve("Add User To Group successfully!");
    });
}

callAPICreateUser()
    .then(function (message) {
        console.log(message);
        return callAPICreateGroup();
    })
    .then(function (message) {
        console.log(message);
        return callAPIAddUserToGroup();
    })
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    });