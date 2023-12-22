import React from "react";
import { observer } from "mobx-react";
import goalStore from "../stores/goalStore";

const GoalPage: React.FC = observer(() => {
  return (
    <div>
      <h2>Goals</h2>
      <ul>
        {goalStore.goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
});

export default GoalPage;
