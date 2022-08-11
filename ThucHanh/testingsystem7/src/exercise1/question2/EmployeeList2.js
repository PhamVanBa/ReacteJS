import React from "react";
import API from "./API";

class EmployeeList2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  getListEmployee = function () {
    API.get(`/employees`)
      .then((response) => {
        this.setState({
          employees: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getListEmployee();
  }

  render() {
    const personList = this.state.employees.map((employee) => (
      <li key={employee.id}>{employee.name}</li>
    ));

    return <ul>{personList}</ul>;
  }
}

export default EmployeeList2;
