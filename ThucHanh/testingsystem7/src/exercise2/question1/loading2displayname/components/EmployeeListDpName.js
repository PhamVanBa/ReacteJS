import React from "react";

function EmployeeListDpName(props) {
  const employeeList = props.employees.map((employee) => (
    <li key={employee.id}>{employee.name}</li>
  ));

  return <ul>{employeeList}</ul>;
}

export default EmployeeListDpName;
