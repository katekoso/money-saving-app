import { makeObservable, observable, action } from "mobx";

class LoaderStore {
  isLoading: boolean = false;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      setLoading: action,
    });
  }

  setLoading = (value: boolean) => {
    this.isLoading = value;
  };
}

const loaderStore = new LoaderStore();
export default loaderStore;
