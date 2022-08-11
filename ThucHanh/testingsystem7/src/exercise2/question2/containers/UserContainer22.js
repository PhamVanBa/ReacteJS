import React from "react";
import UserApi from "../api/UserApi";
import UserList22 from "../components/UserList22";
import WithLoading22 from "../hoc/withLoading22";

class UserContainer22 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  getListUser = async () => {
    try {
      // call api
      const users = await UserApi.getAll();
      // using data
      this.setState({
        users: users,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getListUser();
  }

  render() {
    const UserListWithLoading = WithLoading22(UserList22);

    return (
      <UserListWithLoading
        isLoading={this.state.users.length === 0}
        users={this.state.users}
      />
    );
  }
}

export default UserContainer22;
