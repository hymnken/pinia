import { defineStore } from "pinia";

const useCounter = defineStore("counter", {
  state: () => ({
    count: 99
  }),
});

// const counterStore = useCounter()
export default useCounter


// defineStore("user", {});
// defineStore("home", {});
