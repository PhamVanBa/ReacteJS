import React from "react";

function EmployeeList212(props) {
  const employeeList = props.employees.map((employee) => (
    <li key={employee.id}>{employee.name}</li>
  ));

  return <ul>{employeeList}</ul>;
}

export default EmployeeList212;
