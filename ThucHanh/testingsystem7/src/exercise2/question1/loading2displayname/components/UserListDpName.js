import React from "react";

function UserListDpName(props) {
  const userList = props.users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ));

  return <ul>{userList}</ul>;
}

export default UserListDpName;
