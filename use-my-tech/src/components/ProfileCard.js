/**@jsx jsx*/
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { css, jsx } from "@emotion/core";
import colors from "../styles/colors";
import { Link } from "@reach/router";
const dummyUser = {
  name: "Sarah",
  posts: 5,
  posts_with_offers: 1
};
const styledProfile = css`
  background: ${colors.dark};
  color: white;
  display: grid;
  grid-template-columns: 40% 50%;
  grid-column-gap: 5%;
  justify-content: center;
  align-items: center;
  height: 27vh;
  position: relative;
  div {
    grid-column: 1/2;
    grid-row: 1/4;
    display: grid;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50px;
      border: 1px ${colors.light} solid;
    }
  }
  a {
    color: blue;
    right: 5%;
    height: 60%;
    bottom: -20%;
    font-size: 3rem;
    text-decoration: none;
    position: absolute;
  }
`;
const ProfileCard = () => {
  let user = useSelector((state) => state.user);
  const [showButton, setShowButton] = useState(true);
  const toggleButton = () => {
    setShowButton(!showButton);
  };

  console.log(user);
  return (
    <div
      css={css`
        ${styledProfile}
      `}
    >
      <div className="img__box">
        <img
          src={require("../images/profile_img.jpg")}
          alt={"user profile"}
          width="100"
          height="100"
        />
      </div>
      <h1 className="user__name">Hello {user.name}</h1>
      <p className="user_totalPosts">Total Posts {user.posts}</p>
      <p className="user_offeredPosts">Offers {user.postsWithOffers}</p>
      {showButton ? (
        <Link onClick={toggleButton} to="new-gadget">
          +
        </Link>
      ) : (
        <Link onClick={toggleButton} to="/">
          x
        </Link>
      )}
    </div>
  );
};

export default ProfileCard;
