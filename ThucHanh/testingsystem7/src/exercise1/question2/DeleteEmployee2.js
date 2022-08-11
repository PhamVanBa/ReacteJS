import React from "react";
import API from "./API";

class DeleteEmployee extends React.Component {
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

  deleteEmployeeById(id) {
    API.delete(`/employees/${id}`)
      .then((response) => {
        this.getListEmployee();
      })
      .catch((error) => console.log(error));
  }

  render() {
    const personList = this.state.employees.map((employee) => (
      <li
        key={employee.id}
        onClick={() => this.deleteEmployeeById(employee.id)}
      >
        {employee.name}
      </li>
    ));

    return <ul>{personList}</ul>;
  }
}

export default DeleteEmployee;
