import updateValueInState from "./updateValueInState";
// import axiosWithAuth from "./axiosWithAuth";
import flipBoolValueInState from "./flipBoolValueInState";
import updateValueAndLoading from "./updateValueAndLoading";

const spitBackOutState = () => (state, action) => {
  console.log(state, action);
  return { ...state, name: action.payload };
};

export {
  updateValueInState,
  flipBoolValueInState,
  spitBackOutState,
  updateValueAndLoading
};
