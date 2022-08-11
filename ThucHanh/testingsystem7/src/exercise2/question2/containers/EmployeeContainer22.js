import React from "react";
import EmployeeApi from "../api/EmployeeApi";
import EmployeeList22 from "../components/EmployeeList22";
import withAuth from "../hoc/withAuth22";
import WithLoading22 from "../hoc/withLoading22";

class EmployeeContainer22 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  getListEmployee = async () => {
    try {
      // call api
      const employees = await EmployeeApi.getAll();
      // using data
      this.setState({
        employees: employees,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getListEmployee();
  }

  render() {
    const EmployeeListWithLoading = WithLoading22(EmployeeList22);

    return (
      <EmployeeListWithLoading
        isLoading={this.state.employees.length === 0}
        employees={this.state.employees}
      />
    );
  }
}

export default withAuth(EmployeeContainer22);
