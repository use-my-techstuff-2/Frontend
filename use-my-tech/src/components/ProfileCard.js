/**@jsx jsx*/
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { css, jsx } from "@emotion/core";
import colors from "../styles/colors";
import { Link } from "@reach/router";
import { actions } from "../actions/constants/index";

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
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user_id);
  const userPosts = useSelector((state) => state.userPosts);
  const showButton = useSelector((state) => state.toggleButton);

  const toggleButton = () => {
    dispatch({ type: actions.TOGGLE_BUTTON });
  };

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
      <h1 className="user__name">Hello</h1>
      <p className="user_totalPosts">Total Posts:0</p>
      <p className="user_offeredPosts">Offers:0</p>
      {showButton ? (
        <Link onClick={toggleButton} to="new-gadget">
          +
        </Link>
      ) : (
        <Link onClick={toggleButton} to="/posts">
          x
        </Link>
      )}
    </div>
  );
};

export default ProfileCard;
