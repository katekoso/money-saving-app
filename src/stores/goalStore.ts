import { makeObservable, observable, action } from "mobx";

class GoalStore {
  goals: string[] = [];
  goalName: string = "";
  amountToSave: number = 0;
  priority: string = "";
  timePriority: string = "";
  startDate: string = "";
  endDate: string = "";
  currentAmount: number = 0;

  constructor() {
    makeObservable(this, {
      goals: observable,
      goalName: observable,
      amountToSave: observable,
      priority: observable,
      timePriority: observable,
      startDate: observable,
      endDate: observable,
      currentAmount: observable,
      setGoalName: action,
      setAmountToSave: action,
      setPriority: action,
      setTimePriority: action,
      setStartDate: action,
      setEndDate: action,
      setCurrentAmount: action,
    });
  }

  setGoalName(name: string) {
    this.goalName = name;
  }

  setAmountToSave(amount: number) {
    this.amountToSave = amount;
  }

  setPriority(priority: string) {
    this.priority = priority;
  }

  setTimePriority(timePriority: string) {
    this.timePriority = timePriority;
  }

  setStartDate(startDate: string) {
    this.startDate = startDate;
  }

  setEndDate(endDate: string) {
    this.endDate = endDate;
  }

  setCurrentAmount(currentAmount: number) {
    this.currentAmount = currentAmount;
  }

  addGoal(name: string) {
    this.goals.push(name);
  }
}

const goalStore = new GoalStore();
export default goalStore;
