import React from 'react';
import EmployeeApi from '../api/EmployeeApi';
import EmployeeList from '../components/EmployeeList';

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
        if (this.state.employees.length === 0) {
            return (
                <p>loading...</p>
            );
        }

        return (
            <EmployeeList employees={this.state.employees}/>
        );
    }
}

export default EmployeeContainer;




