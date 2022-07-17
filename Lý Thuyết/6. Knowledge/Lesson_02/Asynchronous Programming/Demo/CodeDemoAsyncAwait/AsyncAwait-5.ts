async function callAPICreateUser() {
    console.log("Call API Create User!");
    return "Create User successfully!";
}

async function callAPICreateGroup() {
    console.log("call API Create Group!");
    return "Create Group successfully!";
}

async function createUserAndGroup() {
    // call API
    let resultCreateUser = await callAPICreateUser();
    let resultCreateGroup = await callAPICreateGroup();

    console.log(resultCreateUser);
    console.log(resultCreateGroup);
}

createUserAndGroup();
