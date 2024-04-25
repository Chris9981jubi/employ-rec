// TeamList.js
import React from 'react';

const TeamList = ({ team, removeFromTeam, averageAge, sortTeamByAge }) => {
  return (
    <div>
      <button onClick={sortTeamByAge}>Sort By Age</button>
      <ul>
        {team.map(employee => (
          <li key={employee.id}>
            <span>{employee.name} (Age: {employee.age})</span>
            <button onClick={() => removeFromTeam(employee)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Average Age: {averageAge.toFixed(2)}</p>
    </div>
  );
};

export default TeamList;
