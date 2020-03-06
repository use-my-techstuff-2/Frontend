import * as utils from "../../utils";

export const login = (user) => {
  utils.updateValueInState("user");
};

const loginFailed = () => {};
const loginSuccess = () => {};
const submitRegister = () => {};
const registerSuccess = () => {};
const registerFailed = () => {};
const profileUpdate = () => {};
const editPost = () => {};
const deletePost = () => {};
const viewOwnPosts = (state, action) => {};
export const setAllPosts = (posts) => {
  console.log(posts);
};
const viewPost = () => {};
const rentPostedItem = () => {};
const messagePoseOwner = () => {};
const viewAllPostsByUser = () => {};
const rateUser = () => {};
const leaveCommentAboutUser = () => {};
const getPostsAroundMe = () => {};
const getUserLocation = () => {};
