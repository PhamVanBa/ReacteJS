import React from "react";

function UserList22(props) {
  const userList = props.users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ));

  return <ul>{userList}</ul>;
}

export default UserList22;
