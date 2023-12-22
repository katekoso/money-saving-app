import React from "react";
import "./CreateGoal.scss";
import goalStore from "../stores/goalStore";
import Goal from "./Goal";
import { useState } from "react";

const CreateGoalPage: React.FC = () => {
  const [goalName, setGoalName] = useState("");

  const handleGoalNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    goalStore.setGoalName(event.target.value);
    console.log(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    goalStore.addGoal(goalName);
    setGoalName(""); // Clear the input field after adding the goal
  };

  return (
    <>
      <div>
        <div>
          <button>сохранить</button>
          <button>отмена</button>
        </div>
        <div>
          <form onSubmit={handleFormSubmit}>
            <label>Название цели</label>
            <input
              type="text"
              placeholder="Введите название цели"
              onChange={handleGoalNameChange}
            />
            <label>Сумма которую хотите накопить</label>
            <input type="number" placeholder="Введите сумму" />
            <label>
              Приоритет цели
              <select>
                <option value="Высокий">Высокий</option>
                <option value="Средний">Средний</option>
                <option value="Низкий">Низкий</option>
              </select>
            </label>

            <label>
              Приоритет цели по времени
              <select>
                <option value="Долгосрочная">Долгосрочная</option>
                <option value="Краткосрочная">Краткосрочная</option>
              </select>
            </label>
            <label>Дата начала накопления</label>
            <input type="date" placeholder="Выберите дату" />
            <label>Дата окончания накопления</label>
            <input type="date" placeholder="Выберите дату" />
            <label>
              <label>Сумма которую хотите внести сейчас</label>
              <input type="number" placeholder="Введите сумму" />
            </label>
            <input type="submit" value="Пополнить" />
          </form>
        </div>
      </div>

      <Goal />
    </>
  );
};

export default CreateGoalPage;
