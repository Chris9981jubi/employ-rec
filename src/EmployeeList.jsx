// EmployeeList.js
import React from 'react';

const EmployeeList = ({ employees, addToTeam }) => {
  return (
    <ul>
      {employees.map(employee => (
        <li key={employee.id}>
          <span>{employee.name} (Age: {employee.age})</span>
          <button onClick={() => addToTeam(employee)}>Add</button>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
