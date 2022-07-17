// Callback
// Question 1: Viết callback thực hiện các lệnh sau
// B1: Call API Create User (1)
// B2: Nếu (1) thành công thì Call API Create Group (2)
// Nếu (1) lỗi thì in ra lỗi và in ra text "End!"
// B3: Nếu (2) thành công thì Call API Add User To Group (3)
// Nếu (2) lỗi thì in ra lỗi và in ra text "End!"
// B4: Nếu (3) thành công thì in ra text "End!"
// Chú ý: Sử dụng setTimeout() để mô phỏng Call API
function callAPICreateUser() {
    return new Promise(function (resolve, reject) {
        console.log("call API Create User");
        resolve("Create User successfully");
    });
}
function callAPICreateGroup() {
    return new Promise(function (resolve, reject) {
        console.log("call API Create Group");
        reject("Group Name is Exists");
    });
}
function callAPIAddUserToGroup() {
    return new Promise(function (resolve, reject) {
        console.log("call API Add User To Group");
        resolve("Add User To Group successfully");
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
})["catch"](function (error) {
    console.log(error);
});
