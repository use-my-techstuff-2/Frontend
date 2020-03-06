/** @jsx jsx */
import React, { useEffect } from "react";
import GadgetPost from "./GadgetPost";
import { css, jsx } from "@emotion/core";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/constants";

const GadgetDisplay = () => {
  const posts = useSelector((state) => state.totalPosts);
  const userPosts = useSelector((state) => state.userPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosWithAuth()
      .get("/gadgets")
      .then((res) => {
        dispatch({ type: actions.SET_ALL_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  }, [dispatch, userPosts]);
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
        justifyContent: "space-around",
        gridRowGap: "10%",
        width: "100%"
      }}
    >
      {posts.length ? (
        posts.map((gadget) => <GadgetPost key={gadget.id} gadget={gadget} />)
      ) : (
        <p>No Items to Display</p>
      )}
    </div>
  );
};

export default GadgetDisplay;
