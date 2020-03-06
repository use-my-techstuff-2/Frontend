/** @jsx jsx */
import React, { useEffect, useState } from "react";
import GadgetPost from "./GadgetPost";
import { css, jsx } from "@emotion/core";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/constants";

const GadgetDisplay = () => {
  const posts = useSelector((state) => state.totalPosts);
  const userPosts = useSelector((state) => state.userPosts);
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/gadgets")
      .then((res) => {
        dispatch({ type: actions.SET_ALL_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  }, [dispatch, userPosts]);

  useEffect(() => {
    console.log("Searching", query);
    if (query) {
      const queriedPosts = posts.filter((post) => {
        if (post.name.toLowerCase().includes(query)) {
          return post;
        }
      });
      if (queriedPosts.length > 0) {
        setGadgets(queriedPosts);
      }
    } else {
      setGadgets(posts);
    }
  }, [posts, query]);

  return (
    <div
      className="gadgetDisplay"
      css={{
        display: "grid",
        gridTemplateColumns: "30% 30% 30%",
        justifyContent: "space-around",
        gridRowGap: "10%",
        width: "100%"
      }}
    >
      {gadgets.length ? (
        gadgets.map((gadget) => <GadgetPost key={gadget.id} gadget={gadget} />)
      ) : (
        <p>No Items to Display</p>
      )}
    </div>
  );
};

export default GadgetDisplay;
