import { actions } from "../actions/constants/";
import * as utils from "../utils";

const initialState = {
  loading: false,
  token: "",
  user: { id: null, name: "Robert", posts: 4, postsWithOffers: 1 },
  userPosts: [],
  totalPosts: [],
  loggedIn: false,
  error: "",
  query: "",
  editing: false,
  sideNavShow: false
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
handlers[actions.SIDE_NAV_SHOW_TOGGLE] = utils.flipBoolValueInState(
  "sideNavShow"
);
handlers[actions.LOGIN_FAILED] = utils.updateValueInState("error");
handlers[actions.SET_ALL_POSTS] = utils.updateValueInState("totalPosts");

const rootReducer = (startState, handlers) => {
  return function(state = startState, action) {
    console.log({ state, action, handlers });
    console.log(actions.SET_ALL_POSTS, action.type, handlers["SET_ALL_POSTS"]);
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
