/**@jsx jsx*/
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import UserPostCard from "./UserPostCard";
import UpdateUserPost from "./UpdateUserPost";
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
          left: ${showMenu ? "0" : "-100%"};
          background-color: white;
          box-shadow: 0 2px 10px black;
          z-index: 10;
          width: 25%;
          height: 100vh;
          /* overflow:scroll; */
          transition: all 0.3s ease-in-out;
        `}
      >
        <ProfileCard />
        <Router>
          <UserPostCard path="posts" />
          <AddNewPostForm path="new-gadget" />
          <UpdateUserPost path="edititem/:itemId" />
        </Router>
      </div>
    </div>
  );
};

export default SideCard;
