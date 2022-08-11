import React from "react";

function UserList211(props) {
  const userList = props.users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ));

  return <ul>{userList}</ul>;
}

export default UserList211;
