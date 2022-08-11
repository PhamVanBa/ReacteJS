import React from 'react';
import EmployeeApi from '../api/EmployeeApi';
import EmployeeList from '../components/EmployeeList';
import withAuth from '../hoc/withAuth';
import WithLoading from '../hoc/withLoading';

class EmployeeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    getListEmployee = async () => {
        try {
            // call api
            const employees = await EmployeeApi.getAll();
            // using data
            this.setState({
                employees: employees
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getListEmployee();
    }

    render() {
        const EmployeeListWithLoading = WithLoading(EmployeeList);

        return (
            <EmployeeListWithLoading
                isLoading={this.state.employees.length === 0}
                employees={this.state.employees} />
        );
    }
}

export default withAuth(EmployeeContainer);




