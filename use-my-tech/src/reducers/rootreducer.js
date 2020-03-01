import { actions } from "../actions/constants/";
import * as utils from "../utils";

const initialState = {
  token: "",
  loggedIn: false,
  error: ""
};

const handlers = {};

//Handlers that are called by the reducer that update state

handlers[actions.SET_USER] = utils.updateValueInState("token");
handlers[actions.LOGIN_SUCCEED] = utils.flipBoolValueInState("loggedIn");
handlers[actions.LOGIN_FAILED] = utils.updateValueInState("error");

const rootReducer = (initialState = {}, handlers) => {
  return function(state = initialState, action) {
    console.log(state, action, handlers);
    const handler = handlers[action.type];
    if (handler) {
      return handler(state, action);
    }
    return state;
  };
};

export default rootReducer(initialState, handlers);
