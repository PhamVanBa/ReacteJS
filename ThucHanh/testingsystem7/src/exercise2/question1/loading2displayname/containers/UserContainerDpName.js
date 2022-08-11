import React from "react";
import UserApi from "../api/UserApi";
import UserListDpName from "../components/UserListDpName";
import withLoadingDisplayName from "../hoc/withLoadingDisplayName";

class UserContainerDpName extends React.Component {
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
    const UserListWithLoading = withLoadingDisplayName(UserListDpName);

    return (
      <UserListWithLoading
        isLoading={this.state.users.length === 0}
        users={this.state.users}
      />
    );
  }
}

export default UserContainerDpName;
