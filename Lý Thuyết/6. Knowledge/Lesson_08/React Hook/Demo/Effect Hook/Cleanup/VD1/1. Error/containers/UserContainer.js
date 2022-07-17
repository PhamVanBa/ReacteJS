import React from 'react';
import UserList from '../components/UserList';
import WithLoading from '../hoc/withLoading';
import Axios from 'axios';

class UserContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    getListUser = async () => {
        const baseURL = `https://5f47b29395646700168d9bd1.mockapi.io`;

        try {
            const response = await Axios.get(`${baseURL}/api/v1/employees`);
            this.setState({
                users: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getListUser();
    }

    render() {
        const UserListWithLoading = WithLoading(UserList);

        return (
            <UserListWithLoading
                isLoading={this.state.users.length === 0}
                users={this.state.users} />
        );
    }
}

export default UserContainer;




