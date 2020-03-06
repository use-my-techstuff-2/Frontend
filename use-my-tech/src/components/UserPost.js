import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { navigate } from "@reach/router";
import { actions } from "../actions/constants";
import { useSelector, useDispatch } from "react-redux";

const UserPost = ({ gadget }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user_id);
  const deleteItem = async (id) => {
    try {
      let deleteRes = await axiosWithAuth().delete(`gadgets/${id}`);
      let newPosts = await axiosWithAuth().get("gadgets");
      let newUserPosts = await axiosWithAuth().get(`gadgets/${user}/gadgets`);
      dispatch({ type: actions.SET_ALL_POSTS, payload: newPosts.data });
      dispatch({ type: actions.SET_USER_POSTS, payload: newUserPosts.data });
    } catch (err) {
      return alert(err.message);
    }
  };

  const editItem = (id) => {
    console.log(id);
    navigate(`edititem/${id}`);
  };

  return (
    <div className="yourPost">
      <h3 className="yourPost__title">{gadget.name}</h3>
      <div className="post__info">
        <p className="yourPost__price">{gadget.price}</p>
        <p className="yourPost__location">{gadget.location}</p>
        <button onClick={() => deleteItem(gadget.id)}>Delete</button>
        <button onClick={() => editItem(gadget.id)}>Edit</button>
      </div>
    </div>
  );
};

export default UserPost;
