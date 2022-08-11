import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import WithLoading from '../hoc/withLoading';
import Axios from 'axios';

function UserContainer(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const CancelToken = Axios.CancelToken;
        const source = CancelToken.source();

        const getListUser = async () => {
            const baseURL = `https://5f47b29395646700168d9bd1.mockapi.io`;

            try {
                const response = await Axios.get(`${baseURL}/api/v1/employees`, {
                    cancelToken: source.token
                });
                setUsers(response.data);

            } catch (error) {
                if (Axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    console.log(error);
                }
            }
        }

        getListUser();

        return () => {
            source.cancel('Operation canceled by the user.');
        }
    });

    const UserListWithLoading = WithLoading(UserList);

    return (
        <UserListWithLoading
            isLoading={users.length === 0}
            users={users} />
    );
}

export default UserContainer;




