/**@jsx jsx*/
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { css, jsx } from "@emotion/core";
import { navigate } from "@reach/router";

import colors from "../styles/colors";
import { actions } from "../actions/constants";

const styledForm = css`
  background-color: ${colors.light};
  height: 73vh;
  text-align: center;
  color: ${colors.primary};

  label {
    font-size: 1.4rem;
    padding: 10% 0;
  }
  input {
    color: ${colors.primary};
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${colors.secondar};
    height: 7%;
    font-size: 1.5rem;
    display: block;
    width: 70%;
    margin: 0 auto;
  }
`;

const initialValues = {
  name: "",
  price: "",
  location: ""
};

const UpdateUserPost = ({ itemId }) => {
  const [gadget, setGadget] = useState(initialValues);
  const user = useSelector((state) => state.userPosts);
  const allPosts = useSelector((state) => state.totalPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    const editGadget = user.filter((item) => {
      if (item.id == itemId) {
        return item;
      }
    });
    setGadget(editGadget[0]);
  }, [user, itemId]);

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    await axiosWithAuth().put(`gadgets/${itemId}`, gadget);
    let newPosts = await axiosWithAuth().get("gadgets");
    console.log(newPosts);
    dispatch({ type: actions.SET_ALL_POSTS, payload: newPosts.data });
    navigate("/posts");
  };
  const handleChange = (event) => {
    event.persist();
    setGadget({ ...gadget, [event.target.name]: event.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      css={css`
        ${styledForm}
      `}
    >
      <h2>Edit item</h2>
      <label htmlFor="name">
        Item
        <input
          type="text"
          name="name"
          value={gadget.name}
          onChange={handleChange}
          id="name"
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="text"
          name="price"
          value={gadget.price}
          id="price"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="location">
        Location
        <input
          type="text"
          name="location"
          onChange={handleChange}
          value={gadget.location}
          id="location"
        />
      </label>

      <button>Update</button>
    </form>
  );
};

export default UpdateUserPost;
