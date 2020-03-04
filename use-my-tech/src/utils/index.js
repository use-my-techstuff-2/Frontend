import updateValueInState from "./updateValueInState";
// import axiosWithAuth from "./axiosWithAuth";
import flipBoolValueInState from "./flipBoolValueInState";

const spitBackOutState = () => (state, action) => {
  console.log(state, action);
  return { ...state, name: action.payload };
};

export { updateValueInState, flipBoolValueInState, spitBackOutState };
