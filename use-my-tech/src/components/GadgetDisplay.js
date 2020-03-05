/** @jsx jsx */
import React, { useEffect } from "react";
import GadgetPost from "./GadgetPost";
import { css, jsx } from "@emotion/core";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/constants";

const gadgets = [
  {
    id: 10,
    owner_id: 1,
    name: "Laptop",
    price: 75,

    location: "Atlanta"
  },
  {
    id: 11,
    owner_id: 1,
    name: "TV",
    price: 75,

    location: "Atlanta"
  },
  {
    id: 12,
    owner_id: 1,
    name: "X-box",
    price: 75,

    location: "VA"
  },
  {
    id: 13,
    owner_id: 1,
    name: "Laptop",
    price: 75,

    location: "CO"
  }
];

const GadgetDisplay = () => {
  const posts = useSelector((state) => state.totalPosts);
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    axiosWithAuth()
      .get("/gadgets")
      .then((res) => {
        console.log("got the data");
        dispatch({ type: actions.SET_ALL_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
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
        posts.map((gadget) => <GadgetPost gadget={gadget} />)
      ) : (
        <p>No Items to Display</p>
      )}
    </div>
  );
};

export default GadgetDisplay;
