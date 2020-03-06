/**@jsx jsx*/

import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useSelector, useDispatch } from "react-redux";
import colors from "../styles/colors";
import UserPost from "./UserPost";
import { actions } from "../actions/constants";

const styledPosts = css`
  background: linear-gradient(90deg, ${colors.primary} 80%, ${colors.dark} 80%);
  height: 73vh;
  overflow: scroll;
  text-align: center;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  h2 {
    background-color: ${colors.light};
    margin-bottom: 1%;
    height: 10%;
  }
  h4 {
    background-color: ${colors.dark};
    height: 70vh;
    font-size: 1.5rem;
  }
  div {
    margin-bottom: 2%;
    h3 {
      background-color: ${colors.dark};
    }
    div {
      background-color: red;
      height: 100%;
      /* transform: scaleY(0); */
    }
  }
`;
const UserPostCard = () => {
  const user = useSelector((state) => state.user_id);
  const userPosts = useSelector((state) => state.userPosts);
  const allPosts = useSelector((state) => state.totalPosts);

  const dispatch = useDispatch();
  useEffect(() => {
    axiosWithAuth()
      .get(`gadgets/1/gadgets`)
      .then((res) => {
        // setPosts(res.data);
        dispatch({ type: actions.SET_USER_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div
      css={css`
        ${styledPosts}
      `}
    >
      <h2>Posts</h2>
      {userPosts.length ? (
        userPosts.map((gadget) => <UserPost key={gadget.id} gadget={gadget} />)
      ) : (
        <h4>No Current Posts</h4>
      )}
    </div>
  );
};

export default UserPostCard;
