function callAPICreateUser() {
    return new Promise(function (resolve, reject) {
        console.log("call API Create User!");
        resolve("Create User successfully!");
    });
}

function callAPICreateGroup() {
    return new Promise(function (resolve, reject) {
        console.log("call API Create Group!");
        // resolve("Create Group successfully!");
        reject("Group Name is Exists!");
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

// call API Create User!
// Create User successfully!
// call API Create Group!
// Group Name is Exists!
