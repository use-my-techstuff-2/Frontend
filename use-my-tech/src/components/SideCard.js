/**@jsx jsx*/
import React from "react";
import ProfileCard from "./ProfileCard";
import UserPostCard from "./UserPostCard";

import { css, jsx } from "@emotion/core";
const SideCard = () => {
  return (
    <div
      className="sideDrawer"
      css={css`
        position: absolute;
        left: 10%;
        background-color: white;
        z-index: 10;
        width: 25%;
        height: 100vh;
      `}
    >
      <ProfileCard />
      <UserPostCard />
    </div>
  );
};

export default SideCard;
