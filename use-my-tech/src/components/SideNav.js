/**@jsx jsx*/
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { css, jsx } from "@emotion/core";

import { actions } from "../actions/constants";

const styledNav = css`
  height: 100%;
  background: pink;
  ul {
    height: 100%;
    list-style: none;
    li {
      height: 33%;
    }
    button {
      border: none;
      height: 100%;
      width: 85%;
    }
  }
`;

const SideNav = () => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch({ type: actions.SIDE_NAV_SHOW_TOGGLE });
  };

  return (
    <div
      className="sideNav"
      css={css`
        ${styledNav}
      `}
    >
      <ul>
        <li>
          <button onClick={toggleMenu}>Your Posts</button>
        </li>
        <li>
          <button onClick={toggleMenu}>Watched Posts</button>
        </li>
        <li>
          <button onClick={toggleMenu}>Messages </button>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
