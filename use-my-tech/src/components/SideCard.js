/**@jsx jsx*/
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import UserPostCard from "./UserPostCard";
import { useSelector } from "react-redux";
import { Router } from "@reach/router";

import { css, jsx } from "@emotion/core";
import AddNewPostForm from "./AddNewPostForm";

const SideCard = () => {
  const showMenu = useSelector((state) => state.sideNavShow);

  return (
    <div>
      {}
      <div
        className="sideDrawer"
        css={css`
          position: absolute;
          top: 0;
          left: ${showMenu ? "10%" : "-100%"};
          background-color: white;
          box-shadow: 0 2px 10px black;
          z-index: 10;
          width: 25%;
          height: 100vh;
          /* overflow:scroll; */
          transition: all 0.8s ease-in-out;
        `}
      >
        <ProfileCard />
        <Router>
          <UserPostCard path="/" />
          <AddNewPostForm path="new-gadget" />
        </Router>
      </div>
    </div>
  );
};

export default SideCard;
