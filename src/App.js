// App.js
import React, { useState } from 'react';
import './App.css';
import EmployeeList from './EmployeeList';
import TeamList from './TeamList';

const employeesData = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Akash', age: 25 },
  { id: 3, name: 'Bhuvan', age: 35 },
  { id: 4, name: 'Chris', age: 28 },
];

function App() {
  const [employees, setEmployees] = useState(employeesData);
  const [team, setTeam] = useState([]);
  const [averageAge, setAverageAge] = useState(0);

  const addToTeam = (employee) => {
    setTeam([...team, employee]);
    setEmployees(employees.filter(emp => emp.id !== employee.id));
    calculateAverageAge([...team, employee]);
  };

  const removeFromTeam = (employee) => {
    setEmployees([...employees, employee]);
    setTeam(team.filter(emp => emp.id !== employee.id));
    calculateAverageAge(team.filter(emp => emp.id !== employee.id));
  };

  const calculateAverageAge = (team) => {
    const totalAge = team.reduce((sum, emp) => sum + emp.age, 0);
    const avgAge = totalAge / team.length;
    setAverageAge(avgAge);
  };

  const sortTeamByAge = () => {
    const sortedTeam = [...team].sort((a, b) => a.age - b.age);
    setTeam(sortedTeam);
  };

  return (
    <div className="App">
      <div className="box">
        <h2>Employees List</h2>
        <EmployeeList
          employees={employees}
          addToTeam={addToTeam}
        />
      </div>
      <div className="box">
        <h2>Team Members</h2>
        <TeamList
          team={team}
          removeFromTeam={removeFromTeam}
          averageAge={averageAge}
          sortTeamByAge={sortTeamByAge}
        />
      </div>
    </div>
  );
}

export default App;
