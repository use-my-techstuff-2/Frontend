/**@jsx jsx*/

import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useSelector } from "react-redux";
import colors from "../styles/colors";

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
  },
  {
    id: 13,
    owner_id: 1,
    name: "Laptop",
    price: 75,

    location: "CO"
  },
  {
    id: 13,
    owner_id: 1,
    name: "Laptop",
    price: 75,

    location: "CO"
  }
];
const styledPosts = css`
  background: linear-gradient(90deg, ${colors.primary} 80%, ${colors.dark} 80%);
  height: 73vh;
  /* overflow: hidden; */
  text-align: center;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  h2 {
    background-color: ${colors.light};
    margin-bottom: 1%;
    height: 10%;
  }
  h4{
    background-color:${colors.dark};
    height:70vh;
    font-size:1.5rem;
    
  }
  div {
    /* background-color: ${colors.light}; */
    /* border: 1px pink solid; */

    margin-bottom: 2%;
    h3{
      background-color:${colors.dark};
    }
    div {
      background-color: red;
      height: 100%;
      transform: scaleY(0);
    }
  }
`;
const UserPostCard = () => {
  const posts = useSelector((state) => state.userPosts);
  console.log(posts.length);
  useEffect(() => {
    axiosWithAuth()
      .get("gadgets/1/gadgets")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
  return (
    <div
      css={css`
        ${styledPosts}
      `}
    >
      <h2>Posts</h2>
      {posts.length ? (
        posts.map((gadget) => (
          <div key={gadget.id} className="yourPost">
            <h3 className="yourPost__title">{gadget.name}</h3>
            <div className="post__info">
              <p className="yourPost__price">{gadget.price}</p>
              <p className="yourPost__location">{gadget.location}</p>
            </div>
          </div>
        ))
      ) : (
        <h4>No Current Posts</h4>
      )}
    </div>
  );
};

export default UserPostCard;
