import React from "react";
import UserApi from "../api/UserApi";
import UserList212 from "../components/UserList212";
import WithLoading from "../hoc/withLoading";

class UserContainer212 extends React.Component {
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
    const UserListWithLoading = WithLoading(UserList212);

    return (
      <UserListWithLoading
        isLoading={this.state.users.length === 0}
        users={this.state.users}
      />
    );
  }
}

export default UserContainer212;
