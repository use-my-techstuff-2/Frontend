/** @jsx jsx */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";

import SideNav from "./SideNav";
import SideCard from "./SideCard";
import SearchBar from "./SearchBar";
import GadgetDisplay from "./GadgetDisplay";
import AddNewPostForm from "./AddNewPostForm";
import colors from "../styles/colors";

const UserPage = () => {
  //   useEffect(() => {
  //     axios
  //       .get("https://usemytechstuff-bw.herokuapp.com/api/gadgets/2/gadgets")
  //       .then((res) => {
  //         console.log(res, "Login");
  //       })
  //       .catch((error) => console.log({ error }));
  //   }, []);
  //   useEffect(() => {
  //     axios
  //       .get("https://usemytechstuff-bw.herokuapp.com/api/gadgets")
  //       .then((res) => {
  //         console.log(res, "Login");
  //       })
  //       .catch((error) => console.log({ error }));
  //   }, []);

  return (
    <div
      css={css`
        height: 100vh;
        display: grid;
        background: linear-gradient(45deg, ${colors.dark}, transparent),
          repeating-linear-gradient(
            45deg,
            ${colors.light} 0%,
            ${colors.light} 5%,
            transparent 5%,
            transparent 10%,
            ${colors.light} 10%,
            ${colors.light} 11%,
            transparent 11%,
            transparent 13%
          ),
          ${colors.primary}
            repeating-linear-gradient(
              -45deg,
              #802c2c30 0%,
              #802c2c30 5%,
              transparent 5%,
              transparent 10%
            );
        grid-template-columns: 10% 80%;
        grid-template-rows: 10% 80%;
        grid-row-gap: 5%;
        grid-template-areas:
          "nav nav"
          "...posts"
          "... posts";
        .searchForm {
          grid-area: search;
        }
        .full__nav {
          grid-area: nav;
        }
        .gadgetDisplay {
          grid-area: posts;
        }
      `}
    >
      <SideNav />
      <SideCard />
      {/* <SearchBar /> */}
      <GadgetDisplay />
    </div>
  );
};

export default UserPage;
