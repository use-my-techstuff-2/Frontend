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
        display: none;
      `}
    >
      <ProfileCard />
      <UserPostCard />
    </div>
  );
};

export default SideCard;
