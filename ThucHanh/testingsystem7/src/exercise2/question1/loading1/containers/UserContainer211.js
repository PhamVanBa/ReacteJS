import React from "react";
import UserApi from "../api/UserApi";
import UserList211 from "../components/UserList211";

class UserContainer211 extends React.Component {
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
    if (this.state.users.length === 0) {
      return <p>loading...</p>;
    }
    return <UserList211 users={this.state.users} />;
  }
}

export default UserContainer211;
