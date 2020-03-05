import { actions } from "../actions/constants/";
import * as utils from "../utils";

const initialState = {
  token: "",
  user: { name: "Robert", posts: 4, postsWithOffers: 1 },
  loggedIn: false,
  error: "",
  query: ""
};

// const rootReducer = (state = { initialState }, action) => {
//   console.log(state, action);
//   return state;
// };
// export default rootReducer;

// const handlers = {};

// // Handlers that are called by the reducer that update state
const handlers = {};
handlers[actions.SET_USER] = utils.updateValueInState("token");
handlers[actions.SEARCH_BY_QUERY] = utils.updateValueInState("query");
handlers[actions.LOGIN_SUCCEED] = utils.flipBoolValueInState("loggedIn");
handlers[actions.LOGIN_FAILED] = utils.updateValueInState("error");

const rootReducer = (startState, handlers) => {
  return function(state = startState, action) {
    console.log({ state, action, handlers });
    const handler = handlers[action.type];
    if (handler) {
      console.log("found handler", handler);
      return handler(state, action);
    }
    return state;
  };
};
console.log(initialState);
export default rootReducer(initialState, handlers);
